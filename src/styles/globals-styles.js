import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0
    }
    html {
        font-size: 62.5%;
    }
    body {
        ${({theme}) => css`
            background: ${theme.fontFamily.default};
            font-size: ${theme.fontSize.default};
        `}
    }
    h1 {
        ${({theme}) => css`
            font-family: ${theme.fontFamily.default};
        `}   
    }
`;
export default GlobalStyles;