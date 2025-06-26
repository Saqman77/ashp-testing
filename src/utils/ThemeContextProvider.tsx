import React, { createContext, useContext, useState, ReactNode,} from 'react';

// Define the shape of the context value
interface ThemeContextType {
  isMenuOpen: boolean;
  isActive: boolean;
  toggleMenu: () => void;
  // classToggle: () => void;
  closeMenu: () => void;
  active: () => void;
  removeClass: ()=> void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Context provider component
export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const active = () => {
    setActive(true)
  }

  const removeClass =() => {
    setActive(false)
  }



  return (
    <ThemeContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu, isActive, active,removeClass}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};
