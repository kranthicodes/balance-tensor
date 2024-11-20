import { ApiPromise, WsProvider } from "@polkadot/api";
import { MAINNET_CHAIN_API_ENDPOINT } from "./constants";

export async function getBittensorApi() {
  const wsProvider = new WsProvider(MAINNET_CHAIN_API_ENDPOINT);
  return await ApiPromise.create({ provider: wsProvider });
}
