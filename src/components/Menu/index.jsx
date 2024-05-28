import P from 'prop-types';
import { useState } from 'react';

import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

import {Close as MenuIconClose} from '@styled-icons/material-outlined/Close';
import {Menu as MenuIcon} from '@styled-icons/material-outlined/Menu'

export const Menu = ( {links = [], logoData } ) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <Styled.Button onClick={() => setMenuVisible(true)} menuVisible={menuVisible} aria-label="open/close">
                {menuVisible ? <MenuIconClose aria-label='close/menu' /> : <MenuIcon aria-label='open/menu'/>}
            </Styled.Button>

            <Styled.Container menuVisible={menuVisible} onClick={() => setMenuVisible(false)}>
                <SectionContainer>
                    <Styled.MenuContainer>
                       <LogoLink {...logoData} />

                       <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
};
Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired
};