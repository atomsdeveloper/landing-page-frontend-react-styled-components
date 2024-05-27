import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import MenuLink from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

describe('<MenuLink />', () => {
    it('should render a link', () => {
        render(<ThemeProvider theme={theme}>
                <MenuLink link='https://www.google.com.br/'> Children </MenuLink>
            </ThemeProvider>
        );
        expect(screen.getByRole('link', {name: 'children'}).toBeInTheDocument());
    });

    it('should render a link with target self or blank', () => {
        render(<ThemeProvider theme={theme}>
                <MenuLink target='_self'> Children </MenuLink>
            </ThemeProvider>    
        );
        expect(screen.getByRole('target', {name: '_self' || '_black'}).toBeInTheDocument());
    });

    it('should render a link with name value', () => {
        render(<ThemeProvider theme={theme}>
                <MenuLink target='_self'> Children </MenuLink>
            </ThemeProvider>
        );
        expect(screen.getByRole('target', {name: '_self' || '_black'}).firstChild.toBeInTheDocument());
    })
});