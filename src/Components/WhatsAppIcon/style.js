import styled from 'styled-components'
import whatsappLogo from './../../Assets/whatsappLogo.png'

export const Icon = styled.a`
    position: fixed;
    background: url(${whatsappLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border: none;
    width: 50px;
    height: 50px;
    bottom: 30px;
    right: 15px;
    z-index: 10;
    cursor: pointer;
    &:hover{
        transform: scale(0.8);
        transition-duration: 1s; 
    }
`;