import P from 'prop-types';
import * as Styled from './styles';

export const TextContent = ({children}) => {
    return (
        <Styled.Text> {children} </Styled.Text>
    );
};
TextContent.propTypes = {
    children: P.node.isRequired,
};