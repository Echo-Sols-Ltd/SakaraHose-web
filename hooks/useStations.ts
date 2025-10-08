import { useState, useEffect } from 'react';
import { Station } from '../types';
import { apiClient } from '../lib/api';

export const useStations = (filters?: { genre?: string }) => {
  const [data, setData] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const stations = await apiClient.getStations(filters);
        setData(stations);
      } catch {
        setError('Failed to load stations');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters]);

  return { data, loading, error };
};