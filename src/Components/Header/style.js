import styled from 'styled-components'
import primaryLogo from './../../Assets/primaryLogo.png'


export const FullHeader = styled.div`
    display: flex;
    background-color: #767c85;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100px;
    @media only screen and (min-width: 960px) {
        height: 200px;
    }
`;

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (min-width: 960px) {
        margin-right: 30px;
        margin-left: 100px;
    }
`;

export const MenuElement = styled.div`
    padding: 5px;
    @media only screen and (min-width: 960px) {
        padding: 25px;
    }
`;

export const PrimaryLogo = styled.a`
    margin-right: 5px;
    background: url(${primaryLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 125px;
    height: 95px;
    border-radius: 200px 200px 200px 200px;
    @media only screen and (min-width: 960px) {
        width: 190px;
        height: 190px;
    }
`;