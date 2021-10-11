import React from 'react';
import { ProductDiv, ProductImg, ProductDetails, AddToCartButton, CloseDescription } from './style'
import { ADD_TO_CART, CLOSE } from './../Product/hebrew'
import config from './../../../config.json'

const ProductDescription = (props) => {
    return (
        <ProductDiv>
            <ProductImg src={`${config.protocol}://${config.host}:${config.port}${props.product.image[0].url}`} alt="fail" />
            <ProductDetails>{props.product.name}</ProductDetails>
            <ProductDetails>{props.product.description}</ProductDetails>
            <ProductDetails>{" מחיר ליחידת מוצר ₪"   + props.product.price}</ProductDetails>
            <AddToCartButton onClick={() => props.addOrUpdateItem(props.product.name)}>{ADD_TO_CART}</AddToCartButton>
            <CloseDescription onClick={() => props.closeModal()}>{CLOSE}</CloseDescription>

        </ProductDiv>
    );
};

export default ProductDescription;