import React from "react";
import SaleCarousel from "./SaleCarousel";
import styled from 'styled-components'

const SaleName = styled.p`
    color: #605a58;
	font-size: 15px;
	font-weight: bold;
`;

const NewPrice = styled.span`
    font-size: 16px;
	color: #f23c00;
	font-weight: bold;
`;

const OldPrice = styled.del`
    font-size: 12px;
	margin-left: 10px;
	color: #ada8a6;
`;

const Info = styled.p`

    font-size: 14px;
	color: #605a58;
	font-weight: bold;
`;
const SaleColour = styled.span`
 
        font-size: 12px;
	color: #ada8a6;
	font-weight: bold;
 `;

const SizeBox = styled.div`
      display: flex;
        
      div{
        width: 30px;
	    height: 30px;
	    border:1px solid #605a58;
	    margin-right: 5px;
        }
        
 `;

export function SaleInfo(props) {
    console.log(props)
    return (
        <div>
            <div className="row h-100">
                <div className="col-md-8">
                    <SaleCarousel images={props.images}/>
                </div>
                <div className="col-md-4 mt-5">
                    <SaleName>House Of Hounds Osprey tassel <br/> loafers in brown croc </SaleName>

                    <NewPrice>{props.newPrice}Դ</NewPrice>
                    <OldPrice>{props.oldPrice}Դ</OldPrice>

                    <Info>COLOUR : <SaleColour> Brown</SaleColour></Info>
                    <Info>SIZE :</Info>
                    <SizeBox>
                        <div className="box text-center font-weight-bold">S</div>
                        <div className="box text-center font-weight-bold">M</div>
                        <div className="box text-center font-weight-bold">L</div>
                    </SizeBox>
                </div>
            </div>
        </div>
    )
}
