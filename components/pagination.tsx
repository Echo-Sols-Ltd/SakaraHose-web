"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalItems: number;        // total number of items in the dataset
  itemsPerPage: number;      // how many items per page
  currentPage: number;       // controlled from parent
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; // no pagination needed

  const getPages = () => {
    const pages = [];
    const maxVisible = 5; // how many middle numbers to show
    let start = Math.max(2, currentPage - 2);
    let end = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage <= 3) {
      start = 2;
      end = Math.min(totalPages - 1, maxVisible);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - maxVisible + 1, 2);
      end = totalPages - 1;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center pt-6">
      <div className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-lg">
        {/* Prev */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-white hover:bg-gray-200 disabled:opacity-50 text-black"
        >
          &lt;
        </button>

        {/* First page */}
        <button
          onClick={() => onPageChange(1)}
          className={cn(
            "px-3 py-1 rounded-md",
            currentPage === 1
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-200 text-black"
          )}
        >
          1
        </button>

        {/* Ellipsis before */}
        {currentPage > 4 && totalPages > 6 && <span className="px-2">…</span>}

        {/* Middle pages */}
        {getPages().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "px-3 py-1 rounded-md",
              currentPage === page
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-200 text-black"
            )}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis after */}
        {currentPage < totalPages - 3 && totalPages > 6 && (
          <span className="px-2">…</span>
        )}

        {/* Last page */}
        {totalPages > 1 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={cn(
              "px-3 py-1 rounded-md",
              currentPage === totalPages
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-200 text-black"
            )}
          >
            {totalPages}
          </button>
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-white hover:bg-gray-200 disabled:opacity-50 text-black"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
