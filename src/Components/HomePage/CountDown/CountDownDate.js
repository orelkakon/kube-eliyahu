import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import Counter from './Counter'
import { CountDownDateDiv } from './style'
import { END_ORDERED_TIME, HAS_TIME, CLOSED_ORDERD } from './hebrew'
import axios from 'axios'
import config from './../../../config.json'

const FinishDate = () => <span style={{ direction: 'rtl', fontSize: "30px" }}>{END_ORDERED_TIME}</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <FinishDate />;
    } else {
        return <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    }
};

const getHomePageData = async (setSpecialFreeText, setOrderTime) => {
    const free_text = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.basicData}`
    })
    const order_time = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.basicData}`
    })
    setSpecialFreeText(free_text.data.homepage_free_text)
    setOrderTime(order_time.data.order_time)
    return
}  

const CountDownDate = () => {
    const [specialFreeText, setSpecialFreeText] = useState("")
    const [orderTime, setOrderTime] = useState("")
    useEffect(() => {
        getHomePageData(setSpecialFreeText, setOrderTime)
    }, [])  
    return (
        <CountDownDateDiv>
            <p style={{ direction: 'rtl', fontSize: "30px" }}>{HAS_TIME}</p>
            <Countdown date={new Date(orderTime)} renderer={renderer}>
            </Countdown>
            <p style={{ direction: 'rtl', fontSize: "25px" }}>{CLOSED_ORDERD}</p>
            <p style={{ direction: 'rtl', fontSize: "30px", color: 'red' }}>{specialFreeText}</p>
        </CountDownDateDiv>
    );
};

export default CountDownDate;