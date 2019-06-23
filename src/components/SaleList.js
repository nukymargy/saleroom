import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {Sale} from "./Sale";
import SaleModal from "./SaleModal";

function SaleList(props) {
    const {sales, match, history} = props;

    const selectedSaleParam = match.params.selectedSaleId;
    const [sale, setSale] = useState(null);

    // useEffect(() => {
    //     history.push(`/${selectedShopId}`);
    // }, [selectedShopId]);

    return (
        <>
            <div className="row justify-content-center">
                {sales.map(sale => (
                    <div key={sale.id} className="px-4" onClick={() => setSale(sale)}>
                        <Sale
                            name={sale.name}
                            oldPrice={sale.oldPrice}
                            newPrice={sale.newPrice}
                            salePercent={sale.salePercent}
                        />
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
