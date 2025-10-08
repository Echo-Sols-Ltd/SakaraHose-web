"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Clock, Play, Pause, Heart } from "lucide-react";
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
    if (onPlay) onPlay(item);
  };

  const handleLike = (item: Item) => {
    setFavoriteIds((prev) =>
      prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id]
    );
    if (onLike) onLike(item);
  };

  return (
    <section className={className}>
      {/* Header */}
      <div
        className={
          displayMode === "simple"
            ? "flex items-center justify-between"
            : "flex items-center gap-2 mb-6"
        }
      >
        {displayMode === "simple" ? (
          <>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold">Recently listened to</h2>
              </div>
              <span className="block w-16 h-[2px] bg-yellow-500 mt-2 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow border-black-500" />
              </span>
            </div>
            <Link
              href="/?tab=recently"
              className="text-sm text-yellow-500 hover:underline"
            >
              See all
            </Link>
          </>
        ) : (
          <>
            <Clock className="w-5 h-5 text-white" />
            <h1 className="text-xl font-semibold">Recently played</h1>
          </>
        )}
      </div>

      {/* Items */}
      {paginatedItems.length > 0 ? (
        <div className="rounded-lg mt-3">
          {paginatedItems.map((item, index) => {
            // ✅ Use parent state to determine play
            const playing =
              currentRadio?.id === item.id && isPlaying ? true : false;
            const isFavorite = favoriteIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`grid grid-cols-[64px_1fr_1fr_1fr_72px] items-center px-3 py-3 text-sm border-b border-[#d9dce8] hover:bg-[#141922] ${
                  index === paginatedItems.length - 1 ? "border-b-0" : ""
                }`}
              >
                {item.image ? (
                  <Image
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : `/${item.image.replace(/^\//, "")}`
                    }
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
                <div className="text-gray-200">{item.station}</div>
                <div className="text-gray-400">{item.program}</div>
                <div className="text-gray-400">
                  Last listened at: {item.last}
                </div>
                <div className="flex items-center gap-3 justify-end">
                  {/* Play / Pause */}
                  <button
                    className={`text-gray-400 hover:text-white ${
                      playing ? "text-yellow-400" : ""
                    }`}
                    onClick={() => handlePlay(item)}
                  >
                    {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  {/* Favorite */}
                  <button
                    className={`hover:text-red-500 ${
                      isFavorite ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleLike(item)}
                  >
                    <Heart className="w-4 h-4" fill={isFavorite ? "red" : "none"} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-gray-400 text-sm mt-3">
          No recently played items available.
        </div>
      )}

      {/* Pagination */}
      {displayMode === "detailed" && showPagination && items.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={items.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}
