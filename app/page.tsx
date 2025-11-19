/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import Topbar from "@/components/common/Header";
import HeroBanner from "@/components/home/HeroBanner";
import RecentlyPlayed from "@/components/home/RecentlyListened";
import Favorites from "@/components/home/Favorites";
import Highlights from "@/components/home/HighLights";
import Categories from "@/components/home/Categories";
import Player from "@/components/home/Player";
import AllStationsPage from "@/components/stations/Page";
import SettingsPage from "@/app/setting/page";
import ChangePasswordPage from "@/app/setting/change-password/page";
import SubscriptionPage from "@/app/setting/subscription/page";
import BillingPage from "@/app/setting/billing/page"; 
// import LanguagePage from "@/app/setting/language/page";
import ContactSupportPage from "@/app/setting/support/contact/page";
import TermsPage from "@/app/setting/support/terms/page";
import ReportPage from "@/app/setting/support/report/page";
import EditProfilePage from "@/app/setting/edit/page";
import {
  mockCategories,
  mockRecentlyPlayed,
} from "@/lib/mocks";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams?.get("tab") ?? "home";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [currentRadio, setCurrentRadio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const current = searchParams?.get("tab") ?? "home";
    if (current !== activeTab) setActiveTab(current);
  }, [searchParams, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const url = tab ? `/?tab=${encodeURIComponent(tab)}` : "/";
    router.replace(url, { scroll: false });
    setIsMobileSidebarOpen(false);
  };

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

  const handleTogglePlay = () => setIsPlaying((prev) => !prev);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <HeroBanner />
            <RecentlyPlayed
              items={mockRecentlyPlayed?.slice(0, 5) ?? []}
              displayMode="simple"
              onPlay={handlePlay}
              currentRadio={currentRadio}
              isPlaying={isPlaying}
            />
            <Favorites
              variant="card"
              showHeader
              showPagination={false}
              cardLimit={3}
              onPlay={handlePlay}
              currentPlayingId={currentRadio?.id ?? null}
              playing={isPlaying}
            />
            <Highlights />
            <Categories
              categories={mockCategories?.slice(0, 5) ?? []}
              displayMode="simple"
            />
          </>
        );

      case "stations":
        return (
          <AllStationsPage
            onPlay={handlePlay}
            currentRadio={currentRadio}
            isPlaying={isPlaying}
          />
        );

      case "categories":
        return (
          <Categories
            categories={mockCategories ?? []}
            displayMode="detailed"
            showPagination
          />
        );

      case "recently":
        return (
          <RecentlyPlayed
            items={mockRecentlyPlayed ?? []}
            displayMode="detailed"
            showPagination
            onPlay={handlePlay}
            currentRadio={currentRadio}
            isPlaying={isPlaying}
          />
        );

      case "favorites":
        return (
          <Favorites
            variant="table"
            showHeader
            showPagination
            onPlay={handlePlay}
            currentPlayingId={currentRadio?.id ?? null}
            playing={isPlaying}
          />
        );

      case "settings":
        return <SettingsPage />;

      case "settings_edit":
        return <EditProfilePage />;
      case "change_password":
        return <ChangePasswordPage />;
      case "subscription":
        return <SubscriptionPage />;
      case "billing":
        return <BillingPage />;
      // case "language":
      //    return <LanguagePage />;
      case "support_contact":
         return <ContactSupportPage />;
      case "terms":
          return <TermsPage />;
      case "report":
          return <ReportPage />;

      default:
        return <HeroBanner />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0d1117] transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } hidden md:block z-50`}
      >
        <Sidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <Sidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          sidebarOpen={true}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 overflow-y-auto ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Topbar
          onMenuClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />

        <main className="flex-1 px-14 pt-12 pb-32 space-y-10 bg-[#0d1117]">
          <div className="max-w-[1400px] mx-auto w-full">{renderContent()}</div>
        </main>
      </div>

      {/* Player */}
      <div
        className={`fixed bottom-0 right-0 transition-all duration-300 ${
          sidebarOpen ? "left-64" : "left-20"
        } md:left-0 z-50`}
      >
        <Player
          currentRadio={currentRadio}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />
      </div>
    </div>
  );
}
