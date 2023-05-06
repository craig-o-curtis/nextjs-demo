import { baseTheme, extendTheme } from '@chakra-ui/react';
// global styles here

// Chakra config
export const customTheme = extendTheme({
  colors: {
    brand: baseTheme.colors.purple,
    primary: baseTheme.colors.blue,
    secondary: baseTheme.colors.orange,
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});
