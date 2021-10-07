import React, { useEffect, useState } from 'react';
import { ContactDiv } from './style'
import { TITLE } from './hebrew'
import instaLogo from './../../Assets/instaLogo.jpg'
import facebookLogo from './../../Assets/facebookLogo.png'
import mailLogo from './../../Assets/mailLogo.png'
import phoneLogo from './../../Assets/phoneLogo.png'
import axios from 'axios'
import config from './../../config.json'
import './style.css'

const getContactData = async (setSpecialFreeText) => {
    const free_text = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.basicData}`
    })
    setSpecialFreeText(free_text.data.contact_free_text)
    return
}

const Contact = () => {
    const [specialFreeText, setSpecialFreeText] = useState("")
    useEffect(() => {
        getContactData(setSpecialFreeText)
    }, [])
    return (
        <ContactDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <h3>{specialFreeText}</h3>
            <br />
            <br />
            <a href="https://www.instagram.com/kube_eliyahu/" target="_blank" rel="noreferrer"> <img className="aa" src={instaLogo} alt="instaLogo" height="100px" width="100px" /></a>
            <a href="https://www.facebook.com/profile.php?id=100067058032269" style={{ paddingTop: "5px" }} target="_blank" rel="noreferrer"> <img className="aa" src={facebookLogo} alt="facebook" height="100px" width="100px" /></a>
            <a href="mailto:kubeeliyahu@gmail.com" style={{ paddingTop: "5px" }}> <img className="aa" src={mailLogo} alt="phoneLogo" height="100px" width="100px" /></a>
            <a href="tel:+972509913750"> <img className="aa" src={phoneLogo} alt="phoneLogo" height="115px" width="115px" /></a>
            <br />
        </ContactDiv>
    );
};

export default Contact;