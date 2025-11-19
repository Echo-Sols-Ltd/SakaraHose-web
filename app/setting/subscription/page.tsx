"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Diamond, CheckCircle2 } from "lucide-react";

const goBack = () => {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", "settings");
  window.history.replaceState({}, "", `/?${params.toString()}`);
};

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={goBack} className="p-2 hover:bg-[#1a1d21] rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Subscription Status</h1>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-800 rounded-xl p-8 text-center">
          <Diamond className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
          <p className="text-5xl font-bold text-cyan-400 mb-2">$9.99<span className="text-lg text-gray-400">/month</span></p>
          <p className="text-gray-300">Active until <strong>Dec 31, 2025</strong></p>
        </div>

        <div className="bg-[#1a1d21] rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-500" /> Your Benefits
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Ad-free listening</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Unlimited skips</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Download stations</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Higher audio quality</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Button className="flex-1  bg-[#2a2f36]  hover:bg-[#353a42]">Cancel Subscription</Button>
          <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600">Upgrade Plan</Button>
        </div>
      </div>
    </div>
  );
}