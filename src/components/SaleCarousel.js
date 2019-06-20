import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import sale1 from "../assets/saleImages/s3.jpg";
import sale2 from "../assets/saleImages/s4.jpg";
import sale3 from "../assets/saleImages/s5.jpg";
import sale4 from "../assets/saleImages/s6.jpg";

const sales = [sale1, sale2, sale3, sale4];

export function SaleCarousel(props) {

    return (
        <div className="container">
            <Slider
                dots={true}
                dotsClass="slick-dots slick-thumb"
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                adaptiveHeight={true}
                customPaging={(i) => (
                    <a>
                        {/*<img src={sales[i]}/>*/}
                    </a>
                )}
            >
                <div>
                    <img className="mx-auto" src={sale1}/>
                </div>
                <div>
                    <img className="mx-auto" src={sale2}/>
                </div>
                <div>
                    <img className="mx-auto" src={sale3}/>
                </div>
                <div>
                    <img  className="mx-auto" src={sale4}/>
                </div>
            </Slider>
        </div>
    )

}

