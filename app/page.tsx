"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import Topbar from "@/components/common/Header";
import HeroBanner from "@/components/home/HeroBanner";
import RecentlyPlayed from "@/components/home/RecentlyListened";
import Favorites from "@/components/home/Favorites";
import Highlights from "@/components/home/HighLights";
import Categories from "@/components/Home/Categories";
import Player from "@/components/home/Player";
import AllStationsPage from "@/components/stations/Page";
import SettingsPage from "@/components/setting/settings";
import EditProfilePage from "@/components/setting/edit";
import {
  mockCategories,
  mockRecentlyPlayed,
  mockFavorites,
  mockHighlights,
} from "@/lib/mocks";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams?.get("tab") ?? "home";
  const [activeTab, setActiveTab] = useState(initialTab);

  // ✅ Player state
  const [currentRadio, setCurrentRadio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Sync URL tab
  useEffect(() => {
    const current = searchParams?.get("tab") ?? "home";
    if (current !== activeTab) setActiveTab(current);
  }, [searchParams, activeTab]);

  // ✅ Tab change handler
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const url = tab ? `/?tab=${encodeURIComponent(tab)}` : "/";
    router.replace(url, { scroll: false });
  };

  // ✅ Play handlers
  const handlePlay = (item: any) => {
    if (currentRadio?.id === item.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentRadio({
        id: item.id,
        station: item.name || item.station,
        frequency: item.frequency || "100.7",
        program: item.program || "Now Playing",
        image: item.image || "/images/radio-10.jpg",
      });
      setIsPlaying(true);
    }
  };

  const handleRecentPlay = (item: any) => {
    handlePlay(item); // ✅ re-use handlePlay for consistency
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleRecentLike = (item: any) => {
    console.log("Liking recent:", item.program);
  };

  const handleUnlike = (item: any) => {
    console.log("Removing from favorites:", item.name);
  };

  // ✅ Render main content
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <HeroBanner />
            <RecentlyPlayed
              items={mockRecentlyPlayed?.slice(0, 5) ?? []}
              displayMode="simple"
              onPlay={handleRecentPlay}
              onLike={handleRecentLike}
              currentRadio={currentRadio}
              isPlaying={isPlaying}
            />
            <Favorites
              variant="card"
              showHeader={true}
              showPagination={false}
              cardLimit={3}
              onPlay={handlePlay}
              onUnlike={handleUnlike}
            />
            <Highlights />
            <Categories
              categories={mockCategories?.slice(0, 5) ?? []}
              displayMode="simple"
            />
          </>
        );
      case "stations":
        return <AllStationsPage />;
      case "categories":
        return (
          <Categories
            categories={mockCategories ?? []}
            displayMode="detailed"
            showPagination={true}
          />
        );
      case "recently":
        return (
          <RecentlyPlayed
            items={mockRecentlyPlayed ?? []}
            displayMode="detailed"
            showPagination={true}
            onPlay={handleRecentPlay}
            onLike={handleRecentLike}
            currentRadio={currentRadio}
            isPlaying={isPlaying}
          />
        );
      case "favorites":
        return (
          <Favorites
            variant="table"
            showHeader={true}
            showPagination={true}
            onPlay={handlePlay}
            onUnlike={handleUnlike}
          />
        );
      case "settings":
        return <SettingsPage />;
      case "settings_edit":
        return <EditProfilePage />;
      default:
        return (
          <>
            <HeroBanner />
            <RecentlyPlayed
              items={mockRecentlyPlayed?.slice(0, 5) ?? []}
              displayMode="simple"
              onPlay={handleRecentPlay}
              onLike={handleRecentLike}
              currentRadio={currentRadio}
              isPlaying={isPlaying}
            />
            <Favorites
              variant="card"
              showHeader={true}
              showPagination={false}
              cardLimit={3}
              onPlay={handlePlay}
              onUnlike={handleUnlike}
            />
            <Highlights />
            <Categories
              categories={mockCategories?.slice(0, 5) ?? []}
              displayMode="simple"
            />
          </>
        );
    }
  };

  return (
    <div className="flex bg-[#0d1117] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 space-y-6 pb-24">
        <Topbar />
        {renderContent()}
      </main>

      {/* Player */}
      <div className="fixed bottom-0 left-64 right-0 z-50">
        <Player
          currentRadio={currentRadio}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />
      </div>
    </div>
  );
}
