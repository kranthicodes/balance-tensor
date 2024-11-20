import { formatBalance } from "@polkadot/util";
import { getBittensorApi } from "../../utils/getBittensorApi";

export const formatAccountBalance = async (address) => {
  const api = await getBittensorApi();
  const { nonce, data: balance } = await api.query.system.account(address);

  const chainDecimals = api.registry.chainDecimals[0];
  console.log("chainDecimals", chainDecimals);
  console.log("raw balance free:", balance.free.toNumber());
  console.log("raw balance frozen:", balance.frozen.toNumber());
  console.log("raw balance reserved:", balance.reserved.toNumber());
  console.log("raw balance flags:", balance.flags.toString());

  formatBalance.setDefaults({ unit: "TAO" });
  //   const defaults = formatBalance.getDefaults();
  console.log(formatBalance.getOptions());
  const free = formatBalance(balance.free, {
    withSi: true,
    decimals: chainDecimals,
    forceUnit: "-",
  });
  const reserved = formatBalance(balance.reserved, {
    withSi: true,
    decimals: chainDecimals,
    forceUnit: "-",
  });
  const frozen = formatBalance(balance.frozen, {
    withSi: true,
    decimals: chainDecimals,
    forceUnit: "-",
  });
  console.log(
    "Formatted balance:",
    `{"free": "${free}", "unit": "${"TAO"}", "reserved": "${reserved}", "frozen": "${frozen}", "nonce": "${nonce.toHuman()}"}`
  );

  return {
    free,
    reserved,
    frozen,
    nonce,
  };
};
