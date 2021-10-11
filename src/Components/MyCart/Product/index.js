import React from 'react';
import { ProductDiv, ProductContent, DeleteButton, ProductImg, SumInput } from './style'
import { useDispatch } from 'react-redux'
import { actionRemoveItem, actionUpdateItem } from '../../../actions/index'
import { notifySuccees } from './../../../App';
import { DELETE_SUCCESS } from './hebrew'
import { encrypt } from './../../../security/index'

const Product = (props) => {
    const dispatch = useDispatch()

    const deleteProduct = () => {
        notifySuccees(DELETE_SUCCESS)
        dispatch(actionRemoveItem(props.element.name))
        localStorage.removeItem(props.element.name)
    }

    const updateProduct = (value) => {
        dispatch(actionUpdateItem(props.element.name, value))
        localStorage.setItem(props.element.name, JSON.stringify({
            'description': props.element.description,
            'count': Number(value),
            'price': props.element.price,
            'imgUrl': encrypt(props.element.imgUrl)
        }))
    }
    return (
        <ProductDiv addBreakLine={props.length !== props.key + 1}>
            <ProductImg src={props.element.imgUrl} alt="img" />
            <ProductContent>
                <p style={{ fontSize: '20px' }}>{props.element.name}</p>
                <SumInput defaultValue={props.element.count} type="number" min="1" max="1000" onChange={e => e.target.value >= 0 ? updateProduct(e.target.value) : alert("לא ניתן לשים מספר שלילי")}></SumInput>
                <p style={{ direction: 'ltr', fontSize: '20px' }}>{`${props.element.price} X ${props.element.count} = ${props.element.price * props.element.count}₪`}</p>
                <DeleteButton onClick={() => deleteProduct()} />
            </ProductContent>
        </ProductDiv>
    );
};

export default Product;