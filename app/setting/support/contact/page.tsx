"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MessageCircle } from "lucide-react";

const goBack = () => {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", "settings");
  window.history.replaceState({}, "", `/?${params.toString()}`);
};

export default function ContactSupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={goBack} className="p-2 hover:bg-[#1a1d21] rounded-lg transition">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Contact Support</h1>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
        <div className="bg-[#1a1d21] rounded-xl p-6 space-y-4">
          <h3 className="font-medium text-lg">Send us a message</h3>
          <Textarea placeholder="Describe your issue..." rows={6} className="bg-[#0d1117] border-gray-700" />
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600">
            Send Message
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:sakara@gmail.com" className="bg-[#1a1d21] p-6 rounded-xl text-center hover:bg-[#2a2f36] transition">
            <Mail className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
            <p>sakara@gmail.com</p>
          </a>
          <div className="bg-[#1a1d21] p-6 rounded-xl text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-gray-500" />
            <p>+250 789 000 000</p>
          </div>
          <div className="bg-[#1a1d21] p-6 rounded-xl text-center">
            <MessageCircle className="w-8 h-8 mx-auto mb-3 text-green-500" />
            <p>Live Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}