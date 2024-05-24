import { render, screen } from '@testing-library/react';

import renderTheme from '../../styles/render-theme';
import theme from '../../styles/theme';

import Home from '.';
test('renders learn react link', () => {
  render(renderTheme(<Home />));
  const heading = screen.getByRole('heading', {name: 'Hello'});

  expect(heading.parentElement).toHaveStyle({
    background: theme.colors.primaryColor,
  });
  
  expect(heading.parentElement).toMatchSnapshot();
  expect(heading.parentElement).toHaveStyleRule('background', 'red');
});
