import styled, { css } from 'styled-components';

const Title = styled.h1`
    ${({theme, light}) => css`
        color: ${light ? theme.colors.textColorDark : theme.colors.textColorLight};
    `}
`;
export default Title;