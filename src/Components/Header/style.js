import styled from 'styled-components'
import primaryLogo from './../../Assets/primaryLogoTiny.png'
import HamburgerLogo from './../../Assets/hamburger.png'

export const FullHeader = styled.div`
    display: flex;
    background-color: #cea086;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 105px;
    top:0;
    position: fixed;
    z-index:10;
    @media only screen and (min-width: 960px) {
        height: 200px;
    }
`;

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    @media only screen and (min-width: 960px) {
        margin-right: 30px;
        margin-left: 100px;
    }
`;

export const MenuElement = styled.div`
`;

export const PrimaryLogo = styled.button`
    position: relative;
    border:none;
    cursor: pointer;
    background: url(${primaryLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100px;
    height: 100px;
    @media only screen and (min-width: 960px) {
        width: 190px;
        height: 190px;
    }
`;

export const Hamburger = styled.button`
    position: absolute;
    left: 0;
    border:none;
    margin-left: 5px;
    background: url(${HamburgerLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 70px;
    height: 70px;
    @media only screen and (min-width: 960px) {
        width: 190px;
        height: 190px;
    }
`;