import React, { useState } from 'react';
import { StoreDiv, SendInvitation, FullStoreDiv } from './style'
import XXX from './../../Assets/r2.png'
import { TITLE, GO_CHECHKOUT, SHOW_CART, NORMAL_ORDER, CHEAP_ORDER, EXPENSIVE_ORDER } from './hebrew'
import Product from './Product/index'
import SelectOrderBy from './OrderBy/index'
import { useHistory } from "react-router-dom";

const Store = () => {
    let history = useHistory();

    const movePage = (path) => {
        history.push(path)
    }

    const orderResultsBy = (kind) => {
        switch (kind) {
            case NORMAL_ORDER:
                setProducts([...products].sort((a, b) => a.name > b.name ? 1 : -1 ))
                break
            case CHEAP_ORDER:
                setProducts([...products].sort((a, b) => a.price <= b.price ? 1 : -1 ))
                break
            case EXPENSIVE_ORDER:
                setProducts([...products].sort((a, b) => a.price >= b.price ? 1 : -1 ))
                break
        }
    }
    const [products, setProducts] = useState([{ name: 'קובה בשר טחון ברוטב חמוסטה חמוץ צהוב ', price: 80, img: XXX }, { name: 'קובה חמו ברוטב במיה כתום', price: 50, img: XXX }, { name: 'קובה סיסקה ברוטב סלק אדום', price: 20, img: XXX }, { name: 'קובה בשר טחון ברוטב חמוסטה חמוץ צהוב ', price: 80, img: XXX }, { name: 'קובה בשר טחון ברוטב חמוסטה חמוץ צהוב ', price: 80, img: XXX }, { name: 'קובה חמו ברוטב במיה כתום', price: 50, img: XXX }])
    return (
        <FullStoreDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <SelectOrderBy orderResultsBy={orderResultsBy}/>
            <br />
            <StoreDiv>
                {
                    products && products.map((product) => <Product product={product} />)
                }
            </StoreDiv>
            <br /><br />
            <SendInvitation onClick={() => movePage('/mycart')}>{SHOW_CART}</SendInvitation>
            <SendInvitation onClick={() => movePage('/checkout')}>{GO_CHECHKOUT}</SendInvitation>
            <br /><br />
            <br /><br />
        </FullStoreDiv>
    );
};

export default Store;