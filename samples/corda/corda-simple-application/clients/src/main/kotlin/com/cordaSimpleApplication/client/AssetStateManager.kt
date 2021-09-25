/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.cordaSimpleApplication.client

import com.cordaSimpleApplication.flow.AssetFlow.IssueAssetState
import com.cordaSimpleApplication.flow.AssetFlow.GetStatesByTokenType
import com.cordaSimpleApplication.flow.AssetFlow.IssueAssetStateFromStateRef
import com.cordaSimpleApplication.state.AssetState
import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.requireObject
import com.github.ajalt.clikt.parameters.arguments.argument
import java.lang.Exception
import net.corda.core.messaging.startFlow

/**
 * The CLI command used to trigger a CreateState flow.
 *
 * @property quantity The numberOfTokens for the [AssetState].
 * @property tokenType The tokenType for the [AssetState].
 */
class IssueAssetStateCommand : CliktCommand(help = "Invokes the IssueState flow. Requires a key and value") {
    val quantity: String by argument()
    val tokenType: String by argument()
    val config by requireObject<Map<String, String>>()
    override fun run() {
        issueAssetStateHelper(quantity.toInt(), tokenType, config)
    }
}

/**
 * Helper function used by CreateStateCommand
 */
fun issueAssetStateHelper(numberOfTokens: Int, tokenType: String, config: Map<String, String>) {
    val rpc = NodeRPCConnection(
            host = config["CORDA_HOST"]!!,
            username = "clientUser1",
            password = "test",
            rpcPort = config["CORDA_PORT"]!!.toInt())
    try {
        println("IssueAsset flow with arguments $numberOfTokens, $tokenType")
        val proxy = rpc.proxy
        val createdState = proxy.startFlow(::IssueAssetState, numberOfTokens, tokenType)
                .returnValue.get().tx.outputStates.first() as AssetState
        println(createdState)
    } catch (e: Exception) {
        println(e.toString())
    } finally {
        rpc.close()
    }
}

class IssueAssetStateUsingStateRefCommand : CliktCommand(help = "Invokes the IssueState flow. Requires a key and value") {
    val linearId: String by argument()
    val config by requireObject<Map<String, String>>()
    override fun run() {
        val rpc = NodeRPCConnection(
            host = config["CORDA_HOST"]!!,
            username = "clientUser1",
            password = "test",
            rpcPort = config["CORDA_PORT"]!!.toInt())
        try {
            println("IssueAsset flow with arguments $linearId")
            val proxy = rpc.proxy
            val createdState = proxy.startFlow(::IssueAssetStateFromStateRef, linearId)
                .returnValue.get().tx.outputStates.first() as AssetState
            println(createdState)
        } catch (e: Exception) {
            println(e.toString())
        } finally {
            rpc.close()
        }
    }
}

/**
 * The CLI command used to trigger a GetStateByTokenType flow.
 *
 * @property tokenType The filter criteria for the [AssetState]s to be retrieved.
 */
class GetAssetStatesByTypeCommand : CliktCommand(help = "Get asset states by token type. Requires a token type") {
    val tokenType: String by argument()
    val config by requireObject<Map<String, String>>()
    override fun run() {
        println("Get states with type $tokenType")
        val rpc = NodeRPCConnection(
            host = config["CORDA_HOST"]!!,
            username = "clientUser1",
            password = "test",
            rpcPort = config["CORDA_PORT"]!!.toInt())
        try {
            val proxy = rpc.proxy
            val states = proxy.startFlow(::GetStatesByTokenType, tokenType)
                .returnValue.get()
            println(states.toString(Charsets.UTF_8))
        } catch (e: Exception) {
            println(e.toString())
        } finally {
            rpc.close()
        }
    }
}

/**
 * The CLI command used to trigger a GetStateByLinearId flow.
 *
 * @property linearId The linearId for the [AssetState] to be retrieved.
 */
class GetAssetStateUsingLinearIdCommand : CliktCommand(help = "Gets asset state by linearId. Requires a linearId") {
    val linearId: String by argument()
    val config by requireObject<Map<String, String>>()
    override fun run() {
        println("Get state with linearId $linearId")
        val rpc = NodeRPCConnection(
            host = config["CORDA_HOST"]!!,
            username = "clientUser1",
            password = "test",
            rpcPort = config["CORDA_PORT"]!!.toInt())
        try {
            val proxy = rpc.proxy
            val state = proxy.startFlow(com.cordaSimpleApplication.flow.AssetFlow::GetStateByLinearId, linearId)
                .returnValue.get()
            println(state)
        } catch (e: Exception) {
            println(e.toString())
        } finally {
            rpc.close()
        }
    }
}

/**
 * The CLI command used to trigger a DeleteAssetState flow.
 *
 * @property linearId The filter for the [AssetState] to be deleted.
 */
class DeleteAssetStateCommand : CliktCommand(help = "Invokes the DeleteAssetState flow. Requires a linearId") {
    val linearId: String by argument()
    val config by requireObject<Map<String, String>>()
    override fun run() {
        println("DeleteAssetState flow with linearId $linearId")
        val rpc = NodeRPCConnection(
            host = config["CORDA_HOST"]!!,
            username = "clientUser1",
            password = "test",
            rpcPort = config["CORDA_PORT"]!!.toInt())
        try {
            val proxy = rpc.proxy
            val deletedState = proxy.startFlow(com.cordaSimpleApplication.flow.AssetFlow::DeleteAssetState, linearId)
                .returnValue.get().inputs.first()
            println(deletedState)
        } catch (e: Exception) {
            println(e.toString())
        } finally {
            rpc.close()
        }
    }
}

/**
 * The CLI command used to trigger a DeleteAssetState flow.
 *
 * @property linearId The filter for the [AssetState] to be deleted.
 */
class MergeAssetStatesCommand : CliktCommand(help = "Invokes the MergeAssetStates flow. Requires two linearIds") {
    val linearId1: String by argument()
    val linearId2: String by argument()
    val config by requireObject<Map<String, String>>()
    override fun run() {
        println("MergeAssetStates flow with linearIds $linearId1 and $linearId2")
        val rpc = NodeRPCConnection(
            host = config["CORDA_HOST"]!!,
            username = "clientUser1",
            password = "test",
            rpcPort = config["CORDA_PORT"]!!.toInt())
        try {
            val proxy = rpc.proxy
            val mergedState = proxy.startFlow(com.cordaSimpleApplication.flow.AssetFlow::MergeAssetStates, linearId1, linearId2)
                .returnValue.get().inputs.first()
            println(mergedState)
        } catch (e: Exception) {
            println(e.toString())
        } finally {
            rpc.close()
        }
    }
}