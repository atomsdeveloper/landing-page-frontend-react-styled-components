import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as Heading } from '../Heading/styles'

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.textColorDark};
    background: ${theme.colors.bgColorLight};
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.mobile} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: 1rem;
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
    ${({theme}) => css`
        color: ${theme.colors.textColorDark};
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
    ${({theme, visible}) => css`
       display: flex;
       align-items: center;
       justify-content: center;
       z-index: 6;
       position: fixed;
       top: 2rem;
       right: 2rem;
       width: 4rem;
       height: 4rem;
       background: ${theme.colors.bgColorDark};
       color: ${theme.colors.textColorLight};
       border: none;
       pointer-events: ${visible ? 'none' : 'all'};
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