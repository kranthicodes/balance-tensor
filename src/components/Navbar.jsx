import React from "react";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
  return (
    <nav className="bg-[#1c1c1c] border-b border-[#2a2a2a] shadow-lg relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold animated-gradient flex items-center">
              <img
                src="/icons/logo.svg"
                alt="Balance Tensor"
                className="w-6 h-6 mr-2"
              />
              Balance Tensor
            </h1>
          </div>
          
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
