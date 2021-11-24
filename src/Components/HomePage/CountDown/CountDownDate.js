import React from 'react';
import Countdown from 'react-countdown';
import Counter from './Counter'
import { CountDownDateDiv } from './style'
import { END_ORDERED_TIME, HAS_TIME, CLOSED_ORDERD } from './hebrew'

const FinishDate = () => <span style={{ direction: 'rtl', fontSize: "30px" }}>{END_ORDERED_TIME}</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <FinishDate />;
    } else {
        return <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    }
};

const CountDownDate = ({specialFreeText, orderTime}) => { 
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