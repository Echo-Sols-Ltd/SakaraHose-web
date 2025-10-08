// "use client";

// import { useState } from "react";
// import { Head } from "next/head";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Home, Radio, Folder, Clock, Heart, Settings } from "lucide-react";
// import Header from "@/components/common/Header";
// import Sidebar from "@/components/common/Sidebar";
// import RecentlyListened from "@/components/home/RecentlyListened";
// import Favorites from "@/components/home/Favorites";
// import Highlights from "@/components/home/HighLights";
// import Categories from "@/components/home/Categories";
// import AudioPlayer from "@/components/common/AudioPlaye";
// import { mockRecentlyPlayed, mockFavorites, mockHighlights, mockCategories } from "@/lib/mocks";

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("home");

//   return (
//     <>
//       <Head>
//         <title>Sakara Hose - Home</title>
//         <meta name="description" content="Connect to all Rwandan radio stations" />
//       </Head>
//       <div className="flex flex-col h-screen bg-[#1A1A1A] text-white">
//         <Header />
//         <div className="flex flex-1 overflow-hidden">
//           <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
//           <main className="flex-1 overflow-y-auto p-6">
//             <section className="mb-8">
//               <div className="relative mb-4">
//                 <img
//                   src="/mock-radio-studio.jpg"
//                   alt="Listen to Radio 10"
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
//                   <Button className="bg-gray-800 hover:bg-gray-700">Listen to Radio 10</Button>
//                 </div>
//                 <p className="text-sm text-gray-400 mt-2">iStock demarre</p>
//               </div>
//             </section>
//             <section className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">Recently listened to</h2>
//               <RecentlyListened data={mockRecentlyPlayed} />
//               <div className="text-right mt-2">
//                 <Button variant="link" className="text-yellow-400 p-0 h-auto">
//                   See all
//                 </Button>
//               </div>
//             </section>
//             <section className="mb-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Your favorites</h2>
//                 <Button variant="link" className="text-yellow-400 p-0 h-auto">
//                   See all
//                 </Button>
//               </div>
//               <Favorites data={mockFavorites} />
//             </section>
//             <section className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">Highlights for you</h2>
//               <Highlights data={mockHighlights} />
//             </section>
//             <section>
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Categories</h2>
//                 <Button variant="link" className="text-yellow-400 p-0 h-auto">
//                   See all
//                 </Button>
//               </div>
//               <Categories data={mockCategories} />
//             </section>
//           </main>
//         </div>
//         <AudioPlayer />
//       </div>
//     </>
//   );
// }