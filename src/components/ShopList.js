// import 'pure-react-carousel/dist/react-carousel.es.css';
import React from "react";
import {Carousel} from "./Carousel";
import {Shop} from "./Shop";
import logos from '../assets/shopLogos'

const shopList = [
    {id: 1, name: 'Shop 1'},
    {id: 2, name: 'Shop 2'},
    {id: 3, name: 'Shop 3'},
    {id: 4, name: 'Shop 4'},
    {id: 5, name: 'Shop 5'},
    {id: 6, name: 'Shop 6'},
    {id: 7, name: 'Shop 7'},
    {id: 8, name: 'Shop 8'},
    {id: 9, name: 'Shop 9'},
    {id: 10, name: 'Shop 10'}
];

shopList.forEach(shop => shop.logo = logos[shop.id]);

export class ShopList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };

        this.handleSelectedIndexChange = this.handleSelectedIndexChange.bind(this);
    }

    handleSelectedIndexChange(index) {
        this.setState({selectedIndex: index})
    }

    render() {
        return (
            <div>
                <Carousel
                    shops={shopList}
                    selectedIndex={this.state.selectedIndex}
                    onSelectedIndexChange={this.handleSelectedIndexChange}/>
                <Shop id={shopList[this.state.selectedIndex].id}/>
            </div>
        );
    }
}

