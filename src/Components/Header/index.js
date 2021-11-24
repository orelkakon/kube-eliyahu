import React, { useState } from 'react';
import { FullHeader, PrimaryLogo, Hamburger } from './style'

import HamburgerMenu from './Hamurger/index'
import './style.css'
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        width: '100%',
        height: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ece8e8',
        color: 'white',
    },
};

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeOpenModal = () => {
        document.body.contains(document.getElementById("humb-close")) ?
            document.getElementById("humb-close").id = "humb-open"
            :
            document.getElementById("humb-open").id = "humb-close"
        setIsOpen(!modalIsOpen)
    }

    let history = useHistory();
    return (
        <FullHeader>
            <Hamburger id="humb-close" onClick={() => closeOpenModal()} />
            <PrimaryLogo onClick={() => history.push('/')} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeOpenModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="hamburger modal"
            >
                <HamburgerMenu closeOpenModal={closeOpenModal} />
            </Modal>
        </FullHeader>
    );
};

export default Header;