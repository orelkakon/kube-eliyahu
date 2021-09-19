import React from 'react';
import { Icon, Count } from './style'
import { useSelector } from 'react-redux'

const CartIcon = () => {
    const counter = useSelector(state => state ? state.length : 0)
    return (
        <>
            <Icon>
                <Count>
                    {counter}
                </Count>
            </Icon>
        </>
    );
};

export default CartIcon;