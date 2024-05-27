import { screen } from '@testing-library/dom';

import { theme } from "../../styles/theme"
import { renderTheme } from '../../styles/render-theme';

import { Heading } from '.';

describe('<Heading />', () => {
    it('should render with default values', () => {
        renderTheme(<Heading light={false}>Texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            color: theme.colors.textColorLight || theme.colors.textColorDark,
            'font-size': theme.fontSize.big,
            'text-transform': 'none',
        });
    });

    it('should renderTheme with color Dark values', () => {
        renderTheme(<Heading light={true}>Texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            color: theme.colors.textColorDark,
        });
    });

    it('should renderTheme with size Default values', () => {
        renderTheme(<Heading size='default'>Texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'font-size': theme.fontSize.default,
        });
    });

    it('should renderTheme with size Small values', () => {
        renderTheme(<Heading size='small'>Texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'font-size': theme.fontSize.small,
        });
    });

    it('should renderTheme with size Medium values', () => {
        renderTheme(<Heading size='medium'>Texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'font-size': theme.fontSize.medium,
        });
    });

    it('should renderTheme with uppercase values', () => {
        renderTheme(<Heading upperCase>Texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            'text-transform': 'uppercase',
        });
    });

    it('should renderTheme with other Tags values', () => {
        const { container } = renderTheme(<Heading as='h6'>Texto</Heading>);
        //const heading = screen.getByRole('heading', {name: 'Texto'});
        const h6 = container.querySelector('h6')

        expect(h6.tagName.toLocaleLowerCase()).toBe('h6')
    });
})
