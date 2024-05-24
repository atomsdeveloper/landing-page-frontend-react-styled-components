import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

import Home from '.';

test('renders learn react link', () => {
  render(<ThemeProvider theme={theme}> <Home /> </ThemeProvider>);
  const heading = screen.getByRole('heading', {name: 'Hello'});

  expect(heading.parentElement).toHaveStyle({
    background: theme.colors.primaryColor,
  });
  
  expect(heading.parentElement).toMatchSnapshot();
  expect(heading.parentElement).toHaveStyleRule('background', 'blue');
});
