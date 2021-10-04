import styled from 'styled-components'

export const ProductDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 320px;
    width: 180px;
    margin: 5px;
`;

export const ProductImg = styled.img`
    width: 180px;
    height: 170px;
    &:hover{
        transform: scale(1.25);
    }
`;

export const ProductDetails = styled.p`
    font-size: medium;
`;

export const AddToCartButton = styled.button`
    width: 120px;
    height: 25px;
    background-color: #cea086;
    border-radius: 5px;
    font-weight: bold;
    font-size: medium;
`;