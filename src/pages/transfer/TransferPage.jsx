import { useState } from "react";
import { transferBalance } from "../../lib/wallet/transfer";
import { useGlobalStore } from "../../stores/globalStore";

export default function TransferPage() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [extension, userAddress] = useGlobalStore((state) => [
    state.authState.extension,
    state.authState.address,
  ]);

  async function handleTransfer() {
    if (!extension || !address || !amount || !userAddress) return;

    await transferBalance(address, amount, extension, userAddress);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-16 flex flex-col">
      <h1 className="text-4xl font-bold text-white">Transfer</h1>
      <div className="bg-[#2a2a2a] p-6 w-[650px] flex flex-col gap-8 rounded-lg border border-[#ffbb00]/40 transition-all duration-300">
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 text-sm">Address</label>
          <input
            type="text"
            placeholder="Eg: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"
            className="bg-transparent border-b border-gray-500 outline-none text-white font-mono"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 text-sm">Amount</label>
          <input
            type="number"
            placeholder="Eg: 100"
            className="bg-transparent border-b border-gray-500 outline-none text-white"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={handleTransfer}
          className="bg-[#ffbb00] gap-2 flex items-center justify-center text-[#1c1c1c] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffd700] transition-all duration-300 gold-glow"
        >
          Transfer
          <i className="bi bi-send text-black"></i>
        </button>
      </div>
    </main>
  );
}
