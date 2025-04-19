import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../tokens/colors';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const defaultContext: ThemeContextType = {
  mode: 'light',
  theme: lightTheme,
  toggleTheme: () => {},
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'light' 
}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme);
  const [theme, setThemeObject] = useState(mode === 'light' ? lightTheme : darkTheme);

  useEffect(() => {
    // Apply theme classes to the document
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update theme object
    setThemeObject(mode === 'light' ? lightTheme : darkTheme);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;