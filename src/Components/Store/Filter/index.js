import React from 'react';
import { FilterDiv } from './style'

const Filter = (props) => {
    return (
        <FilterDiv placeholder="חפש כאן..." onChange={e => props.setFilterString(e.target.value)}/>
    );
};

export default Filter;