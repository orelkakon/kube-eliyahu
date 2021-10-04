import React, { useState } from 'react';
import { CheckoutDiv, CheckoutForm, InputTitle, InputTextBox, SingleInput, Required, Policy, CheckboxPolicy, SendInvitation } from './style'
import { EMPTY_CONTENT, ERROR_POLICY, ERROR_ADDRESS, ERROR_PHONE, TITLE, SEC_TITLE, NAME, LAST_NAME, CITY, ADRESS, APPARTMENT_NUM, NONE, PHONE, EMAIL, SEND, OPTIONAL_DATA } from './hebrew'
import SummaryCart from './SummaryCart/index'
import Payment from './Payment/index'
import { notifyWarn } from './../../App';


const Checkout = () => {
    const todayDate = `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`
    const [firstName, setFirstName] = useState("") 
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [appartmentNum, setAppartmentNum] = useState("")
    const [phone, setPhone] = useState("") 
    const [email, setEmail] = useState("")
    const [optionalData, setOptionalData] = useState("")
    const [policy, setPolicy] = useState(false)

    const checkFields = () => {
        if(firstName.length === 0 || lastName.length === 0 || city.length === 0){
            notifyWarn(EMPTY_CONTENT)
            return false
        }
        else if(address.length === 0 || !/\d/.test(address)){
            notifyWarn(ERROR_ADDRESS)
            return false
        }
        else if(phone.length !== 10 || !/^\d+$/.test(phone)){
            notifyWarn(ERROR_PHONE)
            return false
        }
        else if(!policy){
            notifyWarn(ERROR_POLICY)
            return false
        }
        return true
    }
    return (
        <CheckoutDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>{SEC_TITLE}</p>
            <CheckoutForm>
                <label style={{ fontSize: "30px", fontWeight: "bold"}}>{todayDate}</label>
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
                <Payment firstName={firstName} lastName={lastName} city={city} address={address} appartmentNum={appartmentNum} phone={phone} email={email} optionalData={optionalData}/> {/* outsorce component*/}
                <CheckboxPolicy>
                    <Required>*</Required>
                    <p>קראתי את <a href="/policy" target="_blank" rel="noreferrer">תנאי השימוש</a> ואני מסכים</p>
                    <Policy type="checkbox" onClick={() => setPolicy(!policy)} />
                </CheckboxPolicy>
                <br /><br />
                <SendInvitation onClick={() => checkFields() && alert('V')}>{SEND}</SendInvitation>
                <br /><br />

            </CheckoutForm>
            <br />
        </CheckoutDiv>
    );
};

export default Checkout;