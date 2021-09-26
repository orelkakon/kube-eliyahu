import React from 'react';
import XXX from './../../../Assets/r2.png'
import { ProductDiv, ProductContent, DeleteButton, ProductImg } from './style'
import { useDispatch } from 'react-redux'
import { actionRemoveItem } from './../../../actions/index'

const Product = (props) => {
    const dispatch = useDispatch()
    return (
        <ProductDiv>
            <ProductImg src={XXX} alt="img" />
            <ProductContent>
                <p style={{ fontSize: '15px'}}>{props.element.name}</p>
                <p style={{ direction: 'ltr', fontSize:'15px'}}>{`${props.element.price} X ${props.element.count} = ${props.element.price * props.element.count}₪`}</p>
                <DeleteButton onClick={() => dispatch(actionRemoveItem(props.element.name))} />
            </ProductContent>
        </ProductDiv>
    );
};

export default Product;