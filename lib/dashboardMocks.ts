// Dashboard data interfaces and mock API functions

export interface UserInfo {
  name: string;
  avatarUrl: string;
}

export interface Station {
  id: number;
  name: string;
  description: string;
  lastListened: string;
  imageUrl: string;
}

export interface FavoriteStation extends Station {
  favoriteDate: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
}

// Mock API functions
export const fetchUserInfo = async (): Promise<UserInfo> => ({
  name: "Peace",
  avatarUrl: "/user-avatar.png",
});

export const fetchRecentlyListened = async (): Promise<Station[]> => [
  {
    id: "1",
    name: "Radio Rwanda",
    description: "Urubuga rw'Imikino",
    lastListened: "7:00 AM",
    imageUrl: "/radio-10.jpg",
  },
  // Add more mock stations as needed
];

export const fetchFavorites = async (): Promise<FavoriteStation[]> => [
  {
    id: "1",
    name: "Radio Rwanda",
    description: "Urubuga rw'Imikino",
    lastListened: "7:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "2",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "6:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "3",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "5:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "4",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "4:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "5",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "3:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "6",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "3:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "7",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "3:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  },
  {
    id: "8",
    name: "Radio 10",
    description: "Urubuga rw'Imikino",
    lastListened: "3:00 AM",
    imageUrl: "/radio-10.jpg",
    favoriteDate: "Feb, 10 2025",
  }
];

export const fetchHighlights = async (): Promise<Highlight[]> => [
  {
    id: "1",
    title: "Kiss FM — Kiss Hit 30",
    description:
      "Get ready, Rwanda! This Saturday at 9:00 AM, Kiss FM brings you the Kiss Hit 30...",
    imageUrl: "/radio-10.jpg",
  },
  {
    id: "2",
    title: "Radio 10 — Urubuga rw'Imikino",
    description:
      "Stay ahead of the game! Every Saturday from 10 AM to 1 PM, join Radio 10...",
    imageUrl: "/radio-10.jpg",
  },
];

export const fetchCategories = async (): Promise<Category[]> => [
  { id: "weather", name: "Weather" },
  { id: "education", name: "Education" },
  { id: "technology", name: "Technology" },
  { id: "news", name: "News" },
];
