"use client";
import { ArrowLeft } from "lucide-react";

const goBack = () => {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", "settings");
  window.history.replaceState({}, "", `/?${params.toString()}`);
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={goBack} className="p-2 hover:bg-[#1a1d21] rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Terms of Service</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-[#1a1d21] rounded-xl p-8 prose prose-invert">
        <p className="text-gray-300 leading-relaxed">
          Welcome to RadioApp. By using our service you agree to these terms...
          These are placeholder terms. In a real app, you would put your full legal text here.
        </p>
        {/* Add real terms here */}
        <p className="text-center text-gray-500 mt-12">Last updated: November 2025</p>
      </div>
    </div>
  );
}