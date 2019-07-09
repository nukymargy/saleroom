import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {Carousel} from "./Carousel";
import {Shop} from "./Shop";

// function useRouterState(paramKey, routerProps, initialValue) {
//     const paramValue = routerProps.match.params[paramKey];
//     const initialShopId = paramValue !== null ? paramValue : initialValue;
//
//     const [selectedShopId, setSelectedShopId] = useState();
//
//     function navigate(newValue) {
//         routerProps.history.push(`/${newValue}`);
//     }
//
//     useEffect(() => {
//
//     }, [])
//
//     function getValue() {
//         if (paramValue != null) {
//             return paramValue;
//         }
//         if (initialValue == null) {
//             return initialValue;
//         }
//         navigate(initialValue);
//         return initialValue;
//     }
//
//     return [getValue(), navigate];
// }

function ShopList(props) {
    const {shops, match, history} = props;

    const selectedShopParam = match.params.selectedShopId;
    const initialShopId = selectedShopParam != null ? +selectedShopParam : shops[0].id;

    const [selectedShopId, setSelectedShopId] = useState(initialShopId);

    useEffect(() => {
        if (+match.params.selectedShopId !== selectedShopId) {
            history.push(`/${selectedShopId}`);
        }
    }, [selectedShopId]);

    function handleSelectedIndexChange(index) {
        const selectedShopId = shops[index].id;
        setSelectedShopId(`${selectedShopId}`);
    }

    const selectedIndex = shops.findIndex(shop => shop.id === selectedShopId);

    return (
        <div>
            <Carousel
                shops={shops}
                selectedIndex={selectedIndex}
                onSelectedIndexChange={handleSelectedIndexChange}
            />

            <Shop id={selectedShopId}/>

        </div>
    );

}

export default withRouter(ShopList);
