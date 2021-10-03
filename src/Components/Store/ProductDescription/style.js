import styled from 'styled-components'

export const ProductDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
`;

export const ProductImg = styled.img`
    width: 300px;
    height: 260px;
`;

export const ProductDetails = styled.p`
    font-size: large;
    color: black;
`;


export const AddToCartButton = styled.button`
    width: 120px;
    height: 30px;
    background-color: #cea086;
    border-radius: 5px;
    font-weight: bold;
    font-size: medium;
`;