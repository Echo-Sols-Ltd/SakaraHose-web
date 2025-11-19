// app/setting/page.tsx
"use client";

import { useState } from "react";
import {
  Settings, Lock, Diamond, History, Languages,
  HelpCircle, FileText, AlertTriangle, LogOut,
  ChevronRight, Edit3, ArrowLeft
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [selectedLanguage] = useState("English (USA)");

  const goTo = (tab: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tab);
    window.history.replaceState({}, "", `/?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <Settings className="w-5 h-5 text-gray-400" />
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>

      {/* Account Settings */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Account Settings</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between" onClick={() => goTo("settings_edit")}>
            <div className="flex items-center gap-3 cursor-pointer">
              <Avatar className="w-12 h-12 ring-2 ring-white/20">
                <AvatarImage src="/user.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Peace Ishimwe</p>
                <p className="text-sm text-gray-400">peace@example.com</p>
              </div>
            </div>
            <Button size="sm" className="gap-1">
              <Edit3 className="w-3.5 h-3.5" /> Edit Profile
            </Button>
          </div>

          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("change_password")}>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <span>Change Password</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Subscription & premium</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("subscription")}>
            <div className="flex items-center gap-3">
              <Diamond className="w-5 h-5 text-gray-400" />
              <span>View current subscription status</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("billing")}>
            <div className="flex items-center gap-3">
              <History className="w-5 h-5 text-gray-400" />
              <span>Billing history</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Preferences */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">App preferences</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4">
          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("language")}>
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-gray-400" />
              <span>Language selection</span>
            </div>
            <div className="text-sm text-gray-300">{selectedLanguage} <ChevronRight className="w-5 h-5 inline text-gray-400" /></div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Support & about</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("support_contact")}>
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <span>Contact support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("terms")}>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <span>Terms of services</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => goTo("report")}>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-gray-400" />
              <span>Report a problem</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Log Out */}
      <div className="bg-[#1a1d21] rounded-xl p-4">
        <div className="flex items-center justify-between py-2 text-red-400 cursor-pointer" onClick={() => alert("Logged out!")}>
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </div>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}