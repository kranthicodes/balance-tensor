export function shortenAddress(address, range = 4) {
  return address.slice(0, range) + "..." + address.slice(-range);
}
