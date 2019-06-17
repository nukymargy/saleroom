import React from "react";
import {Sale} from "./Sale";

export function SaleList(props) {

    const sales = props.sales;

    return (
        <div className="row justify-content-center">
            {sales.map(sale => (
                <div key={sale.id} className="px-4">
                    <Sale
                        img={sale.img}
                        name={sale.name}
                        oldPrice={sale.oldPrice}
                        newPrice={sale.newPrice}
                        salePercent={sale.salePercent}
                    />
                </div>
            ))}
        </div>
    )
}
