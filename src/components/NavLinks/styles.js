import styled, { css } from 'styled-components';

export const Container = styled.nav`
    ${() => css`
        display: flex;
        flex-flow: row wrap;

        @media (max-width: 768px) {
          flex-flow: column wrap;
          align-content: center;
        }
  `}
`;