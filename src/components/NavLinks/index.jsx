import P from 'proto-types';
import * as Styled from './styles';
import {MenuLink} from "../MenuLink";

const NavLinks = ( { links = [] } ) => {
    return (
       <Styled.Container>
            {links.map((link) => {
                <MenuLink key={link.link} {...link} />
            })}
       </Styled.Container>
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