import React from "react";

export default function LandingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <div className="mb-8 animate-spin">
          <i className="bi bi-gear-wide-connected text-6xl text-[#ffbb00]"></i>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Coming Soon</h2>
        <p className="text-xl text-gray-400">
          We&apos;re building something revolutionary in the world of
          decentralized finance.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="bg-[#2a2a2a] p-6 w-[150px] rounded-lg border border-[#ffbb00]/20 hover:border-[#ffbb00]/40 transition-all duration-300">
            <i className="bi bi-shield-lock text-[#ffbb00] text-2xl mb-3"></i>
            <p className="text-gray-300">Secure</p>
          </div>
          <div className="bg-[#2a2a2a] p-6 w-[150px] rounded-lg border border-[#ffbb00]/20 hover:border-[#ffbb00]/40 transition-all duration-300">
            <i className="bi bi-lightning text-[#ffbb00] text-2xl mb-3"></i>
            <p className="text-gray-300">Fast</p>
          </div>
          <div className="bg-[#2a2a2a] p-6 w-[150px] rounded-lg border border-[#ffbb00]/20 hover:border-[#ffbb00]/40 transition-all duration-300">
            <i className="bi bi-graph-up text-[#ffbb00] text-2xl mb-3"></i>
            <p className="text-gray-300">Reliable</p>
          </div>
        </div>
      </div>
    </main>
  );
}
