"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Pagination from "@/components/pagination";
import { ComponentType } from "react";

// Category type
interface Category {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

interface CategoriesProps {
  categories: Category[];
  displayMode: "simple" | "detailed";
  showPagination?: boolean;
  className?: string;
}

export default function Categories({
  categories,
  displayMode,
  showPagination = false,
  className = "",
}: CategoriesProps) {

  // --- PAGINATION LOGIC (same as Recently Played) ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = displayMode === "detailed" ? 8 : categories.length; // detailed shows 8 per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={className}>
      {/* Header */}
      <div
        className={
          displayMode === "simple"
            ? "flex items-center justify-between mb-3"
            : "flex items-center gap-2 mb-6"
        }
      >
        {displayMode === "simple" ? (
          <>
            <div>
              <h2 className="text-lg font-semibold text-white">Categories</h2>
              <span className="block w-16 h-[2px] bg-yellow-500 mt-2 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow" />
              </span>
            </div>
            <button className="text-sm text-yellow-500 hover:underline">See all</button>
          </>
        ) : (
          <>
            <GraduationCap className="w-5 h-5 text-white" />
            <h1 className="text-xl font-semibold text-white">Categories</h1>
          </>
        )}
      </div>

      {/* Grid */}
      <div
        className={
          displayMode === "simple"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full"
            : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        }
      >
        {paginatedCategories.map((category, index) => (
          <div key={index}>
            {/* SIMPLE MODE */}
            {displayMode === "simple" ? (
              <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#4C6FFF] to-[#1B2C68]">
                <Link
                  href="/?tab=categories"
                  className="block text-center px-6 py-3 rounded-xl bg-[#0f141c] text-gray-200 text-sm hover:bg-[#121925]"
                >
                  {category.title}
                </Link>
              </div>
            ) : (
              // DETAILED MODE (border matches simple gradient)
              <div className="rounded-2xl p-[1px] bg-gradient-to-r  from-[#acb7e3] to-[#1B2C68] hover:opacity-95 transition">
                <div className="bg-[#0B0F1A] rounded-2xl p-5 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon className="w-6 h-6 text-white" />
                    <h3 className="text-white font-semibold">{category.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm flex-grow leading-snug">
                    {category.description}
                  </p>

                  <div className="flex justify-end mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gradient-to-r from-gray-300 to-white text-black px-4 py-1 rounded-lg text-xs hover:opacity-90 transition"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* PAGINATION — SAME AS RECENTLY PLAYED */}
      {displayMode === "detailed" && showPagination && categories.length > itemsPerPage && (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalItems={categories.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
}
