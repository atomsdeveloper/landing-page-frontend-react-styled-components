import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme.js';
import { GlobalStyles } from '../src/styles/globals-styles.js';

/** @type { import('@storybook/react').Preview } */
const preview = {
 parameters: {
  actions: {ArgTypesRegex: "^on[A_Z.*" },
  backgrounds: {
    default: 'light',
    values: [
        {
            name: 'light',
            value: theme.colors.bgColorLight
        },
        {
            name: 'dark',
            value: theme.colors.bgColorDark
        }
    ]
  },
  controls: {
   matchers: {
    color: /(background|color)$/i,
    date: /Date$/i,
   },
  },
 },
 decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
            <GlobalStyles />
        </ThemeProvider>
    ),
 ]
};

export default preview;
