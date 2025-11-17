"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Radio, Play, Pause, Heart, X } from "lucide-react";
import Image from "next/image";
import Pagination from "@/components/pagination";

const stations = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  image: "/images/radio-10.jpg",
  name: `Radio Rwanda ${i + 1}`,
  program: "Your Home for News, Culture, and Music",
  genre: i % 3 === 0 ? "Agriculture" : i % 3 === 1 ? "Sports" : "Music",
  playStation: `Station 100.${i + 1}`,
}));

export default function AllStationsPage({ onPlay, currentRadio, isPlaying }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [selectedStation, setSelectedStation] = useState<any>(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavoriteIds(JSON.parse(saved));
  }, []);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // Filtering logic
  const filteredStations =
    selectedCategory === "All"
      ? stations
      : stations.filter((s) => s.genre === selectedCategory);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStations = filteredStations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handlers
  const handlePlay = (station: any) => onPlay(station);
  const handleToggleFavorite = (station: any) => {
    setFavoriteIds((prev) =>
      prev.includes(station.id)
        ? prev.filter((id) => id !== station.id)
        : [...prev, station.id]
    );
  };

  return (
    <div className="p-6 space-y-6 relative">
      {/* TITLE + DROPDOWN BELOW */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-gray-300" />
          <h1 className="text-xl font-semibold text-white">All Stations</h1>
        </div>

        {/* Dropdown under title */}
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="outline"
      className="flex items-center justify-between w-48 bg-transparent border-3 border-white text-white hover:bg-[#1C1F2E] hover:text-grey-300"
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
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1
             1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
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
    <DropdownMenuItem onClick={() => setSelectedCategory("All")}>
      All
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setSelectedCategory("Agriculture")}>
      Agriculture
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setSelectedCategory("Sports")}>
      Sports
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setSelectedCategory("Music")}>
      Music
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      </div>

      {/* TABLE */}
      <div className="rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Image</TableHead>
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Program</TableHead>
              <TableHead className="text-gray-300">Genre</TableHead>
              <TableHead className="text-gray-300">Play Station</TableHead>
              <TableHead className="text-gray-300 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentStations.map((station) => {
              const isStationPlaying =
                currentRadio?.id === station.id && isPlaying;
              const isFavorite = favoriteIds.includes(station.id);

              return (
                <TableRow
                  key={station.id}
                  className="border-white-700 hover:bg-[#2A2D3E] border-2"
                >
                  <TableCell>
                    <Image
                      src={station.image}
                      alt={station.name}
                      className="h-10 w-10 rounded-md object-cover"
                      width={40}
                      height={40}
                    />
                  </TableCell>

                  <TableCell className="text-gray-200">{station.name}</TableCell>
                  <TableCell className="text-gray-200">{station.program}</TableCell>
                  <TableCell className="text-gray-200">{station.genre}</TableCell>

                  <TableCell className="text-gray-200">
                    {isStationPlaying ? "▶️ Playing" : station.playStation}
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-gray-300">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handlePlay(station)}>
                          {isStationPlaying ? (
                            <>
                              <Pause className="w-4 h-4 mr-1" /> Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-1" /> Play
                            </>
                          )}
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() => handleToggleFavorite(station)}
                        >
                          {isFavorite ? (
                            <>
                              <Heart className="w-4 h-4 mr-1 fill-white" /> Remove
                            </>
                          ) : (
                            <>
                              <Heart className="w-4 h-4 mr-1" /> Favorite
                            </>
                          )}
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() => setSelectedStation(station)}
                        >
                          Details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalItems={filteredStations.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* DETAILS OVERLAY */}
      {selectedStation && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1C1F2E] rounded-2xl p-6 w-[420px] text-gray-200 relative">
            <button
              onClick={() => setSelectedStation(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src={selectedStation.image}
              alt={selectedStation.name}
              width={100}
              height={100}
              className="rounded-xl mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold mb-2 text-center">
              {selectedStation.name}
            </h2>
            <p className="text-gray-400 text-center mb-4">
              {selectedStation.program}
            </p>

            <div className="flex justify-center gap-3 mt-2">
              <Button
                onClick={() => handlePlay(selectedStation)}
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                {isPlaying && currentRadio?.id === selectedStation.id ? (
                  <>
                    <Pause className="w-4 h-4 mr-1" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-1" /> Play
                  </>
                )}
              </Button>

              <Button
                onClick={() => handleToggleFavorite(selectedStation)}
                variant="outline"
                className="border-gray-500 text-gray-200"
              >
                {favoriteIds.includes(selectedStation.id) ? (
                  <>
                    <Heart className="w-4 h-4 mr-1 fill-white" /> Liked
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 mr-1" /> Like
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
