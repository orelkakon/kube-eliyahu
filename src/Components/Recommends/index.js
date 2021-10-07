import React, { useState, useEffect } from 'react';
import { RecommenedsDiv } from './style'
import { TITLE } from './hebrew'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'
import { Carousel } from 'react-responsive-carousel';
import R1 from './../../Assets/r1.png'
import R2 from './../../Assets/r2.png'
import R3 from './../../Assets/r3.png'
import R4 from './../../Assets/r4.png'
import R5 from './../../Assets/r5.png'
import R6 from './../../Assets/r6.png'
import axios from 'axios'
import config from './../../config.json'

const getRecommendsData = async (setSpecialFreeText) => {
    const free_text = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.basicData}`
    })
    setSpecialFreeText(free_text.data.recommends_free_text)
    return
}

const Recommeneds = () => {
    const [specialFreeText, setSpecialFreeText] = useState("")
    useEffect(() => {
        getRecommendsData(setSpecialFreeText)
    }, [])
    return (
        <RecommenedsDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{specialFreeText}</p>
            <Carousel className="carousel">
                <div>
                    <img src={R1} alt="recommend img" />
                </div>
                <div>
                    <img src={R2} alt="recommend img" />
                </div>
                <div>
                    <img src={R3} alt="recommend img" />
                </div>
                <div>
                    <img src={R4} alt="recommend img" />
                </div>
                <div>
                    <img src={R5} alt="recommend img" />
                </div>
                <div>
                    <img src={R6} alt="recommend img" />
                </div>
            </Carousel>
            <br />
        </RecommenedsDiv>
    );
};

export default Recommeneds;