import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
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