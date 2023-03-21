import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const images = [
        "https://i.postimg.cc/pL5LjhYg/FRF-4339-1.webp",
        "https://i.postimg.cc/k5rXvJTD/IMG-0753.webp",
        "https://i.postimg.cc/VNjs7xhg/IMG-3147.webp",
    ];

    return (
        <Zoom scale={1.4} indicators={false} autoplay={false}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%", height: "auto", display: "flex"}}>
                    <img style={{ objectFit: "cover", width: "100%", display: "flex" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
};

export default Slider;