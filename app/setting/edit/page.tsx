// app/setting/edit.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Trash2, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditProfilePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "Peace Ishimwe",
    email: "peace@example.com",
    bio: "Radio lover & community builder",
    avatarDataUrl: "/user.png" as string | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm(s => ({ ...s, avatarDataUrl: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => setForm(s => ({ ...s, avatarDataUrl: null }));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    router.push("/setting");
  };

  return (
    <div className="min-h-screen bg-[#0a0d12] p-6">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10 text-sm">
          <Link href="/setting" className="text-gray-400 hover:text-white flex items-center gap-2">
            ← Settings
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-white font-medium">Edit Profile</span>
        </div>

        <form onSubmit={handleSave} className="bg-[#13161b] rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
            <Avatar className="w-28 h-28 ring-4 ring-white/20">
              {form.avatarDataUrl ? (
                <AvatarImage src={form.avatarDataUrl} alt="Profile" />
              ) : (
                <AvatarFallback className="bg-gray-700 text-3xl font-bold">P</AvatarFallback>
              )}
            </Avatar>

            <div className="flex gap-4">
              <label className="cursor-pointer">
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f242c] hover:bg-[#2a3038] text-white rounded-2xl font-medium transition">
                  <Upload className="w-5 h-5" /> Upload image
                </span>
              </label>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-[#1f242c] rounded-2xl font-medium transition"
              >
                <Trash2 className="w-5 h-5 inline mr-2" /> Remove
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Username</label>
              <div className="relative">
                <Input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="h-14 bg-[#1f242c] border-gray-700 text-white text-lg pr-14 focus:border-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-14 bg-[#1f242c] border-gray-700 text-white text-lg pr-14 focus:border-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Bio</label>
              <div className="relative">
                <Textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#1f242c] border-gray-700 text-white pr-14 resize-none focus:border-gray-500"
                />
                <Pencil className="absolute right-4 top-4 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-12">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/setting")}
              className="px-8 py-3 border-gray-600 text-gray-300 hover:bg-[#1f242c] text-lg font-medium rounded-2xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg"
            >
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}