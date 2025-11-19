import { useState, useEffect, useCallback } from 'react';

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
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const applyColorTheme = useCallback((theme) => {
    const root = document.documentElement;
    // Apply all color shades as CSS variables
    Object.entries(theme.colors).forEach(([shade, color]) => {
      root.style.setProperty(`--color-primary-${shade}`, color);
    });
    root.setAttribute('data-color-theme', theme.value);
  }, []);

  // Auto-cycle colors every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % colorThemes.length;
        const nextTheme = colorThemes[nextIndex];
        applyColorTheme(nextTheme);
        return nextIndex;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [applyColorTheme]);

  // Apply initial color on mount
  useEffect(() => {
    const initialTheme = colorThemes[currentColorIndex];
    applyColorTheme(initialTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ColorPicker;

