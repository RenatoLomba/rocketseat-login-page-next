import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import customTheme from '../../styles/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider options={{ initialColorMode: 'dark' }}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
