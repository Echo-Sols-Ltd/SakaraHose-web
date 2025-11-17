// app/dashboard/settings/page.tsx
"use client";

import { useState } from "react";
import {
  Settings,
  User,
  Lock,
  Diamond,
  History,
  Languages,
  HelpCircle,
  FileText,
  AlertTriangle,
  LogOut,
  ChevronRight,
  Edit3,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("English(USA)");

  const handleEditProfile = () => {
    router.push("/setting/edit");
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
          {/* Profile Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 ring-2 ring-white/20">
                <AvatarImage src="/user.png" alt="Peace Ishimwe" />
                <AvatarFallback className="bg-gray-700 text-lg">P</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-white">Peace Ishimwe</p>
                <p className="text-sm text-gray-400">peace@example.com</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleEditProfile}
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" />
              Edit Profile
            </Button>
          </div>

          {/* Change Password */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <span className="text-white">Change Password</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Subscription & Premium */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Subscription & premium</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Diamond className="w-5 h-5 text-gray-400" />
              <span className="text-white">View current subscription status</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <History className="w-5 h-5 text-gray-400" />
              <span className="text-white">Billing history</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* App Preferences */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">App preferences</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-gray-400" />
              <span className="text-white">Language selection</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <span className="text-sm">{selectedLanguage}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Support & About */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Support & about</h2>
        <div className="bg-[#1a1d21] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <span className="text-white">Contact support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <span className="text-white">Terms of services</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-gray-400" />
              <span className="text-white">Report a problem</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Log Out */}
      <div className="bg-[#1a1d21] rounded-xl p-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-gray-400" />
            <span className="text-white">Log out</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}