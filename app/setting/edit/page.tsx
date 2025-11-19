"use client";

import { useState, ChangeEvent } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import
  { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Trash2, Pencil, ArrowLeft } from "lucide-react";

export default function EditProfilePage() {
  const [form, setForm] = useState({
    username: "Peace Ishimwe",
    email: "peace@example.com",
    bio: "Radio lover & community builder",
    avatarDataUrl: "/user.png" as string | null,
  });

  const handleChange = (
    e: Change78Event<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((s) => ({ ...s, avatarDataUrl: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () =>
    setForm((s) => ({ ...s, avatarDataUrl: null }));

  const goBackToSettings = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", "settings");
    window.history.replaceState({}, "", `/?${params.toString()}`);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    goBackToSettings();
  };

  return (
    <div className="min-h-screen bg-[#0a0d12] text-white p-6">
      {/* Header - exactly like Settings page */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={goBackToSettings}
            className="p-2 hover:bg-[#1a1d21] rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <h1 className="text-xl font-semibold">Edit Profile</h1>
        </div>
      </div>

      {/* Main Card - same style as all sections in Settings */}
      <section className="mb-8">
        <div className="bg-[#1a1d21] rounded-xl p-6 space-y-8">
          {/* Avatar Row */}
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 ring-4 ring-white/10">
              {form.avatarDataUrl ? (
                <AvatarImage src={form.avatarDataUrl} alt="Profile" />
              ) : (
                <AvatarFallback className="bg-gray-700 text-3xl font-bold">
                  P
                </AvatarFallback>
              )}
            </Avatar>

            <div className="flex gap-3">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2a2f36] hover:bg-[#353a42] text-white text-sm font-medium rounded-lg transition">
                  <Upload className="w-4 h-4" />
                  Change Photo
                </span>
              </label>

              

              <Button
                type="button"
      
                size="lg"
                onClick={handleRemoveImage}
                className="border-1 border-white text-gray-200 font-medium hover:bg-[#2a2f36]"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Remove
              </Button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <Input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="h-12 bg-[#0d1117] border-gray-700 text-white focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="h-12 bg-[#0d1117] border-gray-700 text-white focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <Textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={4}
                className="bg-[#0d1117] border-gray-700 text-white resize-none focus:border-gray-500"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-800">
            <Button
              type="button"
              onClick={goBackToSettings}
              className="border-1 px-8 py-2.5 border-white text-gray-300 font-medium hover:bg-[#2a2f36]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSave}
              className="px-8 py-2.5 bg-[#2a2f36] hover:bg-[#353a42] text-white text-sm font-medium rounded-lg transition"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}