import React, {useEffect, useState} from 'react';
import SaleList from "./SaleList";

function getSales(shopId) {
    return [
        {
            id: 1,
            name: `shop ${shopId} sale 1`,
            images: [
                `/sales/${shopId}/1/1.jpg`,
                `/sales/${shopId}/1/2.jpg`,
                `/sales/${shopId}/1/3.jpg`,
                `/sales/${shopId}/1/4.jpg`
            ],
            oldPrice: 18500,
            newPrice: 18500-18500*10/100,
            salePercent: 10
        },
        {
            id: 2,
            name: `shop ${shopId} sale 2`,
            images: [
                `/sales/${shopId}/2/1.jpg`,
                `/sales/${shopId}/2/2.jpg`,
                `/sales/${shopId}/2/3.jpg`,
                `/sales/${shopId}/2/4.jpg`
            ],
            oldPrice: 40000,
            newPrice: 40000-40000*5/100,
            salePercent: 5
        },
        {
            id: 3,
            name: `shop ${shopId} sale 3`,
            images: [
                `/sales/${shopId}/3/1.jpg`,
                `/sales/${shopId}/3/2.jpg`,
                `/sales/${shopId}/3/3.jpg`,
                `/sales/${shopId}/3/4.jpg`
            ],
            oldPrice: 25000,
            newPrice: 25000-25000*50/100,
            salePercent: 50
        },
        {
            id: 3,
            name: `shop ${shopId} sale 3`,
            images: [
                `/sales/${shopId}/4/1.jpg`,
                `/sales/${shopId}/4/2.jpg`,
                `/sales/${shopId}/4/3.jpg`,
                `/sales/${shopId}/4/4.jpg`
            ],
            oldPrice: 30000,
            newPrice: 30000-30000*80/100,
            salePercent: 80
        },
        // {
        //     id: 4,
        //     name: `shop ${shopId} sale 4`,
        //     img: sale4,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // },
        // {
        //     id: 5,
        //     name: `shop ${shopId} sale 5`,
        //     img: sale5,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // },
        // {
        //     id: 6,
        //     name: `shop ${shopId} sale 6`,
        //     img: sale6,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // },
        // {
        //     id: 7,
        //     name: `shop ${shopId} sale 7`,
        //     img: sale7,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // },
        // {
        //     id: 8,
        //     name: `shop ${shopId} sale 8`,
        //     img: sale8,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // },
        // {
        //     id: 9,
        //     name: `shop ${shopId} sale 9`,
        //     img: sale9,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // },
        // {
        //     id: 10,
        //     name: `shop ${shopId} sale 10`,
        //     img: sale10,
        //     oldPrice: 15000,
        //     newPrice: 13000,
        //     salePercent: 10
        // }
    ];
}

function newPrice(oldPrice, salePercent){
    return oldPrice - oldPrice*salePercent/100;
}


export function Shop(props) {
    const [sales, setSales] = useState(null);

    useEffect(() => {
        const sales = getSales(props.id, props.count);
        setSales(sales);
    }, [props.id]);

    return sales && (
        <div className="container">
            <SaleList sales={sales}/>
        </div>
    )
}
