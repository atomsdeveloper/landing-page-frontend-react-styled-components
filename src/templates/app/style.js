import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({bg}) => css`
        backgrond: ${bg}
    `}
`;