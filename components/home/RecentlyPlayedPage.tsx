// "use client";

// import { Clock, Play, Heart } from "lucide-react";

// const rows = Array.from({ length: 10 }).map((_, i) => ({
//   id: i + 1,
//   station: "Radio Rwanda",
//   show: "Urubuga rw'imikino",
//   time: "7:00 AM",
// }));

// export default function RecentlyPlayedPage() {
//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex items-center gap-2">
//         <Clock className="w-5 h-5 text-yellow-500" />
//         <h1 className="text-xl font-semibold">Recently played</h1>
//       </div>

//       <div className="rounded-lg border border-gray-800 overflow-hidden">
//         {rows.map((row, idx) => (
//           <div
//             key={row.id}
//             className="grid grid-cols-[64px_1fr_1fr_1fr_72px] items-center px-3 py-3 text-sm border-b border-gray-800 hover:bg-[#141922]"
//           >
//             <div className="w-12 h-8 bg-gray-700 rounded-md" />
//             <div className="text-gray-200">{row.station}</div>
//             <div className="text-gray-400">{row.show}</div>
//             <div className="text-gray-400">Last listened at: {row.time}</div>
//             <div className="flex items-center gap-3 justify-end">
//               <button className="text-gray-400 hover:text-white"><Play className="w-4 h-4" /></button>
//               <button className="text-gray-400 hover:text-red-400"><Heart className="w-4 h-4" /></button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center pt-4">
//         <div className="flex items-center gap-2">
//           <button className="px-3 py-1 rounded-md border border-gray-700 text-gray-300">…</button>
//           {[2,3,4,5,6,7,8].map(n => (
//             <button key={n} className={`px-3 py-1 rounded-md border ${n===5?"bg-yellow-500 text-black border-yellow-500":"border-gray-700 text-gray-300"}`}>{n}</button>
//           ))}
//           <button className="px-3 py-1 rounded-md border border-gray-700 text-gray-300">…</button>
//         </div>
//       </div>
//     </div>
//   );
// }



