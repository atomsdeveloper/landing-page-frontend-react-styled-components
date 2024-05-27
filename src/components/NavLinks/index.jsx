import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from "../MenuLink";

const NavLinks = ( { links = [] } ) => {
    return (
       <Styled.NavLink>
            {links.map((link) => {
                <MenuLink key={link.link} {...link} />
            })}
       </Styled.NavLink>
    );
};
NavLinks.propTypes = {
    links: P.arrayOf(
      P.shape({
        children: P.string.isRequired,
        link: P.string.isRequired,
        newTab: P.bool,
      }),
    ),
  };
export default NavLinks;