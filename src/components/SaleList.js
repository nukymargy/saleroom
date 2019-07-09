import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {Sale} from "./Sale";
import SaleModal from "./SaleModal";

function SaleList(props) {
    const {sales, match, history} = props;
    const [sale, setSale] = useState(null);

    useEffect(() => {
        const selectedSale = match.params.selectedSaleId !== null ?
            sales.find(sale => sale.id === +match.params.selectedSaleId) :
            null;

        setSale(selectedSale);
    }, [match.params.selectedSaleId]);

    function selectSale(saleId) {
        const url = ['', match.params.selectedShopId, saleId].join('/');
        history.push(url);
    }

    return (
        <>
            <div className="row justify-content-center">
                {sales.map(sale => (
                    <div
                        key={sale.id} className="px-4"
                        onClick={() => selectSale(sale.id)}
                    >
                        <Sale {...sale} />
                    </div>
                ))}
            </div>
            <SaleModal
                selectedSale={sale}
                onCloseSale={() => selectSale(null)}
            />
        </>
    )
}

export default withRouter(SaleList);
