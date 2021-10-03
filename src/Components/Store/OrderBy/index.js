import React from 'react';
import { NORMAL_ORDER, CHEAP_ORDER, EXPENSIVE_ORDER } from './../hebrew'
import { Select } from './style'

const SelectOrderBy = (props) => {
    return (
        <div>
            <Select onChange={(e) => props.orderResultsBy(e.target.value)}>
                <option value={NORMAL_ORDER}>{NORMAL_ORDER}</option>
                <option value={CHEAP_ORDER}>{CHEAP_ORDER}</option>
                <option value={EXPENSIVE_ORDER}>{EXPENSIVE_ORDER}</option>
            </Select>
        </div>
    );
};

export default SelectOrderBy;