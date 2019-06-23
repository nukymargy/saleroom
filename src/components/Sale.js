import React from "react";
import styled from 'styled-components'

export const Img = styled.div`
    width: 200px;
    height: 300px;
    border: 2px solid #f23c00;
    position: relative;
    margin-top: 15px;
`;

const Off = styled.div`
    position: absolute;
    right: 0px;
    line-height: 0;
    text-align: center;
    color: white;
    width: 50px;
    height: 50px;
    background-color: #f23c00;
    font-weight: bold;
    font-size: 18px;
`;

export const Price = styled.p`
    font-weight: bold;
    font-size: 13px;
`;

export const NewPrice = styled(Price)`
    font-size: 16px;
    color: #f23c00;
`;

export const SaleName = styled.p`
    margin-top: 10px;
    color: #605a58;
    font-size: 12px;
`;

export class Sale extends React.Component {
    render() {
        return (
            <div>
                <Img>
                    <Off>
                        <p className="mt-3">{this.props.salePercent}%</p>
                        <p>OFF</p>
                    </Off>
                </Img>
                <div style={{lineHeight: '5px'}}>
                    <SaleName>{this.props.name}</SaleName>
                    <Price>{this.props.oldPrice}֏</Price>
                    <NewPrice>NOW {this.props.newPrice}֏</NewPrice>
                </div>
            </div>
        )
    }
}
