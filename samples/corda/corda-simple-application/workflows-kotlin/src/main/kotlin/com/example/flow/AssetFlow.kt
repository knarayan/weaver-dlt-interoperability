package com.cordaSimpleApplication.flow

import co.paralleluniverse.fibers.Suspendable
import com.cordaSimpleApplication.state.AssetState
import com.cordaSimpleApplication.contract.AssetContract
import javassist.NotFoundException
import net.corda.core.contracts.Command
import net.corda.core.contracts.StateRef
import net.corda.core.contracts.StaticPointer
import net.corda.core.contracts.UniqueIdentifier
import net.corda.core.flows.*
import net.corda.core.node.services.Vault
import net.corda.core.node.services.queryBy
import net.corda.core.node.services.vault.QueryCriteria
import net.corda.core.transactions.SignedTransaction
import net.corda.core.transactions.TransactionBuilder
import net.corda.core.utilities.ProgressTracker
import net.corda.core.utilities.ProgressTracker.Step
import java.util.*


/**
 * This flow allows the party owning the fungible token assets perform actions on the assets.
 */
object AssetFlow {
    @InitiatingFlow
    @StartableByRPC
    class IssueAssetState(val numerOfTokens: Int, val tokenType: String) : FlowLogic<SignedTransaction>() {
        /**
         * The progress tracker checkpoints each stage of the flow and outputs the specified messages when each
         * checkpoint is reached in the code. See the 'progressTracker.currentStep' expressions within the call() function.
         */
        companion object {
            object GENERATING_TRANSACTION : Step("Generating transaction based on new fungible token asset state.")
            object VERIFYING_TRANSACTION : Step("Verifying contract constraints.")
            object SIGNING_TRANSACTION : Step("Signing transaction with our private key.")
            object FINALISING_TRANSACTION : Step("Obtaining notary signature and recording transaction.") {
                override fun childProgressTracker() = FinalityFlow.tracker()
            }

            fun tracker() = ProgressTracker(
                    GENERATING_TRANSACTION,
                    VERIFYING_TRANSACTION,
                    SIGNING_TRANSACTION,
                    FINALISING_TRANSACTION
            )
        }

        override val progressTracker = tracker()

        /**
         * The flow logic is encapsulated within the call() method.
         */
        @Suspendable
        override fun call(): SignedTransaction {

            // Obtain a reference from a notary we wish to use.
            val notary = serviceHub.networkMapCache.notaryIdentities.single()

            // Stage 1.
            progressTracker.currentStep = GENERATING_TRANSACTION
            // Generate an unsigned transaction.
            val assetState = AssetState(numerOfTokens, tokenType, serviceHub.myInfo.legalIdentities.first())

            val txCommand = Command(AssetContract.Commands.Issue(), assetState.participants.map { it.owningKey })
            val txBuilder = TransactionBuilder(notary)
                    .addOutputState(assetState, AssetContract.ID)
                    .addCommand(txCommand)

            // Stage 2.
            progressTracker.currentStep = VERIFYING_TRANSACTION
            // Verify that the transaction is valid.
            txBuilder.verify(serviceHub)

            // Stage 3.
            progressTracker.currentStep = SIGNING_TRANSACTION
            // Sign the transaction.
            val signedTx = serviceHub.signInitialTransaction(txBuilder)

            // Stage 4.
            progressTracker.currentStep = FINALISING_TRANSACTION
            val session = listOf<FlowSession>()
            // Notarise and record the transaction in both parties' vaults.
            return subFlow(FinalityFlow(signedTx, session, FINALISING_TRANSACTION.childProgressTracker()))
        }
    }

    @StartableByRPC
    class IssueAssetStateUsingStateRef(val inputStatePointer: StaticPointer<AssetState>) : FlowLogic<AssetState>() {

        override fun call(): AssetState {
            val inputState = inputStatePointer.resolve(serviceHub).state.data
            val assetState = AssetState(inputState.quantity, inputState.tokenType, serviceHub.myInfo.legalIdentities.first())
            return assetState
        }
    }

    /**
     * The DeleteAssetState flow is used to delete an existing [AssetState].
     *
     * @property linearId the filter for the [AssetState] to be deleted.
     */
    @StartableByRPC
    class DeleteAssetState(val linearId: String) : FlowLogic<SignedTransaction>() {
        /**
         * The progress tracker checkpoints each stage of the flow and outputs the specified messages when each
         * checkpoint is reached in the code. See the 'progressTracker.currentStep' expressions within the call() function.
         */
        companion object {
            object GENERATING_TRANSACTION : Step("Generating transaction based on new fungible token asset state.")
            object VERIFYING_TRANSACTION : Step("Verifying contract constraints.")
            object SIGNING_TRANSACTION : Step("Signing transaction with our private key.")
            object FINALISING_TRANSACTION : Step("Obtaining notary signature and recording transaction.") {
                override fun childProgressTracker() = FinalityFlow.tracker()
            }
            fun tracker() = ProgressTracker(
                GENERATING_TRANSACTION,
                VERIFYING_TRANSACTION,
                SIGNING_TRANSACTION,
                FINALISING_TRANSACTION
            )
        }

        override val progressTracker = tracker()

        /**
         * The call() method captures the logic to build and sign a transaction that deletes a [AssetState].
         *
         * @return returns the signed transaction.
         */
        @Suspendable
        override fun call(): SignedTransaction {
            // Obtain a reference to the notary we want to use.
            val notary = serviceHub.networkMapCache.notaryIdentities[0]

            // Stage 1.
            progressTracker.currentStep = GENERATING_TRANSACTION
            // Generate an unsigned transaction.
            val uuid = UniqueIdentifier.Companion.fromString(linearId)
            val criteria = QueryCriteria.LinearStateQueryCriteria(null, Arrays.asList(uuid),
                Vault.StateStatus.UNCONSUMED, null)
            val assetStatesWithLinearId = serviceHub.vaultService.queryBy<AssetState>(criteria).states

            if (assetStatesWithLinearId.isEmpty()) {
                throw NotFoundException("AssetState with linearId $linearId not found")
            }
            val inputState = assetStatesWithLinearId.first()
            println("Deleting asset state from the ledger: $inputState\n")
            val txCommand = Command(AssetContract.Commands.Delete(), inputState.state.data.participants.map { it.owningKey })
            val txBuilder = TransactionBuilder(notary)
                .addInputState(inputState)
                .addCommand(txCommand)

            // Stage 2.
            progressTracker.currentStep = VERIFYING_TRANSACTION
            // Verify that the transaction is valid.
            txBuilder.verify(serviceHub)

            // Stage 3.
            progressTracker.currentStep = SIGNING_TRANSACTION
            // Sign the transaction.
            val signedTx = serviceHub.signInitialTransaction(txBuilder)

            // Stage 5.
            progressTracker.currentStep = FINALISING_TRANSACTION
            val session = listOf<FlowSession>()
            // Notarise and record the transaction in the party's vault.
            return subFlow(FinalityFlow(signedTx, session, FINALISING_TRANSACTION.childProgressTracker()))
        }
    }

    /**
     * The GetStatesByTokenType flow is used to retrieve list of [AssetState]s from the vault based on the tokenType.
     *
     * @property tokenType the filter for the [AssetState] list to be retrieved.
     */
    @StartableByRPC
    class GetStatesByTokenType(val tokenType: String) : FlowLogic<ByteArray>() {
        @Suspendable

        /**
         * The call() method captures the logic to find one or more [AssetState]s in the vault based on the tokenType.
         *
         * @return returns list of [AssetState]s.
         */
        override fun call(): ByteArray {
            val states = serviceHub.vaultService.queryBy<AssetState>().states
                .filter { it.state.data.tokenType == tokenType }
                .map { it.state.data }
            println("Retrieved states with tokenType $tokenType: $states\n")
            return states.toString().toByteArray()
        }
    }

    /**
     * The GetAssetByLinearId flow is used to retrieve a [AssetState] from the vault based on its linearId.
     *
     * @property linearId the linearId for the [AssetState] to be retrieved.
     */
    @StartableByRPC
    class GetStateByLinearId(val linearId: String) : FlowLogic<String>() {
        @Suspendable

        /**
         * The call() method captures the logic to find a [AssetState] in the vault based on its linearId.
         *
         * @return returns the [AssetState].
         */
        override fun call(): String {
            val uuid = UniqueIdentifier.Companion.fromString(linearId)
            val criteria = QueryCriteria.LinearStateQueryCriteria(null, Arrays.asList(uuid),
                Vault.StateStatus.UNCONSUMED, null)
            val assetStates = serviceHub.vaultService.queryBy<AssetState>(criteria).states
                .map { it.state.data }
            val assetState = assetStates.first()
            println("Retrieved asset state with linearId $linearId: $assetState\n")
            return assetState.toString()
        }
    }

    @StartableByRPC
    class IssueAssetStateFromStateRef(val linearId: String) : FlowLogic<SignedTransaction>() {
        /**
         * The progress tracker checkpoints each stage of the flow and outputs the specified messages when each
         * checkpoint is reached in the code. See the 'progressTracker.currentStep' expressions within the call() function.
         */
        companion object {
            object GENERATING_TRANSACTION : Step("Generating transaction based on new fungible token asset state.")
            object VERIFYING_TRANSACTION : Step("Verifying contract constraints.")
            object SIGNING_TRANSACTION : Step("Signing transaction with our private key.")
            object FINALISING_TRANSACTION : Step("Obtaining notary signature and recording transaction.") {
                override fun childProgressTracker() = FinalityFlow.tracker()
            }

            fun tracker() = ProgressTracker(
                GENERATING_TRANSACTION,
                VERIFYING_TRANSACTION,
                SIGNING_TRANSACTION,
                FINALISING_TRANSACTION
            )
        }

        override val progressTracker = tracker()

        /**
         * The flow logic is encapsulated within the call() method.
         */
        @Suspendable
        override fun call(): SignedTransaction {

            // Obtain a reference from a notary we wish to use.
            val notary = serviceHub.networkMapCache.notaryIdentities.single()

            // Stage 1.
            progressTracker.currentStep = GENERATING_TRANSACTION
            // Generate an unsigned transaction.

            val uuid = UniqueIdentifier.Companion.fromString(linearId)
            val criteria = QueryCriteria.LinearStateQueryCriteria(null, Arrays.asList(uuid),
                Vault.StateStatus.UNCONSUMED, null)
            val assetStates = serviceHub.vaultService.queryBy<AssetState>(criteria).states
            val pointedToState = assetStates.first()
            println("Retrieved asset state with linearId $linearId: $pointedToState\n")

            val stateStaticPointer = StaticPointer(pointedToState.ref, pointedToState.state.data.javaClass)
            //val pointedToStateCopy = stateStaticPointer.resolve(serviceHub).state.data
            //val assetState = AssetState(pointedToStateCopy.quantity, pointedToStateCopy.tokenType, serviceHub.myInfo.legalIdentities.first())

            val assetState = subFlow(IssueAssetStateUsingStateRef(stateStaticPointer))

            val txCommand = Command(AssetContract.Commands.Issue(), assetState.participants.map { it.owningKey })
            val txBuilder = TransactionBuilder(notary)
                .addOutputState(assetState, AssetContract.ID)
                .addCommand(txCommand)

            // Stage 2.
            progressTracker.currentStep = VERIFYING_TRANSACTION
            // Verify that the transaction is valid.
            txBuilder.verify(serviceHub)

            // Stage 3.
            progressTracker.currentStep = SIGNING_TRANSACTION
            // Sign the transaction.
            val signedTx = serviceHub.signInitialTransaction(txBuilder)

            // Stage 4.
            progressTracker.currentStep = FINALISING_TRANSACTION
            val session = listOf<FlowSession>()
            // Notarise and record the transaction in both parties' vaults.
            return subFlow(FinalityFlow(signedTx, session, FINALISING_TRANSACTION.childProgressTracker()))
        }
    }

    @StartableByRPC
    class MergeAssetStates(val linearId1: String, val linearId2: String) : FlowLogic<SignedTransaction>() {
        /**
         * The progress tracker checkpoints each stage of the flow and outputs the specified messages when each
         * checkpoint is reached in the code. See the 'progressTracker.currentStep' expressions within the call() function.
         */
        companion object {
            object GENERATING_TRANSACTION : Step("Generating transaction based on new fungible token asset state.")
            object VERIFYING_TRANSACTION : Step("Verifying contract constraints.")
            object SIGNING_TRANSACTION : Step("Signing transaction with our private key.")
            object FINALISING_TRANSACTION : Step("Obtaining notary signature and recording transaction.") {
                override fun childProgressTracker() = FinalityFlow.tracker()
            }

            fun tracker() = ProgressTracker(
                GENERATING_TRANSACTION,
                VERIFYING_TRANSACTION,
                SIGNING_TRANSACTION,
                FINALISING_TRANSACTION
            )
        }

        override val progressTracker = tracker()

        /**
         * The flow logic is encapsulated within the call() method.
         */
        @Suspendable
        override fun call(): SignedTransaction {

            // Obtain a reference from a notary we wish to use.
            val notary = serviceHub.networkMapCache.notaryIdentities.single()

            // Stage 1.
            progressTracker.currentStep = GENERATING_TRANSACTION
            // Generate an unsigned transaction.

            var uuid = UniqueIdentifier.Companion.fromString(linearId1)
            var criteria = QueryCriteria.LinearStateQueryCriteria(null, Arrays.asList(uuid),
                Vault.StateStatus.UNCONSUMED, null)
            var assetStatesWithLinearId = serviceHub.vaultService.queryBy<AssetState>(criteria).states
            if (assetStatesWithLinearId.isEmpty()) {
                throw NotFoundException("AssetState with linearId $linearId1 not found")
            }
            val assetState1 = assetStatesWithLinearId.first()

            uuid = UniqueIdentifier.Companion.fromString(linearId2)
            criteria = QueryCriteria.LinearStateQueryCriteria(null, Arrays.asList(uuid),
                Vault.StateStatus.UNCONSUMED, null)
            assetStatesWithLinearId = serviceHub.vaultService.queryBy<AssetState>(criteria).states
            if (assetStatesWithLinearId.isEmpty()) {
                throw NotFoundException("AssetState with linearId $linearId2 not found")
            }
            val assetState2 = assetStatesWithLinearId.first()

            println("Merging asset states from the ledger: $assetState1.state.data and ${assetState2.state.data}\n")

            val mergedState = AssetState(assetState1.state.data.quantity + assetState2.state.data.quantity, assetState1.state.data.tokenType, serviceHub.myInfo.legalIdentities.first())

            val txCommand = Command(AssetContract.Commands.Merge(), mergedState.participants.map { it.owningKey })
            val txBuilder = TransactionBuilder(notary)
                .addInputState(assetState1)
                .addInputState(assetState2)
                .addOutputState(mergedState, AssetContract.ID)
                .addCommand(txCommand)

            // Stage 2.
            progressTracker.currentStep = VERIFYING_TRANSACTION
            // Verify that the transaction is valid.
            txBuilder.verify(serviceHub)

            // Stage 3.
            progressTracker.currentStep = SIGNING_TRANSACTION
            // Sign the transaction.
            val signedTx = serviceHub.signInitialTransaction(txBuilder)

            // Stage 4.
            progressTracker.currentStep = FINALISING_TRANSACTION
            val session = listOf<FlowSession>()
            // Notarise and record the transaction in both parties' vaults.
            return subFlow(FinalityFlow(signedTx, session, FINALISING_TRANSACTION.childProgressTracker()))
        }
    }
}