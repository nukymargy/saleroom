import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import {withRouter} from "react-router-dom";
import {SaleCarousel} from "./SaleCarousel";
import {SaleInfo} from "./SaleInfo";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '90%'
    }
};

Modal.setAppElement('#root');

function SaleModal(props) {
    const {selectedSale, onCloseSale} = props;

    return (
        <Modal
            isOpen={selectedSale != null}
            onRequestClose={onCloseSale}
            style={customStyles}
        >
            {selectedSale && (
                <>
                    <button onClick={onCloseSale} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <SaleInfo {...selectedSale} />
                </>
            )}
        </Modal>


    )

}

export default withRouter(SaleModal);
