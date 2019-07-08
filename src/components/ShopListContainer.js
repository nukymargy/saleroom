import React, {useState, useEffect} from 'react';
import ShopList from "./ShopList";

const list = [
    {id: 1, name: 'Adidas', count: 8, logo: '/shop-logos/1.png'},
    {id: 2, name: "Marc O'Polo", count: 1, logo: '/shop-logos/2.jpg'},
    {id: 3, name: 'Hugo Boss', count: 3, logo: '/shop-logos/3.jpg'},
    {id: 4, name: 'River Island', count: 5, logo: '/shop-logos/4.jpg'},
    {id: 5, name: "She's", count: 8, logo: '/shop-logos/5.gif'},
    {id: 6, name: 'H&M', count: 7, logo: '/shop-logos/6.jpg'},
];

const fetchedShops = list.filter(shop => shop.count);


export function ShopListContainer() {
    const [shops, setShops] = useState(null);

    useEffect(() => {
        setTimeout(() => setShops(fetchedShops), 200)
    }, []);

    return shops && (
        <ShopList shops={shops}/>
    )
}
