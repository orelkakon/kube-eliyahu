import styled from 'styled-components'
import background1 from './../../Assets/background1.png'

export const BackgroundImg = styled.div`
    background: url(${background1}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 400px;
    @media only screen and (min-width: 960px) {
        height: 1300px;
    }
`;

export const Info = styled.h3`
    direction: rtl;
    border: double 8px black;
    box-shadow: 12px 10px 8px #888888;
    width: 80%;
    font-size: 22px;
    padding: 5px;
`;

export const FullHome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const VideoOfMe = styled.video`
    width: 85%;
    box-shadow: 12px 10px 8px #888888;
`;