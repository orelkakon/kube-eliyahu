import React, { useState, useEffect} from 'react';
import { StoreDiv, SendInvitation, FullStoreDiv } from './style'
import { TITLE, GO_CHECHKOUT, SHOW_CART, NORMAL_ORDER, CHEAP_ORDER, EXPENSIVE_ORDER } from './hebrew'
import Product from './Product/index'
import Filter from './Filter/index'
import SelectOrderBy from './OrderBy/index'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import config from './../../config.json'

const getStoreData = async (setProducts) => {
    const products = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getProducts}`
    })
    setProducts(products.data)
    return
}

const Store = (props) => {
    const [filterString, setFilterString] = useState("")
    let history = useHistory();

    const movePage = (path) => {
        history.push(path)
    }

    const orderResultsBy = (kind) => {
        switch (kind) {
            case NORMAL_ORDER:
                setProducts([...products].sort((a, b) => a.name > b.name ? 1 : -1))
                break
            case CHEAP_ORDER:
                setProducts([...products].sort((a, b) => a.price >= b.price ? 1 : -1))
                break
            case EXPENSIVE_ORDER:
                setProducts([...products].sort((a, b) => a.price <= b.price ? 1 : -1))
                break
            default:
                break
        }
    }
    //const [products, setProducts] = useState([{ name: 'קובה בשר טחון ברוטב חמוסטה חמוץ צהוב', description: 'שקית של 20 כדורים כ 650 גרם בצק ומילוי', price: 80, img: XXX }, { name: 'קובה חמו ברוטב כתום', description: 'שקית של 20 כדורים כ 650 גרם בצק ומילוי', price: 50, img: XXX }, { name: 'קובה סיסקה ברוטב סלק אדום', description: 'שקית של 20 כדורים כ 650 גרם בצק ומילוי', price: 20, img: XXX }, { name: 'קובה בשר טחון ברוטב חמוסטה חמוץ צהוב ', description: 'שקית של 20 כדורים כ 650 גרם בצק ומילוי', price: 80, img: XXX }, { name: 'קובה בשר טחון ברוטב חמוסטה חמוץ צהוב ', description: 'שקית של 20 כדורים כ 650 גרם בצק ומילוי', price: 80, img: XXX }, { name: 'קובה חמו ברוטב במיה כתום', description: 'שקית של 20 כדורים כ 650 גרם בצק ומילוי', price: 50, img: XXX }])
    const [products, setProducts] = useState([])
    useEffect(() => {
        getStoreData(setProducts)
    }, [])
    return (
        <FullStoreDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <SelectOrderBy orderResultsBy={orderResultsBy} />
                <Filter setFilterString={setFilterString} />
            </div>
            <br />
            <StoreDiv>

                {
                    products && filterString !== "" ? products.filter(product => product.name.indexOf(filterString) !== -1).map((product, index) => <Product key={index} product={product} closeModal={props.closeModal} />) :
                        products.map((product, index) => <Product key={index} product={product} closeModal={props.closeModal} />)
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