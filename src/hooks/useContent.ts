'use client';

import { useState, useEffect } from 'react';
import { ContentType } from '@/lib/content';

export function useContent<T = any>(type: ContentType, filename: string): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        const response = await fetch(`/api/content?type=${type}&filename=${filename}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`);
        }
        
        const content = await response.json();
        setData(content);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [type, filename]);

  return { data, loading, error };
}

// Hook for site configuration
export function useSiteConfig() {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        setLoading(true);
        const response = await fetch('/api/content/config');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch site config: ${response.statusText}`);
        }
        
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchConfig();
  }, []);

  return { config, loading, error };
}