import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles'

const setMenuVisible = (theme) => css`
    visibility: visible;
    opacity: 1;
`;
export const Container = styled.div`
    ${({theme, menuVisible}) => css`
        transition: all 300ms ease-in-out;
        color: ${theme.color.textColorDark};
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: #dddddd;
    `};

    > ${SectionContainer} {
        padding-top: 0;
        padding-bottom: 0;
    };

    & ${Heading} {
        margin-left: 0;
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        height: 100vh;
        visibility: hidden;
        opacity: 0;
        ${menuVisible && setMenuVisible(theme)}

        > ${SectionContainer} {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            height: 100vh;
            align-items: center;
            overflow-y: auto;
        };

        & ${Heading} {
            display: flex;
            justify-content: center;
            padding-bottom: 3.2rem;
        }
    }
`;

export const MenuContainer = styled.div`
    ${({theme}) => css`
        color: ${theme.color.textColorDark};
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            display: block;
            text-align: center;
            padding: 3.2rem 0;
        }    
    `};
`;

export const Button = styled.div`
    ${({theme, menuVisible}) => css`
       z-index: 6;
       position: fixed;
       top: 2rem;
       right: 2rem;
       width: 4rem;
       height: 4rem;
       background: ${theme.colors.bgColorDark};
       color: ${theme.colors.textColorlight};
       border: none;
       pointer-events: ${menuVisible ? 'none' : 'all'};
    `}; 

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > svg {
        width: 2.5rem;
        height: 2.5rem
    }
`;