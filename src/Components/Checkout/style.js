import styled from 'styled-components'

export const CheckoutDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
`;

export const CheckoutForm = styled.div`
    width: 80%;
    height: auto;
    border: 2px solid double;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 9px 2px rgba(0, 0, 0, 25%);
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 25%);
`;

export const InputTextBox = styled.input`
    border: none;
    direction: rtl;
    border-radius: 5px;
    padding-right: 5px;
    height: 30px;
    width: 190px;
    font-size: 16px;
    background-color: #97999c;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 25%);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 25%);
    ::placeholder{
        color: #252626;
    }
`;

export const InputTitle = styled.label`
    display: flex;
    font-size: 17px;
    font-weight: 600;
`;

export const Required = styled.div`
    color: red;
    font-size: 20px;
`;

export const SingleInput = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 5px 20px 10px;
`;

export const Policy = styled.input`

`;

export const CheckboxPolicy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const SendInvitation = styled.button`
    width: 200px;
    height: 30px;
    font-size: 21px;
    font-weight: bold;
    background-color: #cea086;
    border-radius: 12px

`;

