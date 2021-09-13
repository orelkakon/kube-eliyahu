import styled from 'styled-components'
import WhatsappIcon from '.';
import whatsappLogo from './../../Assets/whatsappLogo.png'

export const Icon = styled.a`
    position: fixed;
    background: url(${whatsappLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border: none;
    width: 70px;
    height: 70px;
    bottom: 30px;
    right: 15px;
    z-index: 10;
    cursor: pointer;
`;