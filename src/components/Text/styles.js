import styled, { css } from 'styled-components';

const Text = styled.a`
    ${({theme}) => css`
        font-size: ${theme.fontSize.default};
    `}
`;
export default Text;