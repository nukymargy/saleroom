import React from "react";
import styled from 'styled-components'

const ThumbImg = styled.img`
    height: 200px;
    width: 150px
`;

export class Sale extends React.Component {


    render() {
        return (
            <div>
                <ThumbImg className="img-thumbnail" src={this.props.img}/>
                <p>{this.props.name} <span style={{color: 'red'}}>{this.props.salePercent}%</span></p>
                <del>{this.props.oldPrice}</del>
                <p>{this.props.newPrice}</p>
            </div>
        )
    }
}
