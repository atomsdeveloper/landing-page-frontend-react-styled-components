import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, bg }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 2rem;
    @media ${theme.media.mobile} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: 3rem;
      color: ${bg ? theme.colors.textColorLight : theme.colors.textColorDark};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.mobile} {
      margin-bottom: 2rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${() => css``}
`;

export const Image = styled.img`
  ${() => css``}
`;