import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { useGlobalStore } from "../stores/globalStore";
import { shortenAddress } from "../utils/shortenAddress";

export default function Sidebar({ toggleWalletSidebar, sidebarRef }) {
  const [address, name, balance, logout] = useGlobalStore((state) => [
    state.authState.address,
    state.authState.name,
    state.authState.balance,
    state.authActions.logout,
  ]);
  return (
    <div
      ref={sidebarRef}
      id="walletSidebar"
      className="right-sidebar absolute top-[70px] right-0 flex h-[calc(100vh-70px)] w-[500px] bg-transparent transform translate-x-full z-50 py-4 px-6"
    >
      <div
        onClick={toggleWalletSidebar}
        className="px-6 py-4 cursor-pointer hover:bg-[#2a2a2a] hover:bg-opacity-15 rounded-lg"
      >
        <button className="text-white ">
          <FaAnglesRight className="w-5 h-5 text-[#9c9c9c]" />
        </button>
      </div>
      <div className="flex w-full flex-col h-full bg-[#2a2a2a] rounded-lg p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#333333] flex items-center justify-center">
              <i className="bi bi-person text-gray-300"></i>
            </div>
            <div>
              <span className="text-lg text-gray-300">
                {name ? name : shortenAddress(address, 6)}
              </span>
              {name && (
                <div className="text-sm text-gray-400">
                  ({shortenAddress(address, 6)})
                </div>
              )}
            </div>
          </div>
          <div className="text-lg text-yellow-500">{balance}</div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/32/ffd700"
                className="w-8 h-8 rounded-full"
                alt="BNB"
              />
              <div>
                <div>BNB</div>
                <div className="text-sm text-gray-400">0.002 BNB</div>
              </div>
            </div>
            <div className="text-right">
              <div>$1.36</div>
              <div className="text-red-500 text-sm">↓1.09%</div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/32/purple"
                className="w-8 h-8 rounded-full"
                alt="POL"
              />
              <div>
                <div>POL</div>
                <div className="text-sm text-gray-400">0.283 POL</div>
              </div>
            </div>
            <div className="text-right">
              <div>$0.12</div>
              <div className="text-green-500 text-sm">↑2.68%</div>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <div className="text-gray-400">Hidden (22)</div>
            <button className="text-gray-400 flex items-center">
              Show <i className="bi bi-chevron-down ml-1"></i>
            </button>
          </div>
        </div>

        <div className="w-full mt-auto">
          <button
            onClick={logout}
            className="bg-red-600 text-white py-3 px-6 rounded-lg w-full"
          >
            <i className="bi bi-box-arrow-right mr-2"></i>
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}
