"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

const goBack = () => {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", "settings");
  window.history.replaceState({}, "", `/?${params.toString()}`);
};

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={goBack} className="p-2 hover:bg-[#1a1d21] rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Report a Problem</h1>
      </div>

      <div className="max-w-xl mx-auto bg-[#1a1d21] rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">What went wrong?</label>
          <Textarea rows={8} placeholder="Please describe the issue in detail..." className="bg-[#0d1117] border-gray-700" />
        </div>
        <Button className="w-full bg-red-600 hover:bg-red-700">
          Submit Report
        </Button>
      </div>
    </div>
  );
}