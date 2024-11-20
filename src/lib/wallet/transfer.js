import { getBittensorApi } from "../../utils/getBittensorApi";

export async function transferBalance(address, amount, provider, userAddress) {
  const api = await getBittensorApi();
  const transfer = api.tx.balances.transferAllowDeath(
    address,
    +amount
  );

  console.log({ provider: provider.signer });
  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(userAddress, { signer: provider.signer });

  console.log("Transfer sent with hash", hash.toHex());
}
