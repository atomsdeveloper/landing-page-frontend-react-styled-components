import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme, light}) => css`
    color: ${light ? theme.colors.textColorDark : theme.colors.textColorLight};
    `};
`;