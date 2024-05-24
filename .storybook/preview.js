import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/globals-styles';

/** @type { import('@storybook/react').Preview } */
const preview = {
 parameters: {
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
