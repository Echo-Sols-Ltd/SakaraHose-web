"use client";

import { useState } from "react";
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
import { MoreHorizontal, Radio } from "lucide-react";
import Image from "next/image";
import Pagination from "@/components/pagination"; // ✅ reuse our pagination component

// Example data
const stations = Array(23).fill({
  image: "/images/radio-10.jpg", // replace with your image path
  name: "Radio Rwanda",
  program: "Your Home for News, Culture, and Music",
  genre: "Agriculture",
  playStation: "Station 100.7",
});

export default function AllStationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStations = stations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-white-500" />
          <h1 className="text-xl font-semibold text-white">All Stations</h1>
        </div>
        <Button
          variant="outline"
          className="bg-[#1C1F2E] border-gray-600 text-gray-300 hover:bg-[#2A2D3E]"
        >
          Sort by category
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Image</TableHead>
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Program</TableHead>
              <TableHead className="text-gray-300">Genre</TableHead>
              <TableHead className="text-gray-300">Play station</TableHead>
              <TableHead className="text-gray-300 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentStations.map((station, i) => (
              <TableRow
                key={i}
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
                <TableCell className="text-gray-400">
                  {station.program}
                </TableCell>
                <TableCell className="text-gray-400">{station.genre}</TableCell>
                <TableCell className="text-gray-400">
                  {station.playStation}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-gray-300"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Play</DropdownMenuItem>
                      <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
                      <DropdownMenuItem>Details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ✅ Reusable Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={stations.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
