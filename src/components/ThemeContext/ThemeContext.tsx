import React from 'react';

type ColorMode = 'light' | 'dark';
type ThemeContextValue = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  colorMode: 'light',
  setColorMode: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>('light');

  React.useEffect(() => {
    const initialColorMode = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
    rawSetColorMode(initialColorMode);
  }, []);

  const contextValue: ThemeContextValue = React.useMemo(() => {
    function setColorMode(newValue: ColorMode): void {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('color-mode', newValue);
      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
