// "use client";

// import { useState } from "react";
// import Player from "@/components/home/Player";
// import RecentlyPlayed from "@/components/home/RecentlyListened";

// const mockItems = [
//   {
//     id: 1,
//     station: "Radio Rwanda",
//     program: "Urubuga rw'Imikino",
//     last: "10:30 AM",
//     image: "images/radio-10.jpg",
//     frequency: 100.7,
//   },
//   {
//     id: 2,
//     station: "KT Radio",
//     program: "Morning Show",
//     last: "9:45 AM",
//     image: "images/radio-10.jpg",
//     frequency: 96.7,
//   },
//   {
//     id: 3,
//     station: "Radio Flash",
//     program: "Evening Vibes",
//     last: "8:00 PM",
//     image: "images/radio-10.jpg",
//     frequency: 102.3,
//   },
// ];

// export default function RadioPage() {
//   const [currentRadio, setCurrentRadio] = useState(mockItems[0]);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = (item: any) => {
//     setCurrentRadio(item);
//     setIsPlaying(true);
//   };

//   const handleTogglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="pb-24">
//       <RecentlyPlayed
//         items={mockItems}
//         displayMode="detailed"
//         showPagination={false}
//         onPlay={handlePlay}
//       />
//       <Player
//         currentRadio={currentRadio}
//         isPlaying={isPlaying}
//         onTogglePlay={handleTogglePlay}
//       />
//     </div>
//   );
// }
