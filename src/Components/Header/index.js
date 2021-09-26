import React from 'react';
import { FullHeader, PrimaryLogo, MenuHeader, MenuElement } from './style'
import { NavLink } from 'react-router-dom';
import { HOME_PAGE, Q_AND_A, CONTACT, POLICY, RECOMMENDES } from './hebrew'
import './style.css'
import { useHistory } from "react-router-dom";


const Header = () => {
    let history = useHistory();
    return (
        <FullHeader>
            <MenuHeader>
                <MenuElement>
                    <NavLink to="/policy" id="menu-list-item" >{POLICY}</NavLink>
                </MenuElement>
                <MenuElement>
                    <NavLink to="/contact" id="menu-list-item" >{CONTACT}</NavLink>
                </MenuElement>
                <MenuElement>
                    <NavLink to="/q-and-a" id="menu-list-item" >{Q_AND_A}</NavLink>
                </MenuElement>
                <MenuElement>
                    <NavLink to="/recommends" id="menu-list-item" >{RECOMMENDES}</NavLink>
                </MenuElement>
                <MenuElement>
                    <NavLink to="/" id="menu-list-item" >{HOME_PAGE}</NavLink>
                </MenuElement>
            </MenuHeader>

            <PrimaryLogo onClick={() => history.push('/')}/>

        </FullHeader>
    );
};

export default Header;