import P from 'prop-types';
import Title from './styles';

const Heading = ( {children, light = false, as='h1', size='big', upperCase=false} ) => {
    return (
        <Title light={light} as={as} size={size} upperCase={upperCase}> {children} </Title>
    )
};
Heading.propTypes = {
    children: P.node.isRequired,
    light: P.bool.isRequired,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size: P.oneOf(['default', 'small', 'medium', 'big']),
    upperCase: P.bool.isRequired
}
export default Heading;