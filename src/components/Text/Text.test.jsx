import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import { Text }  from '.';

describe('<Text />', () => {
    it('should render component with Text', () => {
        render(<ThemeProvider theme={theme}> <Text>Texto</Text> </ThemeProvider>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            color: 'blue'
        });
    });
})