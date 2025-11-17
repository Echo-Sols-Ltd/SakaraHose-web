"use client";

import React from "react";
import { Great_Vibes } from "next/font/google";
import {
  Home,
  Radio,
  Folder,
  Clock,
  Heart,
  Settings,
  LogOut,
  X
} from "lucide-react";
import { cn } from "../../lib/utils";

type Tab = { id: string; icon: any; label: string };

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  sidebarOpen?: boolean; // controls collapsed width on desktop
  toggleSidebar?: () => void;
  isMobileSidebarOpen?: boolean; // when true we show full-screen mobile overlay
  setIsMobileSidebarOpen?: (open: boolean) => void;
}

const brandFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Sidebar({
  activeTab,
  onTabChange,
  sidebarOpen = true,
  toggleSidebar,
  isMobileSidebarOpen = false,
  setIsMobileSidebarOpen,
}: SidebarProps) {
  const tabs: Tab[] = [
    { id: "home", icon: Home, label: "Home" },
    { id: "stations", icon: Radio, label: "All Stations" },
    { id: "categories", icon: Folder, label: "Categories" },
    { id: "recently", icon: Clock, label: "Recently played" },
    { id: "favorites", icon: Heart, label: "Favorites" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const renderNav = (
    <nav className="flex flex-col gap-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              onTabChange(tab.id);
              if (isMobileSidebarOpen && setIsMobileSidebarOpen) setIsMobileSidebarOpen(false);
            }}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left text-base font-medium hover:bg-[#23263A] focus:outline-none",
              isActive ? "bg-[#23263A] text-[#FFD700]" : "text-white"
            )}
          >
            <Icon className={cn("w-5 h-5", isActive ? "text-[#FFD700]" : "text-white")} />
            <span className={cn(sidebarOpen ? "inline" : "hidden md:inline")}>{tab.label}</span>
          </button>
        );
      })}
      <div className="my-3 h-px bg-[#2B3044]" />
    </nav>
  );

  // Desktop aside (collapsed/expanded)
  const desktopAside = (
    <aside
      className={cn(
        "hidden md:flex flex-col bg-[#181C2B] p-6 min-h-screen shadow-lg border-r border-[#23263A] fixed left-0 top-0 z-20 transition-all",
        sidebarOpen ? "w-64" : "w-20"
      )}
    >
      <div className="mb-6 flex items-center gap-2 px-2">
        <span className={cn(brandFont.className, "text-3xl leading-none text-white")}>
          <span className={sidebarOpen ? "" : "hidden"}>Sakara Hose</span>
          <span className={!sidebarOpen ? "block mx-auto" : "hidden"}>SH</span>
        </span>
      </div>

      {renderNav}

      <div className="mt-auto pt-4">
        <button
          onClick={() => onTabChange("logout")}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-base font-medium text-white hover:bg-[#23263A]"
        >
          <LogOut className="w-5 h-5" />
          <span className={cn(sidebarOpen ? "inline" : "hidden md:inline")}>Log out</span>
        </button>
      </div>
    </aside>
  );

  // Mobile overlay aside (full screen)
  const mobileOverlay = (
    <div className="md:hidden fixed inset-0 z-40">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsMobileSidebarOpen?.(false)}
        aria-hidden
      />
      <aside className="absolute left-0 top-0 bottom-0 w-72 bg-[#181C2B] p-5 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <span className={cn(brandFont.className, "text-2xl text-white")}>Sakara Hose</span>
          <button
            onClick={() => setIsMobileSidebarOpen?.(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white/5"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {renderNav}

        <div className="mt-6">
          <button
            onClick={() => {
              onTabChange("logout");
              setIsMobileSidebarOpen?.(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-base font-medium text-white hover:bg-[#23263A]"
          >
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      {desktopAside}
      {isMobileSidebarOpen && mobileOverlay}
    </>
  );
}
