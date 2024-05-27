import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import { NavLinks } from '.';

import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    render(<ThemeProvider theme={theme}> <NavLinks links={mock} /> </ThemeProvider>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    render(<ThemeProvider theme={theme}> <NavLinks /> </ThemeProvider>);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    render(<ThemeProvider theme={theme}> <NavLinks links={mock} /> </ThemeProvider>);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
    );
  });

  it('should match snapshot', () => {
    render(<ThemeProvider theme={theme}> <NavLinks links={mock} /> </ThemeProvider>);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});