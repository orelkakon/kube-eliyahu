import styled from 'styled-components'
import cartLogo from './../../Assets/cartIcon.png'

export const Count = styled.div`
    width: 10px;
    height: 10px;
    font-size: 18px;
    font-weight: bold;
`;

export const Icon = styled.button`
    position: fixed;
    background: url(${cartLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border: none;
    width: 90px;
    height: 90px;
    bottom: 30px;
    left: 10px;
    z-index: 10;
    cursor: pointer;
    &:hover{
        transform: scale(0.8);
        transition-duration: 1s; 
    }
`;