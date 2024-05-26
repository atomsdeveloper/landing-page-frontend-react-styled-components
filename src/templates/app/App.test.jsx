import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

import { Home } from '.';
test('renders learn react link', () => {
  expect(<ThemeProvider theme={theme}> <Home /> </ThemeProvider>);
});