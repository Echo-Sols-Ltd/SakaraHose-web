
import React from "react";
import { Great_Vibes } from "next/font/google";
import {
  Home,
  Radio,
  Folder,
  Clock,
  Heart,
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "../../lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const brandFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'stations', icon: Radio, label: 'All Stations' },
    { id: 'categories', icon: Folder, label: 'Categories' },
    { id: 'recently', icon: Clock, label: 'Recently played' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    
  ];

  return (
  <aside className="w-64 bg-[#181C2B] p-6 flex flex-col gap-2 min-h-screen shadow-lg border-r border-[#23263A] fixed left-0 top-0 h-full z-20">
      <div className="mb-8 flex items-center gap-2 px-2">
        <span className={cn(brandFont.className, "text-3xl leading-none text-white")}>Sakara Hose</span>
      </div>
      <nav className="flex flex-col gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left text-base font-medium hover:bg-[#23263A] focus:outline-none",
                activeTab === tab.id ? "bg-[#23263A] text-[#FFD700]" : "text-white"
              )}
            >
              <Icon className={cn("size-5", activeTab === tab.id ? "text-[#FFD700]" : "text-white")}/>
              <span>{tab.label}</span>
            </button>
          );
        }).flatMap((node, idx) => {
          const tabId = tabs[idx].id;
          if (tabId === 'categories') {
            return [
              node,
              <div key="divider-after-categories" className="my-3 h-px bg-[#2B3044]" />
            ];
          }
          return [node];
        })}
      </nav>
      <div className="mt-auto pt-4">
        <button
          onClick={() => onTabChange('logout')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-base font-medium text-white hover:bg-[#23263A]"
        >
          <LogOut className="size-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}