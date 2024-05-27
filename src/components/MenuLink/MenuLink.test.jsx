import { screen } from '@testing-library/dom';

import { renderTheme } from '../../styles/render-theme';

import {MenuLink} from '.';
describe('<MenuLink />', () => {
    it('should render a link', () => {
        renderTheme(<MenuLink link='https://localhost'> Children </MenuLink>);
        expect(screen.getByRole('link', {name: 'children'}).toBeInTheDocument());
    });

    it('should renderTheme a link with target self or blank', () => {
        renderTheme(<MenuLink target='_self'> Children </MenuLink>);
        expect(screen.getByRole('target', {name: '_self' || '_black'}).toBeInTheDocument());
    });

    it('should renderTheme a link with name value', () => {
        renderTheme(<MenuLink target='_self'> Children </MenuLink>);
        expect(screen.getByRole('target', {name: '_self' || '_black'}).firstChild.toBeInTheDocument());
    })
});