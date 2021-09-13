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
const SPECIAL_FREE_TEXT = "" //TODO: take from CMS speical data 

const CountDownDate = () => {
    return (
        <CountDownDateDiv>
            <p style={{ direction: 'rtl', fontSize: "30px" }}>{HAS_TIME}</p>
            <Countdown date={Date.now() + 300000950} renderer={renderer}>
            </Countdown>
            <p style={{ direction: 'rtl', fontSize: "25px" }}>{CLOSED_ORDERD}</p>
            <p style={{ direction: 'rtl', fontSize: "30px", color: 'red' }}>{SPECIAL_FREE_TEXT}</p>
        </CountDownDateDiv>
    );
};

export default CountDownDate;