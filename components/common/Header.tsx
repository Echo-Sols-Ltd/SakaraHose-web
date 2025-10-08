"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between w-full">
     
      <h1 className="text-lg font-medium">Welcome back, Izzy</h1>

      
      <div className="flex items-center gap-4 ">
        <Input
          placeholder="Search for everything"
          className="w-80 bg-gray-800 text-white border-none"
        />

        
        <select className="bg-gray-800 text-white px-3 py-1 rounded-md border-none">
          <option>English</option>
          <option>Kinyarwanda</option>
          <option>French</option>
        </select>

        {/* Profile Avatar */}
        <Avatar>
          <AvatarImage src="images/profile.png" alt="User" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
