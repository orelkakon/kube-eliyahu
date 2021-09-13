import React from 'react';
import { CountCube, CountCubes } from './style'
import { DAYS, HOURS, MINUTES, SECONDES } from './hebrew'

const Counter = (props) => {
    return (
        <CountCubes>
            <CountCube>
                {props.days}
                <br />
                {DAYS}
            </CountCube>
            <CountCube>
                {props.hours}
                <br />
                {HOURS}
            </CountCube>
            <CountCube>
                {props.minutes}
                <br />
                {MINUTES}
            </CountCube>
            <CountCube>
                {props.seconds}
                <br />
                {SECONDES}
            </CountCube>
        </CountCubes>
    );
};

export default Counter;