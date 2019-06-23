import React, {useState, useEffect} from 'react';
import logos from '../assets/shopLogos'
import ShopList from "./ShopList";

const list = [
    {id: 1, name: 'Shop 1', count: 8},
    {id: 2, name: 'Shop 2', count: 1},
    {id: 3, name: 'Shop 3', count: 3},
    {id: 4, name: 'Shop 4', count: 5},
    {id: 5, name: 'Shop 5', count: 8},
    {id: 6, name: 'Shop 6', count: 7},
    {id: 7, name: 'Shop 7', count: 0},
    {id: 8, name: 'Shop 8', count: 6},
    {id: 9, name: 'Shop 9', count: 10},
    {id: 10, name: 'Shop 10', count: 9}
];

const fetchedShops = list
    .filter(shop => shop.count)
    .map(shop => ({...shop, logo: logos[shop.id]}));


export function ShopListContainer() {
    const [shops, setShops] = useState(null);

    useEffect(() => {
        setTimeout(() => setShops(fetchedShops), 200)
    }, []);

    return shops && (
        <ShopList shops={shops}/>
    )
}
