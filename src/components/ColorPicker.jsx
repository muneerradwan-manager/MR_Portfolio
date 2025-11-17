import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colorThemes = [
  {
    name: 'Green',
    value: 'green',
    colors: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  {
    name: 'Blue',
    value: 'blue',
    colors: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
  },
  {
    name: 'Red',
    value: 'red',
    colors: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
  },
  {
    name: 'Orange',
    value: 'orange',
    colors: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
  },
  {
    name: 'Yellow',
    value: 'yellow',
    colors: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
  },
  {
    name: 'Purple',
    value: 'purple',
    colors: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
  },
  {
    name: 'Pink',
    value: 'pink',
    colors: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9f1239',
      900: '#831843',
    },
  },
  {
    name: 'Cyan',
    value: 'cyan',
    colors: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  },
];

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(() => {
    return localStorage.getItem('colorTheme') || 'green';
  });
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Apply saved color on mount
    applyColorTheme(selectedColor);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyColorTheme = (colorValue) => {
    const theme = colorThemes.find((t) => t.value === colorValue) || colorThemes[0];
    const root = document.documentElement;

    // Apply all color shades as CSS variables
    Object.entries(theme.colors).forEach(([shade, color]) => {
      root.style.setProperty(`--color-primary-${shade}`, color);
    });

    // Update Tailwind classes by updating the data attribute
    root.setAttribute('data-color-theme', colorValue);
  };

  const handleColorChange = (colorValue) => {
    setSelectedColor(colorValue);
    applyColorTheme(colorValue);
    localStorage.setItem('colorTheme', colorValue);
    setIsOpen(false);
  };

  const currentTheme = colorThemes.find((t) => t.value === selectedColor) || colorThemes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Change color theme"
      >
        <div
          className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
          style={{ backgroundColor: currentTheme.colors[500] }}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-500 border-2 border-white dark:border-gray-800"
            />
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="p-3">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Color Theme
              </p>
              <div className="grid grid-cols-4 gap-2">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => handleColorChange(theme.value)}
                    className="group relative p-3 rounded-lg transition-all hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 dark:hover:ring-gray-600"
                    style={{
                      backgroundColor: theme.colors[100],
                      ...(selectedColor === theme.value && {
                        border: `2px solid ${theme.colors[500]}`,
                        boxShadow: `0 0 0 2px ${theme.colors[100]}, 0 0 0 4px ${theme.colors[500]}`,
                      }),
                    }}
                    title={theme.name}
                  >
                    <div
                      className="w-full h-8 rounded-md shadow-sm"
                      style={{ backgroundColor: theme.colors[500] }}
                    />
                    {selectedColor === theme.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center"
                        style={{ backgroundColor: theme.colors[500] }}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {theme.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;

