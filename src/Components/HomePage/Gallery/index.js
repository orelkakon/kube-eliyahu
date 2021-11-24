import React from 'react';
import { FullDiv, ImageGallery } from './style'
import config from './../../../config.json'

const Gallery = ({images, galleryText}) => {
    return (
        <FullDiv>
            <p style={{fontSize: '30px', fontWeight:'bold'}}>
                {galleryText}
            </p>
            {
                images && images.map(image => {
                    return (
                        <ImageGallery src={`${config.protocol}://${config.host}:${config.port}${image.url}`} alt={image.name} />
                    )
                })
            }
        </FullDiv>
    );
};

export default Gallery;