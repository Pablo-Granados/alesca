import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const images = [
        "https://i.postimg.cc/4xTpVwNG/Local.avif",
        "https://i.postimg.cc/50kwzVjK/Local-detras.jpg",
        "https://i.postimg.cc/ZnB6FMdb/Local-detras-2.png",
        "https://i.postimg.cc/J7vN4MfG/Local-detras-3.avif"
        

    ];

    return (
        <Zoom scale={1.4} indicators={false} autoplay={true} duration={2500}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%", height: "60vh", display: "flex" }}>
                    <img style={{ objectFit: "cover", width: "100%", display: "flex" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
};

export default Slider;