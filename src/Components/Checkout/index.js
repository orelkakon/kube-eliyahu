import React from 'react';
import { CheckoutDiv, CheckoutForm, InputTitle, InputTextBox, SingleInput } from './style'
import { TITLE, NAME, LAST_NAME, CITY, ADRESS, STREET, STREET_NUM, APPARTMENT_NUM, POLICY, PHONE, EMAIL, OPTIONAL_DATA } from './hebrew'

const Checkout = () => {
    const todayDate = `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`
    return (
        <CheckoutDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <CheckoutForm>
                <label>{todayDate}</label>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{NAME}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{LAST_NAME}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{CITY}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{ADRESS}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{STREET}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{STREET_NUM}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{APPARTMENT_NUM}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{PHONE}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{EMAIL}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox></InputTextBox>
                    <InputTitle>{OPTIONAL_DATA}</InputTitle>
                </SingleInput>
                <br />
            </CheckoutForm>
            <br />
        </CheckoutDiv>
    );
};

export default Checkout;