import styled from 'styled-components'
import primaryLogo from './../../Assets/primaryLogo.png'


export const FullHeader = styled.div`
    display: flex;
    background-color: #cea086;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100px;
    @media only screen and (min-width: 960px) {
        height: 250px;
    }
`;

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (min-width: 960px) {
        margin-left: 250px;
    }
`;

export const MenuElement = styled.div`
    padding: 5px;
    @media only screen and (min-width: 960px) {
        padding: 25px;
    }
`;

export const PrimaryLogo = styled.div`
    margin-right: 5px;
    background: url(${primaryLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 120px;
    height: 100px;
    border-radius: 20px 20px 20px 20px;
    @media only screen and (min-width: 960px) {
        width: 250px;
        height: 250px;
        border-radius: 200px 200px 200px 200px;
    }
`;