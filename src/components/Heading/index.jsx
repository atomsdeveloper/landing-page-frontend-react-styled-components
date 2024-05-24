import P from 'prop-types';
import Styled from './styles';

const Heading = ( {children} ) => {
    return (
        <Styled.Title>
            {children}
        </Styled.Title>
    )
}
export default Heading;

Heading.propTypes = {
    children: P.node.isRequired
}