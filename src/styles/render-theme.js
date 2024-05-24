import theme from './theme';
import { ThemeProvider } from 'styled-components';

const renderTheme = ( {children} ) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};
export default renderTheme;
