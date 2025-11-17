"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

type TopbarProps = {
  onMenuClick?: () => void; // mobile menu (hamburger)
  onToggleSidebar?: () => void; // collapse/expand desktop sidebar
  sidebarOpen?: boolean;
};

export default function Topbar({ onMenuClick, onToggleSidebar, sidebarOpen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0d1117] border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 md:px-10 py-3">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md hover:bg-white/5"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>

          {/* Desktop collapse toggle */}
          <button
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
            className="hidden md:inline-flex items-center justify-center p-2 rounded-md hover:bg-white/5"
          >
            <div className="w-6 h-6 flex items-center justify-center text-sm text-gray-300">
              {sidebarOpen ? "«" : "»"}
            </div>
          </button>

          <h1 className="text-base md:text-lg font-medium text-white">
            Welcome back, <span className="text-gray-300 font-light">izzy</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Search: responsive width */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for everything"
              className="w-full bg-transparent border border-gray-600 text-white pl-10 pr-3 py-2 rounded-md placeholder-gray-400 focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Language select */}
          <div className="hidden sm:flex items-center bg-white text-black px-2 py-1 rounded-md border border-gray-300 cursor-pointer">
            <select
              className="appearance-none bg-white text-black pl-2 pr-6 py-1 rounded-md font-medium focus:outline-none cursor-pointer"
              aria-label="Select language"
            >
              <option value="en">EN</option>
              <option value="rw">RW</option>
              <option value="fr">FR</option>
            </select>
            <ChevronDown className="ml-2 w-4 h-4 text-gray-600" />
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-2">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/images/profile.png" alt="User" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
