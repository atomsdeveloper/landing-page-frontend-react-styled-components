import styled, { css } from 'styled-components';

const Container = styled.a`
    ${({theme}) => css`
        display: block;
        text-decoration: none;
        font-size: ${theme.fontSize.default};
        padding: ${theme.fontSize.default};
        color: ${theme.colors.textColorDark};
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: : 0;
            left: 0;
            width: 0;
            height: 0.2rem;
            background: ${theme.colors.textColorLight};
        }

        &:hover::after {
            left: 25%;
            width: 50%;
        }
    `}

`;
export default Container;