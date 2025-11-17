// // app/dashboard/layout.tsx
// import Sidebar from "@/components/common/Sidebar";
// import Player from "@/components/home/Player";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col h-screen">
//         <div className="flex-1 overflow-y-auto p-6 space-y-6">
//           {children}
//         </div>
//       </div>

//       {/* Player (bottom fixed, only under main content) */}
//       <div className="fixed bottom-0 left-60 right-0 z-50">
//         <Player />
//       </div>
//     </div>
//   );
// }
