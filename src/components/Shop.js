import React, {useEffect, useState} from 'react';
import sale1 from "../assets/saleImages/s1.jpg";
import sale10 from "../assets/saleImages/s10.jpg";
import sale2 from "../assets/saleImages/s2.jpg";
import sale3 from "../assets/saleImages/s3.jpg";
import sale4 from "../assets/saleImages/s4.jpg";
import sale5 from "../assets/saleImages/s5.jpg";
import sale6 from "../assets/saleImages/s6.jpg";
import sale7 from "../assets/saleImages/s7.jpg";
import sale8 from "../assets/saleImages/s8.jpg";
import sale9 from "../assets/saleImages/s9.jpg";
import {SaleList} from "./SaleList";

const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
};

function getSales(shopId) {
    return [
        {id: 1, name: `shop ${shopId} sale 1`, img: sale1, oldPrice: 15000, newPrice: 10000, salePercent: 10},
        {
            id: 2,
            name: `shop ${shopId} sale 2`,
            img: sale2,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 3,
            name: `shop ${shopId} sale 3`,
            img: sale3,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 4,
            name: `shop ${shopId} sale 4`,
            img: sale4,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 5,
            name: `shop ${shopId} sale 5`,
            img: sale5,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 6,
            name: `shop ${shopId} sale 6`,
            img: sale6,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 7,
            name: `shop ${shopId} sale 7`,
            img: sale7,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 8,
            name: `shop ${shopId} sale 8`,
            img: sale8,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 9,
            name: `shop ${shopId} sale 9`,
            img: sale9,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        },
        {
            id: 10,
            name: `shop ${shopId} sale 10`,
            img: sale10,
            oldPrice: 'Old price',
            newPrice: 'New price',
            salePercent: 10
        }
    ];
}

export function Shop(props) {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const sales = getSales(props.id);
        setSales(sales);
    }, [props.id]);

    return (
        <div className="container">
            <h1 className="mb-5">{props.id}</h1>
            <SaleList sales={sales}/>
        </div>
    )
}
