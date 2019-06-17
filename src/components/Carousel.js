import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const logoStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    margin: '0 auto'
};


export function Carousel(props) {
    const {shops, selectedIndex, onSelectedIndexChange} = props;

    return (
        <div className="container">
            <Slider
                className="center"
                focusOnSelect={true}
                centerMode={true}
                infinite={true}
                centerPadding="60px"
                slidesToShow={7}
                speed={500}
                initialSlide={selectedIndex}
                afterChange={onSelectedIndexChange}
            >
                {shops.map(shop => (
                    <div key={shop.id}>
                        <img className="img-thumbnail" alt="shop logo" style={logoStyle} src={shop.logo}/>
                        <p>{shop.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
