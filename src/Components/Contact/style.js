import styled from 'styled-components'
import background from './../../Assets/contact_background.png'

export const BackgroundImg = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background: url(${background}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100vh;
    @media only screen and (min-width: 960px) {
        height: 1300px;
    }
`;

export const ContactDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;