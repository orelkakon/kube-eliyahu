import React, { useState, useEffect } from 'react';
import { RecommenedsDiv } from './style'
import { TITLE } from './hebrew'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import config from './../../config.json'

const getRecommendsData = async (setSpecialFreeText, setImages) => {
    const free_text = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.basicData}`
    })
    setSpecialFreeText(free_text.data.recommends_free_text)
    setImages(free_text.data.recommends_images)
    return
}

const Recommeneds = () => {
    const [specialFreeText, setSpecialFreeText] = useState("")
    const [images, setImages] = useState("")
    useEffect(() => {
        getRecommendsData(setSpecialFreeText, setImages)
    }, [])
    return (
        <RecommenedsDiv>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{TITLE}</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{specialFreeText}</p>
            <Carousel className="carousel">
                {
                    images && images.map(image => {
                        return (
                            <div>
                                <img src={`${config.protocol}://${config.host}:${config.port}${image.url}`} alt={image.name} />
                            </div>
                        )
                    })
                }
            </Carousel>
            <br />
        </RecommenedsDiv>
    );
};

export default Recommeneds;