import React from 'react';
import { ContactDiv } from './style'
import { TITLE, SEC_TITLE } from './hebrew'
import instaLogo from './../../Assets/instaLogo.png'
import facebookLogo from './../../Assets/facebookLogo.png'
import mailLogo from './../../Assets/mailLogo.png'
import phoneLogo from './../../Assets/phoneLogo.png'

const Contact = () => {
    return (
        <ContactDiv>
            <p style={{ textDecoration: "underline", fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <h3>{SEC_TITLE}</h3>
            <br />
            <br />
            <a href="https://www.instagram.com/kube_eliyahu/" target="_blank" rel="noreferrer"> <img src={instaLogo} alt="instaLogo" height="100px" width="100px" /></a>
            <a href="https://www.facebook.com/profile.php?id=100067058032269" target="_blank" rel="noreferrer"> <img src={facebookLogo} alt="facebook" height="115px" width="115px" /></a>
            <a href="mailto:kubeeliyahu@gmail.com"> <img src={mailLogo} alt="phoneLogo" height="100px" width="100px" /></a>
            <a href="tel:+972509913750" style={{ paddingTop: "8px" }}> <img src={phoneLogo} alt="phoneLogo" height="100px" width="100px" /></a>
            <br />
        </ContactDiv>
    );
};

export default Contact;