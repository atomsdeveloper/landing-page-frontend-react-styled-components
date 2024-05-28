import P from 'prop-types';
import { useState } from 'react';

import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

import {Close as MenuIconClose} from '@styled-icons/material-outlined/Close';
import {Menu as MenuIcon} from '@styled-icons/material-outlined/Menu'

export const Menu = ( {links = [], logoData } ) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Styled.Button onClick={() => setVisible(!visible)} visible={visible} aria-label="open/close">
                {visible ? <MenuIconClose aria-label='close/menu' /> : <MenuIcon aria-label='open/menu'/>}
            </Styled.Button>

            <Styled.Container onClick={() => setVisible(false)} visible={visible} >
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








