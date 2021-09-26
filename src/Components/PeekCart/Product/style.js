import styled from 'styled-components'
import deleteLogo from './../../../Assets/delete.png'

export const ProductDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    border-bottom: 2px solid black;
    padding: 10px;
    align-items: flex-start;
`;

export const ProductContent = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    word-wrap: break-word;
    width: 100px;
`;

export const ProductImg = styled.img`
    height: 200px; 
    width: 150px;
`;

export const DeleteButton = styled.button`
    border: none;
    cursor: pointer;
    background: url(${deleteLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 20px;
    height: 20px;
`;