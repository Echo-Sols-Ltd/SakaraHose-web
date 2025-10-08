// "use client";

// import { Button } from "@/components/ui/button";
// import { Music, Newspaper, Sprout, GraduationCap, Laptop, Cloud, Drama, Briefcase, HeartPulse, Trophy } from "lucide-react";

// const categories = [
//   {
//     title: "Music",
//     description: "Top hits, Rwandan beats & global vibes",
//     icon: Music,
//   },
//   {
//     title: "News",
//     description: "Stay updated with Rwanda & the world",
//     icon: Newspaper,
//   },
//   {
//     title: "Agriculture",
//     description: "Farming tips, innovations & rural stories",
//     icon: Sprout,
//   },
//   {
//     title: "Education",
//     description: "Learning, culture & inspiration for all",
//     icon: GraduationCap,
//   },
//   {
//     title: "Technology",
//     description: "Tech trends, startups & digital Rwanda",
//     icon: Laptop,
//   },
//   {
//     title: "Weather",
//     description: "Daily forecasts to plan your day",
//     icon: Cloud,
//   },
//   {
//     title: "Drama",
//     description: "Stories that entertain & inspire",
//     icon: Drama,
//   },
//   {
//     title: "Trade",
//     description: "Business insights & market updates",
//     icon: Briefcase,
//   },
//   {
//     title: "Health",
//     description: "Your well-being, our priority",
//     icon: HeartPulse,
//   },
//   {
//     title: "Sports",
//     description: "Catch every match, update & analysis",
//     icon: Trophy,
//   },
// ];

// export default function CategoriesPage() {
//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center gap-2">
//         <GraduationCap className="w-5 h-5 text-white-500" />
//         <h1 className="text-xl font-semibold text-white">Categories</h1>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//   {categories.map((category, index) => (
//     <div
//       key={index}
//       className="border border-gray-700 rounded-lg p-4 hover:bg-[#2A2D3E] transition flex flex-col"
//     >
//       {/* Icon + Title on the same line */}
//       <div className="flex items-center gap-2 mb-2">
//         <category.icon className="w-6 h-6 text-white-500" />
//         <h3 className="text-white font-semibold">{category.title}</h3>
//       </div>

//       {/* Description */}
//       <p className="text-sm text-gray-400 flex-grow">{category.description}</p>

//       {/* Explore button at the bottom, right-aligned */}
//       <div className="flex justify-end mt-4">
//         <Button
//           variant="outline"
//           size="sm"
//           className="bg-gradient-to-r from-gray-400 to-gray-600 text-black hover:opacity-90 px-3 py-1 text-xs"
//         >
//           Explore
//         </Button>
//       </div>
//     </div>
//   ))}
// </div>


//       {/* Pagination */}
//       <div className="flex justify-center pt-4">
//         <div className="flex items-center gap-2">
//           <Button variant="outline" size="sm" className="text-gray-300 bg-[#1C1F2E] border-gray-600">...</Button>
//           {[2, 3, 4, 5, 6, 7, 8].map((num) => (
//             <Button
//               key={num}
//               variant={num === 5 ? "default" : "outline"}
//               size="sm"
//               className={
//                 num === 5
//                   ? "bg-yellow-500 text-black"
//                   : "text-gray-300 bg-[#1C1F2E] border-gray-600"
//               }
//             >
//               {num}
//             </Button>
//           ))}
//           <Button variant="outline" size="sm" className="text-gray-300 bg-[#1C1F2E] border-gray-600">...</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
