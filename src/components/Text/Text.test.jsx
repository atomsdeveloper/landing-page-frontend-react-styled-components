import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import { Text }  from '.';

describe('<Text />', () => {
    it('should render component with Text', () => {
        render(<Text>Texto</Text>);
        const heading = screen.getByRole('heading', {name: 'Texto'});

        expect(heading).toHaveStyle({
            color: 'blue'
        });
    });
})