import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {Sale} from "./Sale";
import SaleModal from "./SaleModal";

function SaleList(props) {
    const {sales, match, history} = props;

    // const selectedSaleParam = match.params.selectedSaleId;
    //
    // useEffect(() => {
    //     match.params.selectedSaleId = 5
    // }, []);

    // console.log(selectedSaleParam);

    const [sale, setSale] = useState(null);

    // useEffect(() => {
    //     history.push(`/${selectedShopId}`);
    // }, [selectedShopId]);

    return (
        <>
            <div className="row justify-content-center">
                {sales.map(sale => (
                    <div key={sale.id} className="px-4" onClick={() => setSale(sale)}>
                        <Sale {...sale}/>
                    </div>
                ))}
            </div>
            <SaleModal
                selectedSale={sale}
                onCloseSale={() => setSale(null)}
            />
        </>
    )
}

export default withRouter(SaleList);
