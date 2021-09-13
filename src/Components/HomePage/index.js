import React from 'react';
import CountDownDate from './CountDown/CountDownDate'
import { BackgroundImg } from './style'

const HomePage = () => {
    return (
        <div>
            <BackgroundImg/>
            <CountDownDate>
            </CountDownDate>
        </div>
    );
};

export default HomePage;