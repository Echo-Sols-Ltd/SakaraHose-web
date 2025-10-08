// app/dashboard/settings/edit/page.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Trash2, User, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

type ProfileForm = {
  username: string;
  email: string;
  bio: string;
  avatarDataUrl?: string | null;
};

export default function EditProfilePage() {
  const router = useRouter();
  const [form, setForm] = useState<ProfileForm>({
    username: "Peace Ishimwe",
    email: "peace@example.com",
    bio: "Radio lover & community builder",
    avatarDataUrl: "/user.png",
  });
  const [uploading, setUploading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setForm((s) => ({ ...s, avatarDataUrl: String(reader.result) }));
      setUploading(false);
    };
    reader.readAsDataURL(file);
  }

  function handleRemoveImage() {
    setForm((s) => ({ ...s, avatarDataUrl: null }));
  }

  function handleCancel() {
    router.push("/?tab=settings");
  }

  // Mock save: in a real app you'd send this to the API
  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call API to save changes
    alert("Profile saved (mock).");
    router.push("/?tab=settings");
  }

  return (
    <div className="p-6">
      {/* Heading to match dashboard style */}
      <div className="mb-4">
        
        <div className="flex items-center gap-2 mt-1">
          <User className="w-5 h-5 text-white" />
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </div>

      <form onSubmit={handleSave} className="bg-[#1a1f27] border border-gray-800 rounded-xl p-6 md:p-8 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <Avatar className="w-20 h-20">
              {form.avatarDataUrl ? (
                // AvatarImage is from your shadcn avatar component
                <AvatarImage src={form.avatarDataUrl} alt="avatar" />
              ) : (
                <AvatarFallback className="bg-gray-700">P</AvatarFallback>
              )}
            </Avatar>

            <div className="flex gap-3">
              <label className="inline-flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0f1216] border border-gray-700 cursor-pointer hover:bg-[#16181c]">
                  <Upload className="w-4 h-4 text-gray-200" /> Upload image
                </span>
              </label>

              <button
                type="button"
                onClick={handleRemoveImage}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-700 hover:bg-[#16181c]"
              >
                <Trash2 className="w-4 h-4 text-gray-200" /> Remove image
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-5">
            <div>
              <label className="text-xs text-gray-400 block mb-2">Username</label>
              <div className="relative">
                <Input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="pr-12 bg-[#0f1216] border-gray-700"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-700 hover:bg-[#16181c]"
                  aria-label="Edit username"
                >
                  <Pencil className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-2">Email</label>
              <div className="relative">
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="pr-12 bg-[#0f1216] border-gray-700"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-700 hover:bg-[#16181c]"
                  aria-label="Edit email"
                >
                  <Pencil className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-2">Bio</label>
              <div className="relative">
                <Textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows={3}
                  className="pr-12 bg-[#0f1216] border-gray-700"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-700 hover:bg-[#16181c]"
                  aria-label="Edit bio"
                >
                  <Pencil className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-5 py-2 rounded-md border border-gray-700 hover:bg-[#16181c]"
              >
                Cancel
              </button>
              <Button type="submit" className="px-5">Save changes</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
