import { screen } from '@testing-library/react';
import { renderTheme }  from '../../styles/render-theme';
import { TextContent }  from '.';

describe('<TextContent />', () => {
    it('should render component with TextContent', () => {
        renderTheme(<TextContent> Texto </TextContent>);
        expect(screen.getByText('Texto')).toBeInTheDocument();
    });
})