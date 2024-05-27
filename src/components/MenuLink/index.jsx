import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ( {children, link, newTab = false} ) => {
    const target = newTab ? '_self' : '_blank';
    return (
        <Styled.Container href={link} target={target}>
            { children }
        </Styled.Container>
    );
};
MenuLink.propTypes = {
    children: P.string.isRequired,
    link: P.string.isRequired,
    newTab: P.bool
};