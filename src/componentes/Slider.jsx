import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const images = [
        "https://i.postimg.cc/SsR1Xvpr/201008-405.webp",
        "https://i.postimg.cc/XqHVfhZY/8f296ac9-a997-4c89-8bc4-c01912cf46eb.webp",
        "https://i.postimg.cc/d0jcRXpc/FRF-3862.webp",
        "https://i.postimg.cc/s2w0gRbx/FRF-4053.webp",
        "https://i.postimg.cc/k5rXvJTD/IMG-0753.webp",

    ];

    return (
        <Zoom scale={1.4} indicators={false} autoplay={false}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%", height: "60vh", display: "flex" }}>
                    <img style={{ objectFit: "cover", width: "100%", display: "flex" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
};

export default Slider;