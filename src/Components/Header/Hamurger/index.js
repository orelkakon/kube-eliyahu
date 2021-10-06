import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuHeader, MenuElement } from './../style'
import { HOME_PAGE, Q_AND_A, STORE, CONTACT, POLICY, RECOMMENDES } from './../hebrew'

const HamburgerMenu = (props) => {
    return (
        <div>
            <MenuHeader>
                <MenuElement>
                    <NavLink onClick={() => props.closeOpenModal()} to="/policy" id="menu-list-item" >{POLICY}</NavLink>
                </MenuElement>
                <hr style={{width:'100%'}}/>
                <MenuElement>
                    <NavLink onClick={() => props.closeOpenModal()} to="/contact" id="menu-list-item" >{CONTACT}</NavLink>
                </MenuElement>
                <hr style={{width:'100%'}}/>
                <MenuElement>
                    <NavLink onClick={() => props.closeOpenModal()} to="/q-and-a" id="menu-list-item" >{Q_AND_A}</NavLink>
                </MenuElement>
                <hr style={{width:'100%'}}/>
                <MenuElement>
                    <NavLink onClick={() => props.closeOpenModal()} to="/store" id="menu-list-item" >{STORE}</NavLink>
                </MenuElement>
                <hr style={{width:'100%'}}/>
                <MenuElement>
                    <NavLink onClick={() => props.closeOpenModal()} to="/recommends" id="menu-list-item" >{RECOMMENDES}</NavLink>
                </MenuElement>
                <hr style={{width:'100%'}}/>
                <MenuElement>
                    <NavLink onClick={() => props.closeOpenModal()} to="/" id="menu-list-item" >{HOME_PAGE}</NavLink>
                </MenuElement>
            </MenuHeader>
        </div>
    );
};

export default HamburgerMenu;