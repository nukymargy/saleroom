import React from "react";
import styled from 'styled-components';
import logo from '../assets/logos/logo.png'

const HeaderContainer = styled.div`
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
`;

const Menu = styled.div`
ul {
    list-style: none;
	display: flex;
	cursor: pointer;
	};
li {
	color: #244447;
	font-weight: bold;
	font-size: 18px;
	margin-left: 15px;
	font-family: 'Roboto', sans-serif;
	}
`;


export class Header extends React.Component {
    render() {
        return (
            <HeaderContainer className="container">
                <img src={logo}/>
                <Menu>
                    <ul>

                    </ul>
                </Menu>
            </HeaderContainer>

        )
    }
}
