'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { themeManager, type Theme, themes } from '@/utils/themeToggle';

interface ThemeToggleProps {
  variant?: 'button' | 'dropdown' | 'toggle';
  showLabels?: boolean;
  className?: string;
}

export default function ThemeToggle({ 
  variant = 'button', 
  showLabels = true,
  className = ''
}: ThemeToggleProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentTheme(themeManager.getCurrentTheme());
    
    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      setCurrentTheme(e.detail.theme);
    };
    
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    return () => window.removeEventListener('themeChanged', handleThemeChange as EventListener);
  }, []);

  const handleThemeSelect = (theme: Theme) => {
    themeManager.applyTheme(theme);
    setIsOpen(false);
  };

  const getThemeIcon = (theme: Theme) => {
    switch (theme) {
      case 'light': return <Sun className="w-4 h-4" />;
      case 'n8n': return <Moon className="w-4 h-4" />;
      default: return <Palette className="w-4 h-4" />;
    }
  };

  if (variant === 'toggle') {
    return (
      <button
        onClick={() => themeManager.toggleTheme()}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg 
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          transition-all duration-200
          ${className}
        `}
      >
        {getThemeIcon(currentTheme)}
        {showLabels && (
          <span className="text-sm font-medium">
            {themes[currentTheme].name}
          </span>
        )}
      </button>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
            transition-all duration-200
          "
        >
          {getThemeIcon(currentTheme)}
          {showLabels && (
            <span className="text-sm font-medium">
              {themes[currentTheme].name}
            </span>
          )}
        </button>
        
        {isOpen && (
          <div className="
            absolute top-full left-0 mt-2 w-48
            bg-white dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700
            rounded-lg shadow-lg z-50
          ">
            {Object.entries(themes).map(([themeKey, themeConfig]) => {
              const theme = themeKey as Theme;
              return (
                <button
                  key={theme}
                  onClick={() => handleThemeSelect(theme)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-left
                    hover:bg-gray-50 dark:hover:bg-gray-700
                    transition-colors duration-200
                    ${currentTheme === theme ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
                    first:rounded-t-lg last:rounded-b-lg
                  `}
                >
                  {getThemeIcon(theme)}
                  <div>
                    <div className="font-medium text-sm">{themeConfig.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {themeConfig.description}
                    </div>
                  </div>
                  {currentTheme === theme && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        )}
        
        {/* Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  }

  // Default button variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Object.entries(themes).map(([themeKey, themeConfig]) => {
        const theme = themeKey as Theme;
        const isActive = currentTheme === theme;
        
        return (
          <button
            key={theme}
            onClick={() => handleThemeSelect(theme)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
              ${isActive 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
              }
            `}
            title={themeConfig.description}
          >
            {getThemeIcon(theme)}
            {showLabels && (
              <span className="text-sm font-medium hidden sm:inline">
                {themeConfig.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}