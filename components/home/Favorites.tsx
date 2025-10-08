"use client";

import React, { useEffect, useState } from "react";
import { Heart, Play, Pause } from "lucide-react";
import Image from "next/image";
import { fetchFavorites, FavoriteStation } from "../../lib/dashboardMocks";
import Pagination from "@/components/pagination";

interface FavoritesProps {
  items?: FavoriteStation[];
  variant?: "card" | "table";
  showHeader?: boolean;
  showPagination?: boolean;
  cardLimit?: number;
  onSeeAll?: () => void;
  onPlay?: (item: FavoriteStation) => void;
  onUnlike?: (item: FavoriteStation) => void;
  currentPlayingId?: number | null; // ✅ global currently playing radio id
  playing?: boolean; // ✅ global player playing state
}

const Favorites: React.FC<FavoritesProps> = ({
  items = [],
  variant = "card",
  showHeader = true,
  showPagination = false,
  cardLimit = 3,
  onSeeAll,
  onPlay,
  onUnlike,
  currentPlayingId,
  playing,
}) => {
  const [favorites, setFavorites] = useState<FavoriteStation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Prefer passed-in items, fallback to mock data
    if (items.length > 0) {
      setFavorites(items);
    } else {
      fetchFavorites().then(setFavorites);
    }
  }, [items]);

  const handleSeeAll = () => {
    if (onSeeAll) onSeeAll();
  };

  const handlePlay = (item: FavoriteStation) => {
    if (onPlay) onPlay(item);
  };

  const handleUnlike = (item: FavoriteStation) => {
    setFavorites((prev) => prev.filter((f) => f.id !== item.id));
    if (onUnlike) onUnlike(item);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFavorites = favorites.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ✅ Shared play state logic
  const getIsPlaying = (id: number) => currentPlayingId === id && playing;

  // ---------------- Card View ----------------
  if (variant === "card") {
    return (
      <div className="mb-6">
        {showHeader && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">
              Your favorite stations
            </h2>
            <button
              onClick={handleSeeAll}
              className="text-yellow-400 text-sm hover:underline"
            >
              See all
            </button>
          </div>
        )}

        {favorites.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No favorite stations found. Add some stations to your favorites!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favorites.slice(0, cardLimit).map((item) => {
              const isPlaying = getIsPlaying(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-lg p-[1.5px] bg-gradient-to-r from-[#f8f8f5] to-[#B8892D]"
                >
                  <div className="rounded-lg p-4 bg-[#10151d]">
                    <div className="flex items-start gap-3">
                      <Image
                        src={item.imageUrl.replace("/", "/images/")}
                        alt={item.name}
                        className="w-20 h-14 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white text-sm font-medium">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {item.description}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {item.favoriteDate}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-6 pl-0">
                      <button
                        onClick={() => handlePlay(item)}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-600">
                          {isPlaying ? (
                            <Pause className="w-3 h-3" />
                          ) : (
                            <Play className="w-3 h-3" />
                          )}
                        </span>
                        {isPlaying ? "Pause" : "Play"}
                      </button>
                      <button
                        onClick={() => handleUnlike(item)}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-red-500"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-600">
                          <Heart className="w-3 h-3 fill-red-500" />
                        </span>
                        Unlike
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ---------------- Table View ----------------
  return (
    <div className="p-6 space-y-6">
      {showHeader && (
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white">Favorites</h1>
        </div>
      )}

      {favorites.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No favorite stations found. Add some stations to your favorites!
        </p>
      ) : (
        <div className="rounded-lg border border-white overflow-hidden">
          <div className="grid grid-cols-[96px_1fr_1fr_1fr_120px_80px] px-4 py-4 text-xs text-gray-400 border-b border-white">
            <div>Image</div>
            <div>Name</div>
            <div>Program</div>
            <div>Date saved</div>
            <div className="text-right pr-4">Play</div>
            <div className="text-right pr-2">Unlike</div>
          </div>
          {paginatedFavorites.map((item) => {
            const isPlaying = getIsPlaying(item.id);
            return (
              <div
                key={item.id}
                className="grid grid-cols-[96px_1fr_1fr_1fr_120px_80px] items-center px-4 py-3 text-sm border-b border-white hover:bg-[#141922]"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl.replace("/", "/images/")}
                    alt={item.name}
                    className="w-16 h-10 object-cover rounded"
                  />
                </div>
                <div className="text-gray-200">{item.name}</div>
                <div className="text-gray-400">{item.description}</div>
                <div className="text-gray-400">{item.favoriteDate}</div>
                <div className="flex justify-end pr-4">
                  <button
                    onClick={() => handlePlay(item)}
                    className="text-gray-400 hover:text-white"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="flex justify-end pr-2">
                  <button
                    onClick={() => handleUnlike(item)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Heart className="w-4 h-4 fill-red-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showPagination && favorites.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={favorites.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Favorites;
