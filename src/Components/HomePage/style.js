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