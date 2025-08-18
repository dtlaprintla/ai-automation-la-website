import fs from 'fs';
import path from 'path';

export type ContentType = 'pages' | 'components' | 'blog' | 'services' | 'testimonials' | 'integrations';

class ContentManager {
  private contentDir = path.join(process.cwd(), 'content');
  private cache = new Map<string, any>();

  async getContent<T = any>(type: ContentType, filename: string): Promise<T | null> {
    const cacheKey = `${type}/${filename}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const filePath = path.join(this.contentDir, type, `${filename}.json`);
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      const data = JSON.parse(fileContent) as T;
      
      // Cache the result
      this.cache.set(cacheKey, data);
      
      return data;
    } catch (error) {
      console.error(`Error loading content ${type}/${filename}:`, error);
      return null;
    }
  }

  async getMarkdown(type: ContentType, filename: string): Promise<string | null> {
    try {
      const filePath = path.join(this.contentDir, type, `${filename}.md`);
      const content = await fs.promises.readFile(filePath, 'utf8');
      return content;
    } catch (error) {
      console.error(`Error loading markdown ${type}/${filename}:`, error);
      return null;
    }
  }

  async getSiteConfig() {
    try {
      const filePath = path.join(this.contentDir, 'site-config.json');
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.error('Error loading site config:', error);
      return null;
    }
  }

  async listContent(type: ContentType): Promise<string[]> {
    try {
      const dirPath = path.join(this.contentDir, type);
      const files = await fs.promises.readdir(dirPath);
      return files
        .filter(file => file.endsWith('.json') || file.endsWith('.md'))
        .map(file => file.replace(/\.(json|md)$/, ''));
    } catch (error) {
      console.error(`Error listing content in ${type}:`, error);
      return [];
    }
  }

  clearCache() {
    this.cache.clear();
  }
}

// Export singleton instance
export const contentManager = new ContentManager();

// Helper hooks for client components
export function useContent<T = any>(type: ContentType, filename: string): T | null {
  // For client-side, we'll need to fetch from an API route
  // This is a placeholder - we'll implement the API route next
  return null;
}