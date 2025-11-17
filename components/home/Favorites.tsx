"use client";

import React, { useEffect, useState } from "react";
import { Heart, Play, Pause } from "lucide-react";
import { fetchFavorites, FavoriteStation } from "../../lib/dashboardMocks";
import Pagination from "@/components/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface FavoritesProps {
  variant?: "card" | "table";
  showHeader?: boolean;
  showPagination?: boolean;
  cardLimit?: number;
  onSeeAll?: () => void;
  onPlay?: (item: FavoriteStation) => void;
  onUnlike?: (item: FavoriteStation) => void;
  currentPlayingId?: number | null; // ✅ For syncing play state
  playing?: boolean; // ✅ Is global player playing
  onTogglePlay?: () => void; // ✅ Toggle global play/pause
}

const Favorites: React.FC<FavoritesProps> = ({
  variant = "card",
  showHeader = true,
  showPagination = false,
  cardLimit = 3,
  onSeeAll,
  onPlay,
  onUnlike,
  currentPlayingId,
  playing,
  onTogglePlay,
}) => {
  const [favorites, setFavorites] = useState<FavoriteStation[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const itemsPerPage = 5;

  const categoryOptions = [
    "All Categories",
    "Music",
    "News",
    "Agriculture",
    "Education",
    "Technology",
    "Weather",
    "Drama",
    "Trade",
    "Health",
    "Sports",
  ];

  useEffect(() => {
    fetchFavorites().then((data) => {
      setFavorites(data);
      setFavoriteIds(data.map((f) => f.id));
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredFavorites = favorites.filter(
    (f) => selectedCategory === "All Categories" || f.category === selectedCategory
  );

  const handleSeeAll = () => {
    if (onSeeAll) onSeeAll();
    else alert("Navigate to all favorite items");
  };

  const handlePlay = (item: FavoriteStation) => {
    if (onPlay) onPlay(item);
  };

  const handleUnlike = (item: FavoriteStation) => {
    setFavoriteIds((prev) => prev.filter((id) => id !== item.id));
    if (onUnlike) onUnlike(item);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFavorites = filteredFavorites.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ---------------- Card View ----------------
  if (variant === "card") {
    return (
      <div className="mb-6">
        {showHeader && (
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Your favorites</h2>
              </div>
              <span className="block w-16 h-[2px] bg-yellow-500 mt-2 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow" />
              </span>
            </div>
            <button
              onClick={handleSeeAll}
              className="text-yellow-400 text-sm hover:underline"
            >
              See all
            </button>
          </div>
        )}

        {filteredFavorites.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No favorite stations found. Add some stations to your favorites!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredFavorites.slice(0, cardLimit).map((item) => {
              const isPlaying = currentPlayingId === item.id && playing;
              return (
                <div
                  key={item.id}
                  className="rounded-lg p-[1.5px] bg-gradient-to-r from-[#f8f8f5] to-[#B8892D]"
                >
                  <div className="rounded-lg p-4 bg-[#10151d]">
                    <div className="flex items-start gap-3">
                      <img
                        src={item.imageUrl.replace("/", "/images/")}
                        alt={item.name}
                        className="w-20 h-14 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white text-sm font-medium">
                          {item.name}
                        </h3>
                        <p className="text-gray-200 text-xs">
                          {item.description}
                        </p>
                        <p className="text-gray-200 text-xs">{item.favoriteDate}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-6 pl-22">
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
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-600">
                          <Heart
                            className={`w-3 h-3 ${
                              favoriteIds.includes(item.id) ? "fill-white" : ""
                            }`}
                          />
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
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-white" />
            <h1 className="text-xl font-semibold text-white">Favorites</h1>
          </div>

          {/* Dropdown under title */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center justify-between w-48 bg-transparent border-2 border-white text-white hover:bg-[#1C1F2E] hover:text-gray-300"
              >
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
                    />
                  </svg>
                  Filter by category
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categoryOptions.map((cat) => (
                <DropdownMenuItem key={cat} onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {filteredFavorites.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No favorite stations found. Add some stations to your favorites!
        </p>
      ) : (
        <div className=" border-1 border-white overflow-hidden">
          <div className="grid grid-cols-[96px_1fr_1fr_1fr_120px_80px] px-4 py-4 text-sm font-semibold text-white border-2 border-white">
            <div>Logo</div>
            <div>Name</div>
            <div>Program</div>
            <div>Date saved</div>
            <div >Play Station</div>
            <div >Unlike</div>
          </div>
          {paginatedFavorites.map((item) => {
            const isPlaying = currentPlayingId === item.id && playing;
            const isFavorite = favoriteIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="grid grid-cols-[96px_1fr_1fr_1fr_120px_80px] items-center px-4 py-3 text-sm border-2 border-white hover:bg-[#141922]"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl.replace("/", "/images/")}
                    alt={item.name}
                    className="w-16 h-10 object-cover rounded"
                  />
                </div>
                <div className="text-gray-200">{item.name}</div>
                <div className="text-gray-200">{item.description}</div>
                <div className="text-gray-200">{item.favoriteDate}</div>
                <div className="flex pr-4">
                  <button
                    onClick={() => handlePlay(item)}
                    className="text-gray-200 hover:text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex pr-2">
                  <button
                    onClick={() => handleUnlike(item)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Heart
                      className={`w-4 h-4 ${isFavorite ? "fill-white" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showPagination && filteredFavorites.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={filteredFavorites.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Favorites;