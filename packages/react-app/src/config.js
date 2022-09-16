import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xd7f14025e3e33c4f715bb5bf6cd766585c6a9806a207c34fd788558768260705"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/GlIoggxj8Ub50WBscDlsJPoOa1ddN-tx",
  },
};