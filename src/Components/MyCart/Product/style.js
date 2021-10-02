import styled from 'styled-components'
import deleteLogo from './../../../Assets/delete.png'

export const ProductDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    border-bottom: ${props => props.addBreakLine && '2px solid black'};
    padding: 10px;
    align-items: flex-start;
`;

export const ProductContent = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
`;

export const ProductImg = styled.img`
    height: 220px; 
    width: 180px;
`;

export const DeleteButton = styled.button`
    border: none;
    cursor: pointer;
    background: url(${deleteLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 30px;
    height: 30px;
`;  

export const SumInput = styled.input`
    text-align: center;
    width: 45px;
    height: 30px;
    border: 3px solid black;
    font-size: medium;
`;