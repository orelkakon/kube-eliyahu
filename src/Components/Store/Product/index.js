import React, { useState } from 'react';
import { ProductDiv, ProductImg, ProductDetails, AddToCartButton } from './style'
import { ADD_TO_CART } from './hebrew'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddItem, actionUpdateItem } from '../../../actions/index'
import Modal from 'react-modal';
import ProductDescription from './../ProductDescription/index'

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
        color: 'white',
        zIndex: '-100'
    },
};

const Product = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeOpenModal = () => setIsOpen(!modalIsOpen)
    const dispatch = useDispatch()
    const mycart = useSelector(state => state)
    const addOrUpdateItem = (name) => {
        const user = mycart.find(product => product.name === name);
        user ?
            dispatch(actionUpdateItem(props.product.name, user.count + 1)) :
            dispatch(actionAddItem(props.product.name, props.product.description, 1, props.product.price))
    }
    return (
        <ProductDiv>
            <ProductImg src={props.product.img} alt="fail" onClick={() => closeOpenModal()} />
            <ProductDetails onClick={() => closeOpenModal()}>{props.product.name}</ProductDetails>
            <ProductDetails>{'₪' + props.product.price}</ProductDetails>
            <AddToCartButton onClick={() => addOrUpdateItem(props.product.name)}>{ADD_TO_CART}</AddToCartButton>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeOpenModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="product details modal"
            >
                <ProductDescription closeModal={closeOpenModal} product={props.product} addOrUpdateItem={addOrUpdateItem}/>
            </Modal>
        </ProductDiv>
    );
};

export default Product;