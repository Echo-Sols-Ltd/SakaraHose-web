
// lib/mocks.ts
import { Music, Newspaper, Sprout, GraduationCap, Laptop, Cloud, Drama, Briefcase, HeartPulse, Trophy } from "lucide-react";

export const mockCategories = [
  {
    title: "Music",
    description: "Top hits, Rwandan beats & global vibes",
    icon: Music,
  },
  {
    title: "News",
    description: "Stay updated with Rwanda & the world",
    icon: Newspaper,
  },
  {
    title: "Agriculture",
    description: "Farming tips, innovations & rural stories",
    icon: Sprout,
  },
  {
    title: "Education",
    description: "Learning, culture & inspiration for all",
    icon: GraduationCap,
  },
  {
    title: "Technology",
    description: "Tech trends, startups & digital Rwanda",
    icon: Laptop,
  },
  {
    title: "Weather",
    description: "Daily forecasts to plan your day",
    icon: Cloud,
  },
  {
    title: "Drama",
    description: "Stories that entertain & inspire",
    icon: Drama,
  },
  {
    title: "Trade",
    description: "Business insights & market updates",
    icon: Briefcase,
  },
  {
    title: "Health",
    description: "Your well-being, our priority",
    icon: HeartPulse,
  },
  {
    title: "Sports",
    description: "Catch every match, update & analysis",
    icon: Trophy,
  },
];

export const mockRecentlyPlayed = [
  {
    id: 1,
    station: "Radio Rwanda",
    program: "Urubuga rw'imikino",
    last: "7:00 AM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 2,
    station: "Radio 10",
    program: "Morning Show",
    last: "8:00 AM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 3,
    station: "KT Radio",
    program: "Sports Talk",
    last: "9:00 AM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 4,
    station: "Radio One",
    program: "News Update",
    last: "10:00 AM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 5,
    station: "Flash FM",
    program: "Music Mix",
    last: "11:00 AM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 6,
    station: "City Radio",
    program: "Talk Time",
    last: "12:00 PM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 7,
    station: "Radio Isango",
    program: "Cultural Hour",
    last: "1:00 PM",
    image: "/images/radio-10.jpg",
  },
  {
    id: 8,
    station: "Radio Salus",
    program: "Health Matters",
    last: "2:00 PM",
    image: "/images/station8.jpg",
  },
  {
    id: 9,
    station: "Voice of Africa",
    program: "Afternoon Vibes",
    last: "3:00 PM",
    image: "/images/station9.jpg",
  },
  {
    id: 10,
    station: "Radio Huguka",
    program: "Evening News",
    last: "4:00 PM",
    image: "/images/station10.jpg",
  },
];

export const mockFavorites = [
  { id: 1, name: "Radio 10", image: "/images/station1.jpg" },
  { id: 2, name: "Radio Rwanda", image: "/images/station2.jpg" },
];

export const mockHighlights = [
  { id: 1, title: "Top News", description: "Latest updates" },
  { id: 2, title: "Sports Highlights", description: "Match recaps" },
];
