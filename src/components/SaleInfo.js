import React from "react";
import Modal from 'react-modal';
import {withRouter} from "react-router-dom";
import {SaleCarousel} from "./SaleCarousel";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

class SaleInfo extends React.Component {
    constructor(props) {
        super(props);

        this.afterOpenModal = this.afterOpenModal.bind(this);

    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    render() {
        console.log(this.props);

        return (

                <Modal
                    isOpen={this.props.isOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={this.props.closeModal} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h2 ref={subtitle => this.subtitle = subtitle} className="text-center">{this.props.name}</h2>
                    <div className="row">
                    <SaleCarousel/>
                    <p className="">{this.props.oldPrice}</p>
                    </div>


                </Modal>


        )
    }
}

export default withRouter(SaleInfo);
