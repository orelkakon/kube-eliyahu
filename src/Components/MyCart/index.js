import React from 'react';
import Product from './Product/index'
import { MyCartDiv, SendInvitation } from './style'

import { TITLE, EMPTY_CART, GO_STORE, GO_CHECHKOUT } from './hebrew'
import SummaryCart from '../Checkout/SummaryCart/index'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const MyCart = () => {
    let history = useHistory();
    let cart = useSelector(state => state)

    const movePage = (path) => {
        history.push(path)
    }
    return (
        <MyCartDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            {
                cart && cart.length > 0 ?
                    <>
                        {
                            cart && cart.map((element, index) => {
                                return (<><Product index={index} element={element} length={cart.length} /><br /></>)
                            })
                        }
                        <SummaryCart />
                        <br /><br />
                        <SendInvitation onClick={() => movePage('/store')}>{GO_STORE}</SendInvitation>
                        <SendInvitation onClick={() => movePage('/checkout')}>{GO_CHECHKOUT}</SendInvitation>
                    </>
                    :
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{EMPTY_CART}</p>
            }
            <br />
            <br />
            <br />
            <br />
            <br />
        </MyCartDiv>
    );
};

export default MyCart;