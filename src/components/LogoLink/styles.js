import styled, { css } from 'styled-components';

export const Container = styled.a`
    ${({theme, light}) => css` 
        display: flex;
        align-items: center;
        color: ${!light ? theme.colors.textColorDark : theme.colors.textColorLight};
        text-decoration: none;
        
        > img {
            max-height: 3rem;
        }
    `};
`;