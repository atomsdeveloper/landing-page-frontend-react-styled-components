import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
    it('should render text logo', () => {
        renderTheme(<LogoLink link="#target" text='Olá mundo'/>);
        expect(screen.getByRole('heading', {name: 'Olá mundo'}).firstChild).toHaveAttribute('href', '#target');
    });

    it('should render image logo', () => {
        renderTheme(<LogoLink link="#target" text='Olá mundo' src='image.jpg'/>);
        expect(screen.getByAltText('Olá mundo').toHaveAttribute('scr', 'image.jpg'));
    });

    it('should match snapshot', () => {
        const { container } = renderTheme(<LogoLink link="#target" text='Olá mundo' src='image.jpg'/>);
        expect(container.firstChild).toMatchSnapshot();
    });
})