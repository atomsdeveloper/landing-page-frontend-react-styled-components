import P from 'prop-types';
import * as Styled from './styles';

export const LogoLink = ( {children, light= false} ) => {
    return (
        <Styled.Container light={light}>
            {children}
        </Styled.Container>
    );
};
LogoLink.propTypes = {
    children: P.string.isRequired,
    light: P.bool.isRequired
};