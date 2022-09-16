import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xca549DE48107D9C3b75A718c5d91189dc9b43cB4"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/GlIoggxj8Ub50WBscDlsJPoOa1ddN-tx",
  },
};