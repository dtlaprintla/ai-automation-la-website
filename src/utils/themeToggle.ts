// Global Theme Toggle Utility
// Easy site-wide theme switching

export type Theme = 'light' | 'n8n' | 'default';

interface ThemeConfig {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  light: {
    name: 'Light Theme',
    description: 'Clean, professional light interface',
    colors: {
      primary: '#8B5A9F',
      secondary: '#2E4F7A', 
      background: '#ffffff'
    }
  },
  n8n: {
    name: 'N8N Dark Theme',
    description: 'Dark, elegant interface inspired by N8N',
    colors: {
      primary: '#EE4F27',
      secondary: '#6B21EF',
      background: '#0E0918'
    }
  },
  default: {
    name: 'Default Theme',
    description: 'Original ChatGPT-inspired gradient theme',
    colors: {
      primary: '#5A4B7C',
      secondary: '#2E4F7A',
      background: '#f9fafb'
    }
  }
};

export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme = 'default';
  
  private constructor() {
    // Initialize with saved theme or default
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      if (saved && themes[saved]) {
        this.currentTheme = saved;
        this.applyTheme(saved);
      }
    }
  }
  
  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }
  
  /**
   * Apply theme globally to entire site
   */
  applyTheme(theme: Theme): void {
    if (typeof window === 'undefined') return;
    
    const html = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes
    html.classList.remove('n8n-theme', 'light-theme', 'default-theme');
    body.classList.remove('n8n-dark', 'light-mode', 'default-mode');
    
    // Remove data attributes
    html.removeAttribute('data-theme');
    
    // Apply new theme
    switch (theme) {
      case 'n8n':
        html.classList.add('n8n-theme');
        html.setAttribute('data-theme', 'n8n');
        body.classList.add('n8n-dark');
        break;
      case 'light':
        html.classList.add('light-theme');
        html.setAttribute('data-theme', 'light');
        body.classList.add('light-mode');
        break;
      case 'default':
      default:
        html.classList.add('default-theme');
        html.setAttribute('data-theme', 'default');
        body.classList.add('default-mode');
        break;
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
    
    // Dispatch custom event for components that need to react
    window.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { theme, config: themes[theme] } 
    }));
  }
  
  /**
   * Get current active theme
   */
  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
  
  /**
   * Toggle between themes
   */
  toggleTheme(): Theme {
    const currentIndex = Object.keys(themes).indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % Object.keys(themes).length;
    const nextTheme = Object.keys(themes)[nextIndex] as Theme;
    
    this.applyTheme(nextTheme);
    return nextTheme;
  }
  
  /**
   * Switch to N8N theme specifically
   */
  enableN8NTheme(): void {
    this.applyTheme('n8n');
  }
  
  /**
   * Switch to light theme
   */
  enableLightTheme(): void {
    this.applyTheme('light');
  }
  
  /**
   * Switch to default theme
   */
  enableDefaultTheme(): void {
    this.applyTheme('default');
  }
  
  /**
   * Get theme configuration
   */
  getThemeConfig(theme?: Theme): ThemeConfig {
    return themes[theme || this.currentTheme];
  }
  
  /**
   * Check if N8N theme is active
   */
  isN8NTheme(): boolean {
    return this.currentTheme === 'n8n';
  }
  
  /**
   * Initialize theme on app startup
   */
  static initialize(): void {
    ThemeManager.getInstance();
  }
}

// Convenience functions for easy usage
export const themeManager = ThemeManager.getInstance();

export const toggleTheme = () => themeManager.toggleTheme();
export const enableN8NTheme = () => themeManager.enableN8NTheme();
export const enableLightTheme = () => themeManager.enableLightTheme();
export const enableDefaultTheme = () => themeManager.enableDefaultTheme();
export const getCurrentTheme = () => themeManager.getCurrentTheme();
export const isN8NTheme = () => themeManager.isN8NTheme();

// React hook for theme state
export const useTheme = () => {
  if (typeof window === 'undefined') {
    return {
      currentTheme: 'default' as Theme,
      toggleTheme,
      enableN8NTheme,
      enableLightTheme,
      enableDefaultTheme,
      isN8NTheme: false,
      themeConfig: themes.default
    };
  }
  
  return {
    currentTheme: getCurrentTheme(),
    toggleTheme,
    enableN8NTheme,
    enableLightTheme,
    enableDefaultTheme,
    isN8NTheme: isN8NTheme(),
    themeConfig: themeManager.getThemeConfig()
  };
};