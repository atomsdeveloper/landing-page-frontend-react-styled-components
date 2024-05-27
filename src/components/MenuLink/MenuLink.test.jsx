import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import MenuLink  from '.';

describe('<MenuLink />', () => {
    it('should render a link', () => {
        render(<MenuLink link='https://www.google.com.br/'> Children </MenuLink>);
        expect(screen.getByRole('link', {name: 'children'}).toBeInTheDocument());
    });

    it('should render a link with target self or blank', () => {
        render(<MenuLink target='_self'> Children </MenuLink>);
        expect(screen.getByRole('target', {name: '_self' || '_black'}).toBeInTheDocument());
    });

    it('should render a link with name value', () => {
        render(<MenuLink target='_self'> Children </MenuLink>);
        expect(screen.getByRole('target', {name: '_self' || '_black'}).firstChild.toBeInTheDocument());
    })
});