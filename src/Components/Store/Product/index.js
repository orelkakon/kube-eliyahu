import React from 'react';
import { ProductDiv, ProductImg, ProductDetails, AddToCartButton } from './style'
import { ADD_TO_CART } from './hebrew'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddItem, actionUpdateItem } from '../../../actions/index'

const Product = (props) => {
    const dispatch = useDispatch()
    const mycart = useSelector(state => state)
    const addOrUpdateItem = (name) => {
        const user = mycart.find(product => product.name === name);
        user ?
            dispatch(actionUpdateItem(props.product.name, user.count + 1)) :
            dispatch(actionAddItem(props.product.name, 1, props.product.price))
    }
    return (
        <ProductDiv>
            <ProductImg src={props.product.img} alt="fail" />
            <ProductDetails>{props.product.name}</ProductDetails>
            <ProductDetails>{'₪' + props.product.price}</ProductDetails>
            <AddToCartButton onClick={() => addOrUpdateItem(props.product.name)}>{ADD_TO_CART}</AddToCartButton>
        </ProductDiv>
    );
};

export default Product;