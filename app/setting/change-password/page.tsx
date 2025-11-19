"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

const goBack = () => {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", "settings");
  window.history.replaceState({}, "", `/?${params.toString()}`);
};

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={goBack} className="p-2 hover:bg-[#1a1d21] rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Change Password</h1>
      </div>

      <div className="max-w-md mx-auto bg-[#1a1d21] rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb- mb-2">Current Password</label>
          <Input type="password" className="h-12 bg-[#0d1117] border-gray-700" placeholder="••••••••" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
          <Input type="password" className="h-12 bg-[#0d1117] border-gray-700" placeholder="Enter new password" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
          <Input type="password" className="h-12 bg-[#0d1117] border-gray-700" placeholder="Repeat new password" />
        </div>

        <Button className="w-full h-12 bg-[#2a2f36] hover:bg-[#353a42] font-medium text-lg">
          Update Password
        </Button>
      </div>
    </div>
  );
}