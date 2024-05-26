import styled, { css } from 'styled-components';

const Text = styled.p`
    ${({theme}) => css`
        font-size: ${theme.fontSize.default}
    `}
`;
export default Text;