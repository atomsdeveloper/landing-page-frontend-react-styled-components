import P from 'proto-types';
import * as Styled from './styles';

const MenuLink = ( {children, link, newTab = false} ) => {
    const target = newTab ? '_blank' : '_self';
    return (
        <Styled.MenuLink href={link} newTab={target}>
            { children }
        </Styled.MenuLink>
    );
};
MenuLink.propTypes = {
    children: P.string.isRequired,
    link: P.string.isRequired,
    newTab: P.bool.isRequired
};
export default MenuLink;