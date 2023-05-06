import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <IconButton
      colorScheme="brand"
      onClick={toggleColorMode}
      aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
      icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
    />
  );
}
