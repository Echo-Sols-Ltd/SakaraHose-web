
// components/categories/Categories.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Music,
  Newspaper,
  Sprout,
  GraduationCap,
  Laptop,
  Cloud,
  Drama,
  Briefcase,
  HeartPulse,
  Trophy,
} from "lucide-react";
import { ComponentType } from "react";

// Define type for category
interface Category {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

// Props for the Categories component
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
              <h2 className="text-lg font-semibold">Categories</h2>
              <span className="block w-16 h-[2px] bg-yellow-500 mt-2 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow" />
              </span>
            </div>
            <button className="text-sm text-yellow-500 hover:underline">See all</button>
          </>
        ) : (
          <>
            <GraduationCap className="w-5 h-5 text-white-500" />
            <h1 className="text-xl font-semibold text-white">Categories</h1>
          </>
        )}
      </div>

      {/* Categories Grid */}
      <div
        className={
          displayMode === "simple"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full"
            : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
        }
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={
              displayMode === "simple"
                ? "rounded-xl p-[1px] bg-gradient-to-r from-[#4C6FFF] to-[#1B2C68]"
                : "border border-gray-700 rounded-lg p-4 hover:bg-[#2A2D3E] transition flex flex-col"
            }
          >
            {displayMode === "simple" ? (
              <Link
                href="/?tab=categories"
                className="block text-center px-6 py-3 rounded-xl bg-[#0f141c] text-gray-200 text-sm hover:bg-[#121925]"
              >
                {category.title}
              </Link>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className="w-6 h-6 text-white-500" />
                  <h3 className="text-white font-semibold">{category.title}</h3>
                </div>
                <p className="text-sm text-gray-400 flex-grow">{category.description}</p>
                <div className="flex justify-end mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-gray-400 to-gray-600 text-black hover:opacity-90 px-3 py-1 text-xs"
                  >
                    Explore
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Pagination (only for detailed mode if enabled) */}
      {displayMode === "detailed" && showPagination && (
        <div className="flex justify-center pt-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-gray-300 bg-[#1C1F2E] border-gray-600">
              ...
            </Button>
            {[2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Button
                key={num}
                variant={num === 5 ? "default" : "outline"}
                size="sm"
                className={
                  num === 5
                    ? "bg-yellow-500 text-black"
                    : "text-gray-300 bg-[#1C1F2E] border-gray-600"
                }
              >
                {num}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="text-gray-300 bg-[#1C1F2E] border-gray-600">
              ...
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
