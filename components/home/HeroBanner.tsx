"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden border border-[#2B3044]">
      <div className="relative w-full h-48 sm:h-56 md:h-72 lg:h-80">
        <Image
          src="/images/radio-10.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="absolute left-4 sm:left-6 md:left-8 bottom-4 sm:bottom-6">
        <div className="bg-[#141821]/85 text-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-lg max-w-[90vw] md:max-w-md">
          <p className="text-xs sm:text-sm leading-snug max-w-xs sm:max-w-sm">
            Radio 10 is here with the news that matters — fresh, fast, and reliable.
          </p>

          <div className="flex-shrink-0">
            <Button className="h-8 px-3 sm:px-4 rounded-full bg-[#0f1216] hover:bg-[#161b22] text-gray-100 text-xs">
              Listen to Radio 10
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
