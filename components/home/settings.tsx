// app/dashboard/settings/edit/page.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Trash2 } from "lucide-react";
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
    router.push("/dashboard/settings");
  }

  // Mock save: in a real app you'd send this to the API
  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call API to save changes
    alert("Profile saved (mock).");
    router.push("/dashboard/settings");
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
      </div>

      <form onSubmit={handleSave} className="bg-[#13161a] border border-gray-800 rounded-xl p-6 max-w-3xl">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <Avatar>
              {form.avatarDataUrl ? (
                // AvatarImage is from your shadcn avatar component
                <AvatarImage src={form.avatarDataUrl} alt="avatar" />
              ) : (
                <AvatarFallback className="bg-gray-700">P</AvatarFallback>
              )}
            </Avatar>

            <div className="flex gap-2">
              <label className="inline-flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#0f1216] border border-gray-700 cursor-pointer hover:bg-[#16181c]">
                  <Upload className="w-4 h-4 text-gray-200" /> Upload image
                </span>
              </label>

              <button
                type="button"
                onClick={handleRemoveImage}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-700 hover:bg-[#16181c]"
              >
                <Trash2 className="w-4 h-4 text-gray-200" /> Remove image
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <label className="text-sm text-gray-300 block mb-1">Username</label>
              <Input name="username" value={form.username} onChange={handleChange} />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Email</label>
              <Input name="email" value={form.email} onChange={handleChange} />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Bio</label>
              <Textarea name="bio" value={form.bio} onChange={handleChange} rows={4} />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 rounded-md border border-gray-700 hover:bg-[#16181c]"
              >
                Cancel
              </button>
              <Button type="submit">Save changes</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
