// app/dashboard/settings/page.tsx
"use client";

import Link from "next/link";
import {
  ChevronRight,
  User,
  CreditCard,
  Receipt,
  Globe,
  LifeBuoy,
  FileText,
  AlertTriangle,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="p-6">
      {/* Heading */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mt-1">
          <User className="w-5 h-5 text-white" />
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </div>

      {/* Card */}
      <div className="rounded-xl border border-gray-800 bg-[#12161d]">
        {/* Account Settings */}
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-300 mb-4">Account Settings</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                <img src="/user.png" alt="profile" className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <p className="text-base font-medium">Peace Ishimwe</p>
                <p className="text-xs text-gray-400">peace@example.com</p>
                <button className="mt-2 text-xs text-gray-300 hover:text-white">Change Password</button>
              </div>
            </div>
            <Link href="/?tab=settings_edit">
              <Button size="sm" variant="secondary">Edit Profile</Button>
            </Link>
          </div>
        </div>

        {/* Subscription & premium */}
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-300 mb-3">Subscription & premium</h2>
          <div className="space-y-2">
            <Link href="/dashboard/settings/subscription" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-white" />
                <span className="text-sm">View current subscription status</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            <Link href="/dashboard/settings/billing" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors">
              <div className="flex items-center gap-3">
                <Receipt className="w-5 h-5 text-white" />
                <span className="text-sm">Billing history</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* App preferences */}
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-300 mb-3">App preferences</h2>
          <Link href="/dashboard/settings/language" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-sm">Language selection</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        </div>

        {/* Support & about */}
        <div className="p-6">
          <h2 className="text-sm font-semibold text-gray-300 mb-3">Support & about</h2>
          <div className="space-y-2">
            <Link href="/dashboard/settings/support" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors">
              <div className="flex items-center gap-3">
                <LifeBuoy className="w-5 h-5 text-white" />
                <span className="text-sm">Contact support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            <Link href="/dashboard/settings/terms" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-white" />
                <span className="text-sm">Terms of services</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            <Link href="/dashboard/settings/report" className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-white" />
                <span className="text-sm">Report a problem</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#0f131a] hover:bg-[#161b22] transition-colors mt-2 text-left">
              <div className="flex items-center gap-3 text-gray-300">
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Log out</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
