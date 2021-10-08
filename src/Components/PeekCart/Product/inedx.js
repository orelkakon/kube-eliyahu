import React from 'react';
import XXX from './../../../Assets/r2.png'
import { ProductDiv, ProductContent, DeleteButton, ProductImg } from './style'
import { useDispatch } from 'react-redux'
import { actionRemoveItem } from './../../../actions/index'
import { notifySuccees } from './../../../App';
import { DELETE_SUCCESS } from './../hebrew'


const Product = (props) => {
    const dispatch = useDispatch()
    
    const deleteProduct = () => {
        notifySuccees(DELETE_SUCCESS)
        dispatch(actionRemoveItem(props.element.name))
    }
    return (
        <ProductDiv>
            <ProductImg src={XXX} alt="img" />
            <ProductContent>
                <p style={{ fontSize: '15px'}}>{props.element.name}</p>
                <p style={{ direction: 'ltr', fontSize:'15px'}}>{`${props.element.price} X ${props.element.count} = ${props.element.price * props.element.count}₪`}</p>
                <DeleteButton onClick={() => deleteProduct()} />
            </ProductContent>
        </ProductDiv>
    );
};

export default Product;