import React, { useState } from 'react';
import { CheckoutDiv, CheckoutForm, InputTitle, InputTextBox, SingleInput, Required, Policy, CheckboxPolicy, SendInvitation } from './style'
import { TITLE, NAME, LAST_NAME, CITY, ADRESS, STREET, STREET_NUM, APPARTMENT_NUM, NONE, PHONE, EMAIL, SEND, OPTIONAL_DATA } from './hebrew'
import SummaryCart from './SummaryCart/index'
import Payment from './Payment/index'

const Checkout = () => {
    const todayDate = `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [street, setStreet] = useState("")
    const [streetNum, setStreetNum] = useState("")
    const [appartmentNum, setAppartmentNum] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [optionalData, setOptionalData] = useState("")
    const [policy, setPolicy] = useState(false)
    return (
        <CheckoutDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <CheckoutForm>
                <label style={{ fontSize: "30px" }}>{todayDate}</label>
                <SingleInput>
                    <InputTextBox onChange={e => setFirstName(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{NAME}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setLastName(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{LAST_NAME}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setCity(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{CITY}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setAddress(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{ADRESS}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setStreet(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{STREET}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setStreetNum(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{STREET_NUM}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setAppartmentNum(e.target.value)} placeholder={NONE}></InputTextBox>
                    <InputTitle>{APPARTMENT_NUM}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setPhone(e.target.value)}></InputTextBox>
                    <InputTitle><Required>*</Required>{PHONE}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setEmail(e.target.value)}></InputTextBox>
                    <InputTitle>{EMAIL}</InputTitle>
                </SingleInput>
                <SingleInput>
                    <InputTextBox onChange={e => setOptionalData(e.target.value)} placeholder={NONE}></InputTextBox>
                    <InputTitle>{OPTIONAL_DATA}</InputTitle>
                </SingleInput>
                <br /><br />
                <SummaryCart />
                <br /><br />
                <Payment /> {/* outsorce component*/}
                <CheckboxPolicy>
                    <Required>*</Required>
                    <p>קראתי את <a href="/policy" target="_blank" rel="noreferrer">תנאי השימוש</a> ואני מסכים</p>
                    <Policy type="checkbox" onClick={() => setPolicy(!policy)} />
                </CheckboxPolicy>
                <br /><br />
                <SendInvitation>{SEND}</SendInvitation>
                <br /><br />

            </CheckoutForm>
            <br />
        </CheckoutDiv>
    );
};

export default Checkout;