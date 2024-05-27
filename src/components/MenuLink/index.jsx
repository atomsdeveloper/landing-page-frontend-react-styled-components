import P from 'proto-types';
import Link from './styles';

const MenuLink = ( {children, link, newTab = false} ) => {
    const target = newTab ? '_blank' : '_self';
    return (
        <Link href={link} newTab={target}>
            { children }
        </Link>
    );
};
MenuLink.propTypes = {
    children: P.string.isRequired,
    link: P.string.isRequired,
    newTab: P.bool.isRequired
};
export default MenuLink;