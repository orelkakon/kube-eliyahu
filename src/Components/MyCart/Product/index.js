import React from 'react';
import XXX from './../../../Assets/r2.png'
import { ProductDiv, ProductContent, DeleteButton, ProductImg, SumInput } from './style'
import { useDispatch } from 'react-redux'
import { actionRemoveItem, actionUpdateItem } from '../../../actions/index'

const Product = (props) => {
    const dispatch = useDispatch()
    return (
        <ProductDiv addBreakLine={props.length !== props.index + 1}>
            <ProductImg src={XXX} alt="img" />
            <ProductContent>
                <p style={{ fontSize: '20px' }}>{props.element.name}</p>
                <SumInput defaultValue={props.element.count} type="number" min="1" max="1000" onChange={e => e.target.value >= 0 ? dispatch(actionUpdateItem(props.element.name, e.target.value)) : alert("לא ניתן לשים מספר שלילי")}></SumInput>
                <p style={{ direction: 'ltr', fontSize: '20px' }}>{`${props.element.price} X ${props.element.count} = ${props.element.price * props.element.count}₪`}</p>
                <DeleteButton onClick={() => dispatch(actionRemoveItem(props.element.name))} />
            </ProductContent>
        </ProductDiv>
    );
};

export default Product;