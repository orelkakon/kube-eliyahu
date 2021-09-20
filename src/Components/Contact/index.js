import React from 'react';
import { ContactDiv } from './style'
import { TITLE, SEC_TITLE } from './hebrew'
import instaLogo from './../../Assets/instaLogo.jpg'
import facebookLogo from './../../Assets/facebookLogo.png'
import mailLogo from './../../Assets/mailLogo.png'
import phoneLogo from './../../Assets/phoneLogo.png'
import './style.css'

const Contact = () => {
    return (
        <ContactDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <h3>{SEC_TITLE}</h3>
            <br />
            <br />
            <a href="https://www.instagram.com/kube_eliyahu/" target="_blank" rel="noreferrer"> <img className="aa" src={instaLogo} alt="instaLogo" height="100px" width="100px" /></a>
            <a href="https://www.facebook.com/profile.php?id=100067058032269" style={{paddingTop:"5px"}}  target="_blank" rel="noreferrer"> <img className="aa" src={facebookLogo} alt="facebook" height="100px" width="100px" /></a>
            <a href="mailto:kubeeliyahu@gmail.com" style={{paddingTop:"5px"}}> <img className="aa" src={mailLogo} alt="phoneLogo" height="100px" width="100px" /></a>
            <a href="tel:+972509913750"> <img className="aa" src={phoneLogo} alt="phoneLogo" height="115px" width="115px" /></a>
            <br />
        </ContactDiv>
    );
};

export default Contact;