import styled from 'styled-components'
import notFound from './../../Assets/404.jpg'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    text-align: center;
    align-items: center;
    min-height: 80vh;
`;

export const NotFoundImg = styled.div`
    background: url(${notFound}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 400px;
    height: 220px;
    @media only screen and (min-width: 960px) {
        height: 1300px;
    }
`;

export const ReturnButton = styled.button`
    width: 200px;
    height: 30px;
    font-size: 21px;
    font-weight: bold;
    background-color: #cea086;
    border-radius: 12px
`;