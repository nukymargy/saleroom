import React from "react";
import {Sale} from "./Sale";
import SaleInfo from "./SaleInfo";
import {useState} from "react";


export function SaleList(props) {

    const [modalIsOpen, setModal] = useState(false);
    const [sale, setSale] = useState([]);

    const sales = props.sales;
    const openModal = (sale) =>{ setModal(true); setSale(sale)};
    const closeModal = () => setModal(false);

    return (<>
        <div className="row justify-content-center">
            {sales.map(sale => (
                <div key={sale.id} className="px-4" onClick={()=> openModal(sale)}>
                    <Sale
                        name={sale.name}
                        oldPrice={sale.oldPrice}
                        newPrice={sale.newPrice}
                        salePercent={sale.salePercent}
                    />
                </div>
            ))}

        </div>
            <SaleInfo
                name={sale.name}
                oldPrice={sale.oldPrice}
                newPrice={sale.newPrice}
                salePercent={sale.salePercent}
                img={sale.img}
                isOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </>
    )
}



