import React, { useEffect, useState } from 'react';
import CountDownDate from './CountDown/CountDownDate'
import { BackgroundImg, Info, FullHome, VideoOfMe } from './style'
import axios from 'axios'
import Gallery from './Gallery/index'
import config from './../../config.json'
import homeVid from './../../Assets/homepage.mp4'

const getHomePageData = async (setSpecialFreeText, setOrderTime, setInfoFreeText, setImages, setGalleryText) => {
    const homePageData = await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.basicData}`
    })
    setInfoFreeText(homePageData.data.info)
    setSpecialFreeText(homePageData.data.homepage_free_text)
    setOrderTime(homePageData.data.order_time)
    setImages(homePageData.data.homepage_images)
    setGalleryText(homePageData.data.gallery_text)
    return
}

const HomePage = () => {
    const [infoFreeText, setInfoFreeText] = useState("")
    const [galleryText, setGalleryText] = useState("")
    const [specialFreeText, setSpecialFreeText] = useState("")
    const [orderTime, setOrderTime] = useState("")
    const [images, setImages] = useState([])
    useEffect(() => {
        getHomePageData(setSpecialFreeText, setOrderTime, setInfoFreeText, setImages, setGalleryText)
    }, [])
    return (
        <FullHome>
            <Info>
                {infoFreeText}
            </Info>
            <CountDownDate specialFreeText={specialFreeText} orderTime={orderTime}>
            </CountDownDate>

            <VideoOfMe src={homeVid} playsinline autoplay muted loop controls />
            <br />
            <br />
            <Gallery images={images} galleryText={galleryText}/>
            <br />
        </FullHome>
    );
};

export default HomePage;