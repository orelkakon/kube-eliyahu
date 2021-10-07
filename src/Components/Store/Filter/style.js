import styled from 'styled-components'

export const FilterDiv = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    direction: rtl;
    height: 25px;
    width: 150px;
    background-color: #97999c;
    border: none;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 25%);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 25%);
    ::placeholder{
        color: #252626;
    }
`;