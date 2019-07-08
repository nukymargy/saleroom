import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.div`
    font-family: 'Roboto', sans-serif;
	background-color: #244447;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #E2FCF0;
	font-size: 20px;
	font-family: 'Roboto', sans-serif;
`;

const Icon = styled.div`
    margin-top: 20px;
	cursor: pointer;
	display: flex;
	
	i {
	    display: flex;
	    justify-content: center;
        align-items: center;
	    margin-left: 10px;
        border-radius: 50%;
        border: 1px solid #1e3538;
        width: 44px;
        height: 44px;
        background-color: #1e3538;
        text-align: center;
	}
	
	
`;


export class Footer extends React.Component {
    render() {
        return (
            <FooterContainer className="container-fluid mb-0 mt-5">
                <p style={{fontWeight:" bold"}}>Follow us on</p>
                <Icon>
                    <div>
                        <i className="fab fa-instagram "></i>
                    </div>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </Icon>
            </FooterContainer>
        )
    }
}
