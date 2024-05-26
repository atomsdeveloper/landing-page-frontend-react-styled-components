import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

import Heading  from '.';

describe('<Heading />', () => {
    it('should render with default values', () => {
        render(<ThemeProvider theme={theme}> <Heading>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            color: theme.colors.textColorLight,
            'font-size': theme.fontSize.big,
            'text-transform': 'none',
        });
    });

    it('should render with color Dark values', () => {
        render(<ThemeProvider theme={theme}> <Heading light={true}>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            color: theme.colors.textColorDark,
        });
    });

    it('should render with size Small values', () => {
        render(<ThemeProvider theme={theme}> <Heading size='default'>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'font-size': theme.fontSize.default,
        });
    });

    it('should render with size Small values', () => {
        render(<ThemeProvider theme={theme}> <Heading size='small'>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'font-size': theme.fontSize.small,
        });
    });

    it('should render with size Small values', () => {
        render(<ThemeProvider theme={theme}> <Heading size='medium'>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'font-size': theme.fontSize.medium,
        });
    });

    it('should render with uppercase values', () => {
        render(<ThemeProvider theme={theme}> <Heading upperCase>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'text-transform': 'uppercase',
        });
    });

    it('should render with uppercase values', () => {
        const { container } = render(<ThemeProvider theme={theme}> <Heading as='h6'>Texto</Heading> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});
        const h6 = container.querySelector('h6')

        expect(h6.tagName.toLocaleLowerCase()).toBe('h6')
    });
})
