import React from 'react';
import { TITLE, SHOW_CART, GO_CHECHKOUT, EMPTY_CART, SUBTOTAL } from './hebrew'
import { CartDiv, SendInvitation, ProductsCart } from './style'
import { useSelector } from 'react-redux';
import { getTotalSum } from './../Checkout/SummaryCart/utils'
import Product from './Product/inedx'
import { useHistory } from "react-router-dom";

const PeekCart = (props) => {
    let history = useHistory();
    let cart = useSelector(state => state)

    const movePage = (path) => {
        props.closeModal()
        history.push(path)
    }
    return (
        <CartDiv>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>{TITLE}</p>
            {
                cart && cart.length > 0 ?
                    <>
                        <ProductsCart>
                            {
                                cart && cart.map((element, index) => {
                                    return (<><Product index={index} element={element}/><br/></>)
                                })
                            }
                        </ProductsCart>
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}>{SUBTOTAL} {`${getTotalSum(cart)}₪`}</p>
                        <SendInvitation onClick={() => movePage('/mycart')}>{SHOW_CART}</SendInvitation>
                        <SendInvitation onClick={() => movePage('/checkout')}>{GO_CHECHKOUT}</SendInvitation>
                    </>
                    :
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{EMPTY_CART}</p>
            }

        </CartDiv>
    );
};

export default PeekCart;