"use client";
import { ArrowLeft } from "lucide-react";

const goBack = () => {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", "settings");
  window.history.replaceState({}, "", `/?${params.toString()}`);
};

const transactions = [
  { date: "Nov 1, 2025", desc: "Premium Monthly", amount: "$9.99" },
  { date: "Oct 1, 2025", desc: "Premium Monthly", amount: "$9.99" },
  { date: "Sep 1, 2025", desc: "Premium Monthly", amount: "$9.99" },
];

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={goBack} className="p-2 hover:bg-[#1a1d21] rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Billing History</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-[#1a1d21] rounded-xl overflow-hidden">
        {transactions.map((t, i) => (
          <div key={i} className="flex items-center justify-between p-5 border-b border-gray-800 last:border-0">
            <div>
              <p className="font-medium">{t.desc}</p>
              <p className="text-sm text-gray-400">{t.date}</p>
            </div>
            <p className="text-lg font-semibold text-cyan-400">{t.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}