import styled, { css } from 'styled-components';

const titleSize = {
    default: (theme) => css`
        font-size: ${theme.fontSize.default};
    `,
    small: (theme) => css`
        font-size: ${theme.fontSize.small};
    `,
    medium: (theme) => css`
        font-size: ${theme.fontSize.medium};
    `,
    big: (theme) => css`
        font-size: ${theme.fontSize.big};
    `,
};
const titleCase = (upperCase) => css`
    text-transform: ${upperCase ? "uppercase" : "none"};
`;
const Container = styled.h1`
    ${({theme, light, size, upperCase}) => css`
        color: ${light ? theme.colors.textColorDark : theme.colors.textColorLight};
        ${ titleSize[size](theme) };
        ${ titleCase(upperCase) }
    `}
`;
export default Container;