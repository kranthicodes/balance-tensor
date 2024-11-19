import { objectSpread } from "@polkadot/util";
// import { ApiPromise } from "@polkadot/api";

const OTF_EXTENSION_NAME = "@opentensor/bittensor-extension";

export async function enableBittensorExtension(originName) {
  if (!window.injectedWeb3) throw new Error("No injectedWeb3 found");
  const provider = window.injectedWeb3[OTF_EXTENSION_NAME];

  if (!provider) throw new Error(`Bittensor extension not found`);

  const extension = await provider.enable(originName);

//   const api = await ApiPromise.create({provider: extension.provider});
//   // Retrieve the chain & node information via rpc calls
//   const [chain, nodeName, nodeVersion] = await Promise.all([
//     api.rpc.system.chain(),
//     api.rpc.system.name(),
//     api.rpc.system.version(),
//   ]);
//   console.log(await extension.provider.listProviders());

  return objectSpread(
    { name: OTF_EXTENSION_NAME, version: extension.version || "unknown" },
    extension
  );
}
