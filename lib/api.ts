import type { Station, Category } from '../types'; // Adjust the path if Station and Category are defined elsewhere

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';  // Env var for backend URL

export const apiClient = {
  getStations: async (filters?: { genre?: string }): Promise<Station[]> => {
    // TODO: Replace with real fetch when backend ready
    // const res = await fetch(`${API_BASE}/stations?genre=${filters?.genre}`);
    // return res.json();
    const { mockStations } = await import('./mocks');
    // Simulate filter
    if (filters?.genre) {
      return mockStations.filter(s => s.genre === filters.genre);
    }
    return mockStations;
  },
  getCategories: async (): Promise<Category[]> => {
    const { mockCategories } = await import('./mocks');
    return mockCategories;
  },
  // Add more for recently played, favorites, etc.
};