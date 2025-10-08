"use client";

import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

interface PlayerProps {
  currentRadio: any;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function Player({
  currentRadio,
  isPlaying,
  onTogglePlay,
}: PlayerProps) {
  if (!currentRadio) {
    return (
      <div className="bg-transparent text-white fixed bottom-4 left-64 right-4 z-50">
        <div className="mx-auto max-w-5xl rounded-xl bg-[#141821]/95 border border-[#2B3044] px-4 py-3 flex items-center gap-4 justify-center text-gray-400">
          <p>No radio currently playing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent text-white fixed bottom-4 left-64 right-4 z-50">
      <div className="mx-auto max-w-5xl rounded-xl bg-[#141821]/95 border border-[#2B3044] px-4 py-3 flex items-center gap-4">
        <Image
          src={currentRadio.image || "/images/radio-10.jpg"}
          width={36}
          height={36}
          className="rounded-md object-cover"
          alt={currentRadio.station || "Radio"}
        />

        <div className="leading-tight mr-auto">
          <p className="text-xs font-medium">
            {currentRadio.station || "Unknown Station"}
          </p>
          <p className="text-[11px] text-gray-400">
            {currentRadio.frequency || "N/A"} • {currentRadio.program || ""}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SkipBack className="w-4 h-4 cursor-pointer text-gray-300" />
          {isPlaying ? (
            <Pause
              className="w-5 h-5 cursor-pointer text-white"
              onClick={onTogglePlay}
            />
          ) : (
            <Play
              className="w-5 h-5 cursor-pointer text-white"
              onClick={onTogglePlay}
            />
          )}
          <SkipForward className="w-4 h-4 cursor-pointer text-gray-300" />
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center text-gray-400 text-[10px]">
          ·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·‖·
        </div>

        <div className="flex items-center gap-2 w-40">
          <Volume2 className="w-4 h-4 text-gray-300" />
          <div className="flex-1 h-1.5 bg-[#1b2130] rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
