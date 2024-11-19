import React, { useRef } from "react";
import Sidebar from "./Sidebar";
import { useGlobalStore } from "../stores/globalStore";
import { shortenAddress } from "../utils/shortenAddress";
export default function ProfileButton() {
  const [address, name, login] = useGlobalStore((state) => [
    state.authState.address,
    state.authState.name,
    state.authActions.login,
  ]);
  const sideBarRef = useRef(null);

  function toggleWalletSidebar() {
    if (!sideBarRef.current) return;
    sideBarRef.current.classList.toggle("translate-x-full");
  }

  if (!address) {
    return (
      <div className="flex items-center">
        <button
          onClick={login}
          id="connectButton"
          className="bg-[#ffbb00] text-[#1c1c1c] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffd700] transition-all duration-300 gold-glow"
        >
          <i className="bi bi-wallet2 mr-2"></i>Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <button
          onClick={toggleWalletSidebar}
          id="walletButton"
          className="flex items-center space-x-3 bg-[#2a2a2a] px-4 py-2 rounded-lg hover:bg-[#333333] transition-colors"
        >
          <div className="h-8 w-8 rounded-full bg-[#333333] flex items-center justify-center">
            <i className="bi bi-person text-gray-300"></i>
          </div>
          <span id="userAddress" className="text-sm text-gray-300">
            {name ? name : shortenAddress(address, 6)}
          </span>
        </button>
      </div>
      <Sidebar
        toggleWalletSidebar={toggleWalletSidebar}
        sidebarRef={sideBarRef}
      />
    </>
  );
}
