import React from "react";
import {SaleCarousel} from "./SaleCarousel";

export function SaleInfo(props) {
    return (
        <div>
            <h2 className="text-center">{props.name}</h2>
            <div className="row">
                <SaleCarousel/>
                <p className="">{props.oldPrice}</p>
            </div>
        </div>
    )
}
