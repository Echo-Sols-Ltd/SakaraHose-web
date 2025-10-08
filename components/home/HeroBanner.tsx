"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden border border-[#2B3044]">
      <Image
        src="/images/radio-10.jpg"
        alt="Banner"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute left-6 bottom-6">
        <div className="bg-[#141821]/85 text-gray-200 rounded-xl px-4 py-3 flex items-center gap-4 shadow-lg">
          <p className="text-xs sm:text-sm leading-snug max-w-md">
            Radio 10 is here with the news that matters — fresh, fast, and reliable.
          </p>
          <Button className="h-8 px-4 rounded-full bg-[#0f1216] hover:bg-[#161b22] text-gray-100 text-xs">
            Listen to Radio 10
          </Button>
        </div>
      </div>
    </div>
  );
}
