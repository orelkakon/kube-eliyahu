import React from 'react';
import { ProductDiv, ProductImg, ProductDetails, AddToCartButton } from './style'
import { ADD_TO_CART } from './../Product/hebrew'


const ProductDescription = (props) => {
    return (
        <ProductDiv>
            <ProductImg src={props.product.img} alt="fail" />
            <ProductDetails>{props.product.name}</ProductDetails>
            <ProductDetails>{props.product.description}</ProductDetails>
            <ProductDetails>{" מחיר ליחידת מוצר ₪"   + props.product.price}</ProductDetails>
            <AddToCartButton onClick={() => props.addOrUpdateItem(props.product.name)}>{ADD_TO_CART}</AddToCartButton>
        </ProductDiv>
    );
};

export default ProductDescription;