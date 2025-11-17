"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RotateCcw, Play, Pause, Heart } from "lucide-react";
import Pagination from "@/components/pagination";

interface Item {
  id: number;
  station: string;
  program: string;
  last: string;
  frequency?: string;
  image?: string;
}

interface RecentlyPlayedProps {
  items?: Item[];
  displayMode: "simple" | "detailed";
  showPagination?: boolean;
  className?: string;
  onPlay?: (item: Item) => void;
  onLike?: (item: Item) => void;
  currentRadio?: Item | null;
  isPlaying?: boolean;
}

export default function RecentlyPlayed({
  items = [],
  displayMode,
  showPagination = false,
  className = "",
  onPlay,
  onLike,
  currentRadio,
  isPlaying,
}: RecentlyPlayedProps) {
  const defaultImage = "/images/default-station.jpg";
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePlay = (item: Item) => {
    onPlay?.(item);
  };

  const handleLike = (item: Item) => {
    setFavoriteIds((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
    );
    onLike?.(item);
  };

  return (
    <section className={className}>
      {/* Header */}
      <div className={`flex items-center justify-between mb-4 mt-4`}>
        {displayMode === "simple" ? (
         <>
            <div>
              <h2 className="text-lg font-semibold">Recently listened to</h2>
              <span className="block w-16 h-[2px] bg-yellow-500 mt-2 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow" />
              </span>
            </div>
            <button className="text-sm text-yellow-500 hover:underline">See all</button>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-white" />
            <h1 className="text-xl font-semibold text-white">Recently played</h1>
          </div>
        )}
      </div>

      {/* Items */}
      {paginatedItems.length > 0 ? (
        <div className="rounded-lg mt-2 overflow-hidden">
          {paginatedItems.map((item, index) => {
            const playing = currentRadio?.id === item.id && isPlaying;
            const isFavorite = favoriteIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="grid grid-cols-[auto_1fr_1fr_1fr_auto_auto] items-center gap-4 px-4 py-3 text-sm border-b-2 border-white hover:bg-[#141922] last:border-b-0"
              >
                <div className="flex items-center">
                  {item.image ? (
                    <Image
                      src={item.image.startsWith("http") ? item.image : `/${item.image.replace(/^\//, "")}`}
                      alt={item.station}
                      className="w-12 h-8 rounded-md object-cover"
                      width={48}
                      height={32}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = defaultImage;
                      }}
                    />
                  ) : (
                    <div className="w-12 h-8 bg-gray-700 rounded-md" />
                  )}
                </div>

                <div className="text-white truncate">{item.station}</div>
                <div className="text-white truncate">{item.program}</div>
                <div className="text-white">Last listened at: {item.last}</div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handlePlay(item)}
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white text-white hover:border-white"
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleLike(item)}
                    className="text-white hover:text-white"
                    aria-label="Like"
                  >
                    <Heart className="w-4 h-4" fill={isFavorite ? "white" : "none"} stroke="currentColor" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-gray-400 text-sm mt-3">No recently played items available.</div>
      )}

      {/* Pagination */}
      {displayMode === "detailed" && showPagination && items.length > 0 && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalItems={items.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
}