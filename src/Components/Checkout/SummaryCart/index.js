import React from 'react';
import { SummaryCartDiv, CartTable } from './style'
import { SUM_TITLE, SUM_UNITS, PRODUCT_TITLE, DELIVERY, TOTAL } from './hebrew'
import { getTotalCount, getTotalSum } from './utils'
import './style.css'
import { useSelector } from 'react-redux';

// const cart = [{ name: 'קובה דלעת עם במיה', count: 5, price: 20 }, { name: 'קובה בטטה עם דלורית', count: 2, price: 15 }, { name: 'קובה סיסקה עם בשר צלעות', count: 3, price: 45 },]

const SummaryCart = () => {
    const cart = useSelector(state => state)
    return (
        <SummaryCartDiv>
            <CartTable>
                <tbody>
                    <tr>
                        <th>{SUM_TITLE}</th>
                        <th>{SUM_UNITS}</th>
                        <th>{PRODUCT_TITLE}</th>
                    </tr>
                    {
                        cart && cart.map((product, index) => {
                            return (<tr key={index}>
                                <td>{`${product.price * product.count} ₪`}</td>
                                <td>{product.count}</td>
                                <td>{product.name}</td>
                            </tr>)
                        })
                    }
                    <tr>
                        <td>{`0 ₪`}</td>
                        <td>{1}</td>
                        <td>{DELIVERY}</td>
                    </tr>
                    <tr>
                        <td>{`${getTotalSum(cart)} ₪`}</td>
                        <td>{getTotalCount(cart)}</td>
                        <td style={{ fontWeight: "bold" }}>{TOTAL}</td>
                    </tr>
                </tbody>
            </CartTable>
        </SummaryCartDiv>
    );
};

export default SummaryCart;