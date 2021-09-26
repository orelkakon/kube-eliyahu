import React, { useState } from 'react';
import { Icon, Count } from './style'
import { useSelector } from 'react-redux'
import Modal from 'react-modal';
import PeekCart from './../PeekCart/index';

const customStyles = {
    content: {
        top: '45%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '85%',
        height: '70%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ece8e8',
        color: 'white'
    },
};

const CartIcon = () => {
    const counter = useSelector(state => state ? state.length : 0)
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeOpenModal = () => setIsOpen(!modalIsOpen)

    return (
        <>
            <Icon onClick={() => closeOpenModal()}>
                <Count>
                    {counter}
                </Count>
            </Icon>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeOpenModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="peek cart modal"
            >
                <PeekCart closeModal={closeOpenModal}/>
            </Modal>
        </>
    );
};

export default CartIcon;