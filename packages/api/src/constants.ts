export const CustomRPCMethods = {
  skandha_validateUserOperation: "skandha_validateUserOperation",
  skandha_getGasPrice: "skandha_getGasPrice",
  skandha_config: "skandha_config",
  skandha_feeHistory: "skandha_feeHistory",
};

export const BundlerRPCMethods = {
  eth_chainId: "eth_chainId",
  eth_supportedEntryPoints: "eth_supportedEntryPoints",
  eth_sendUserOperation: "eth_sendUserOperation",
  eth_estimateUserOperationGas: "eth_estimateUserOperationGas",
  eth_getUserOperationReceipt: "eth_getUserOperationReceipt",
  eth_getUserOperationByHash: "eth_getUserOperationByHash",
  web3_clientVersion: "web3_clientVersion",
  debug_bundler_clearState: "debug_bundler_clearState",
  debug_bundler_dumpMempool: "debug_bundler_dumpMempool",
  debug_bundler_setReputation: "debug_bundler_setReputation",
  debug_bundler_dumpReputation: "debug_bundler_dumpReputation",
  debug_bundler_setBundlingMode: "debug_bundler_setBundlingMode",
  debug_bundler_setBundleInterval: "debug_bundler_setBundleInterval",
  debug_bundler_sendBundleNow: "debug_bundler_sendBundleNow",
};

export const RedirectedRPCMethods = {
  web3_sha3: "web3_sha3",
  net_version: "net_version",
  net_listening: "net_listening",
  net_peerCount: "net_peerCount",
  eth_protocolVersion: "eth_protocolVersion",
  eth_gasPrice: "eth_gasPrice",
  eth_blockNumber: "eth_blockNumber",
  eth_getBalance: "eth_getBalance",
  eth_getStorageAt: "eth_getStorageAt",
  eth_getTransactionCount: "eth_getTransactionCount",
  eth_getBlockTransactionCountByHash: "eth_getBlockTransactionCountByHash",
  eth_getBlockTransactionCountByNumber: "eth_getBlockTransactionCountByNumber",
  eth_getUncleCountByBlockHash: "eth_getUncleCountByBlockHash",
  eth_getUncleCountByBlockNumber: "eth_getUncleCountByBlockNumber",
  eth_getCode: "eth_getCode",
  eth_sign: "eth_sign",
  eth_call: "eth_call",
  eth_estimateGas: "eth_estimateGas",
  eth_getBlockByHash: "eth_getBlockByHash",
  eth_getBlockByNumber: "eth_getBlockByNumber",
  eth_getTransactionByHash: "eth_getTransactionByHash",
  eth_getTransactionByBlockHashAndIndex:
    "eth_getTransactionByBlockHashAndIndex",
  eth_getTransactionByBlockNumberAndIndex:
    "eth_getTransactionByBlockNumberAndIndex",
  eth_getTransactionReceipt: "eth_getTransactionReceipt",
  eth_getUncleByBlockHashAndIndex: "eth_getUncleByBlockHashAndIndex",
  eth_getUncleByBlockNumberAndIndex: "eth_getUncleByBlockNumberAndIndex",
  eth_newFilter: "eth_newFilter",
  eth_newBlockFilter: "eth_newBlockFilter",
  eth_newPendingTransactionFilter: "eth_newPendingTransactionFilter",
  eth_uninstallFilter: "eth_uninstallFilter",
  eth_getFilterChanges: "eth_getFilterChanges",
  eth_getFilterLogs: "eth_getFilterLogs",
  eth_getLogs: "eth_getLogs",
  eth_maxPriorityFeePerGas: "eth_maxPriorityFeePerGas",
  eth_sendRawTransaction: "eth_sendRawTransaction",
};

export enum HttpStatus {
  OK = 200,
  INTERNAL_SERVER_ERROR = 500,
}
