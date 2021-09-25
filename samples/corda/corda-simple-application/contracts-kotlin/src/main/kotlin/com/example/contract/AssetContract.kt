package com.cordaSimpleApplication.contract

import com.cordaSimpleApplication.state.AssetState
import com.cordaSimpleApplication.state.SimpleState
import net.corda.core.contracts.CommandData
import net.corda.core.contracts.Contract
import net.corda.core.contracts.Requirements.using
import net.corda.core.contracts.requireSingleCommand
import net.corda.core.contracts.requireThat
import net.corda.core.transactions.LedgerTransaction

/**
 * An implementation of a sample asset in Corda.
 *
 * This contract enforces rules regarding the creation of a valid [AssetState], and operations on [AssetState].
 *
 * For a new [AssetState] to be issued onto the ledger, a transaction is required which takes:
 * - Zero input states.
 * - One output state: the new [AssetState].
 * - An Create() command with the public keys of the owner of the asset.
 *
 * All contracts must sub-class the [Contract] interface.
 */
class AssetContract : Contract {
    companion object {
        @JvmStatic
        val ID = "com.cordaSimpleApplication.contract.AssetContract"
    }

    /**
     * The verify() function of all the states' contracts must not throw an exception for a transaction to be
     * considered valid.
     */
    override fun verify(tx: LedgerTransaction) {
        val command = tx.commands.requireSingleCommand<AssetContract.Commands>()
        when (command.value) {
            is AssetContract.Commands.Issue -> requireThat {
                // Generic constraints around the Asset transaction.
                "No inputs should be consumed when issuing an Asset." using (tx.inputsOfType<AssetState>().isEmpty())
                "Only one output state should be created." using (tx.outputsOfType<AssetState>().size == 1)
                val out = tx.outputsOfType<AssetState>().single()
                "All of the participants must be signers." using (command.signers.containsAll(out.participants.map { it.owningKey }))
            }
            is AssetContract.Commands.Delete -> requireThat {
                "There should be one input state" using (tx.inputsOfType<AssetState>().size == 1)
                "The input state should be of type AssetState" using (tx.inputsOfType<AssetState>()[0] is AssetState)
                val input = tx.inputsOfType<AssetState>()[0]
                "There should be no output state" using (tx.outputsOfType<AssetState>().isEmpty())
                "The participant must be the signer." using (command.signers.containsAll(input.participants.map { it.owningKey }))
            }
            is AssetContract.Commands.Merge -> requireThat {
                "There should be two input states" using (tx.inputsOfType<AssetState>().size == 2)
                "First input state should be of type AssetState" using (tx.inputsOfType<AssetState>()[0] is AssetState)
                "Second input state should be of type AssetState" using (tx.inputsOfType<AssetState>()[1] is AssetState)
                val assetState1 = tx.inputsOfType<AssetState>()[0]
                val assetState2 = tx.inputsOfType<AssetState>()[1]
                "Both assets to be merged should be owned by same owner." using (assetState1.owner == assetState2.owner)
                "Only one output state should be created." using (tx.outputsOfType<AssetState>().size == 1)
                val mergedState = tx.outputsOfType<AssetState>().single()
                "The participant must be the signer." using (command.signers.containsAll(mergedState.participants.map { it.owningKey }))
            }
        }
    }

    /**
     * This contract only implements one command, Create.
     */
    interface Commands : CommandData {
        class Issue : Commands
        class Delete : Commands
        class Merge : Commands

        // Transfer tokens
        // Delete state
        // IssueAssetUsingStateRef (flow) -- will be called from reclaim/claim in interop-corDapp
        // Flow that will read the total fungible token assets of a given type
        // Flows that will split and merge tokens
    }
}
