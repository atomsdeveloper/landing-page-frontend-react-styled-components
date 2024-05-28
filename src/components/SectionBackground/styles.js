import styled, { css } from 'styled-components';

const containerBackgroundActive = (theme) => css`
    color: ${theme.colors.textColorLight};
    background-color: ${theme.colors.bgColorDark};

`;
export const Container = styled.div`
    ${({theme, bg}) => css`
        display: flex;
        align-items: center;
        min-height: 100vh;
        ${bg && containerBackgroundActive(theme)};
        color: ${theme.colors.textColorDark};
        background-color: ${theme.colors.bgColorLight};
    `};
`;