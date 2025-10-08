export interface Station {
  id: string;
  name: string;
  description: string;
  genre: string;
  frequency: string;  // e.g., "Station 100.7"
  image: string;      // URL to station image
  streamUrl?: string; // For streaming
}

export interface Category {
  id: string;
  name: string;
  image?: string;
}

export interface RecentlyPlayed {
  id: string;
  station: Station;
  program: string;
  lastListened: string;  // e.g., "7:00 AM"
}

export interface Favorite {
  id: string;
  station: Station;
  dateAdded: string;  // e.g., "Feb 10, 2025"
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}