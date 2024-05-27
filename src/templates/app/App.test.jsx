import { renderTheme }  from '../../styles/render-theme';
import { Home }  from '.';

describe('<TextContent />', () => {
    it('should render component with TextContent', () => {
        renderTheme(<Home />);
    });
})