import P from 'prop-types';
import * as Styled from './styles';

const Heading = ( {children, light = false, as='h1', size='big', upperCase=false} ) => {
    return (
        <Styled.Container light={light} as={as} size={size} upperCase={upperCase}> {children} </Styled.Container>
    )
};
Heading.propTypes = {
    children: P.node.isRequired,
    light: P.bool,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size: P.oneOf(['default', 'small', 'medium', 'big']),
    upperCase: P.bool
}
export default Heading;