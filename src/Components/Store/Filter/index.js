import React from 'react';
import { FilterDiv } from './style'
import { FIND_PRODUCT } from './../hebrew'

const Filter = (props) => {
    return (
        <>
            <FilterDiv placeholder={FIND_PRODUCT} onChange={e => props.setFilterString(e.target.value)} />
        </>
    );
};

export default Filter;