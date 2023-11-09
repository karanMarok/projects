import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const images = [
    "https://t4.ftcdn.net/jpg/03/50/71/03/240_F_350710311_4kcu7tmZIHnJOe57pU0HLpRiqlx8zQlt.jpg",
    "https://t4.ftcdn.net/jpg/01/29/74/69/240_F_129746900_qTK0cQTgktIZnm6rVEgtT9NlIn9fnMTT.jpg",
    "https://t3.ftcdn.net/jpg/05/86/87/44/240_F_586874415_41MZIOioSavMXvRU0U8oTPBv4KLMYLaR.jpg",
    "https://t4.ftcdn.net/jpg/03/04/28/51/240_F_304285110_5QIfRBCL3iDjB8sQiCiAu2MLLYS9auMW.jpg"
]

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="slider" style={{ height: "100%", marginBottom: "5%", backgroundColor: "#F1EEEA" }}>
                <Slider {...settings}>
                    {images.map((item) => {
                        return (
                            <div className="d-flex justify-content-center">
                                <img src={item}/>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Carousel;