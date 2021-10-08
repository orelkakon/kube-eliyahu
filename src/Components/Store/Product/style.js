import styled from 'styled-components'

export const ProductDiv = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 340px;
    width: 180px;
    margin: 10px;
`;

export const ProductImg = styled.img`
    width: 180px;
    height: 170px;
`;

export const ProductDetails = styled.p`
    font-size: medium;
`;

export const AddToCartButton = styled.button`
    position: absolute;
    bottom: 0;
    width: 120px;
    height: 25px;
    background-color: #cea086;
    border-radius: 5px;
    font-weight: bold;
    font-size: medium;
`;