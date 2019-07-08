import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SaleCarousel({images}) {
    return (
        <div className="container sale-carousel">
            <Slider
                dots={true}
                dotsClass="slick-dots slick-thumb"
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                customPaging={(i) => (
                    <a>
                        <img src={images[i]}/>
                    </a>
                )}
            >
                {images.map((src, index) => (
                    <div key={index}>
                        <img className="mx-auto" src={src} style={{height: '60vh'}}/>
                    </div>
                ))}
            </Slider>
        </div>
    )

}

const withContainerHeight = Component => props => {
    const [height, setHeight] = useState(0);

    return (
        <div style={{height: '100%'}} ref={container => container && setHeight(container.offsetHeight)}>
            {height && <Component {...props} containerHeight={height}/>}
        </div>
    )
};

export default SaleCarousel;
