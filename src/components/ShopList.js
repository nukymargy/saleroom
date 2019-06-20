import React from "react";
import {withRouter} from "react-router-dom";
import logos from '../assets/shopLogos'
import {Carousel} from "./Carousel";
import {Shop} from "./Shop";

const list = [
    {id: 1, name: 'Shop 1', count: 8},
    {id: 2, name: 'Shop 2', count: 1},
    {id: 3, name: 'Shop 3', count: 3},
    {id: 4, name: 'Shop 4', count: 5},
    {id: 5, name: 'Shop 5', count: 8},
    {id: 6, name: 'Shop 6', count: 7},
    {id: 7, name: 'Shop 7', count: 0},
    {id: 8, name: 'Shop 8', count: 6},
    {id: 9, name: 'Shop 9', count: 10},
    {id: 10, name: 'Shop 10', count: 9}
];

const shops = list
    .filter(shop => shop.count)
    .map(shop => ({...shop, logo: logos[shop.id]}));



class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shops: null};
        this.handleSelectedIndexChange = this.handleSelectedIndexChange.bind(this);
    }

    handleSelectedIndexChange(index) {
        const selectedShopId = shops[index].id;
        this.navigate(selectedShopId);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {shops},
                () => this.initRouting()
            );
        }, 100);
    }

    render() {
        const shops = this.state.shops;
        const selectedShopParam = this.props.match.params.selectedShopId;

        if (!selectedShopParam || !shops) {
            return null;
        }

        const selectedIndex = shops.findIndex(shop => shop.id === +selectedShopParam);

        return (
            <div>
                <Carousel
                    shops={shops}
                    selectedIndex={selectedIndex}
                    onSelectedIndexChange={this.handleSelectedIndexChange}
                />

                <Shop id={+selectedShopParam}/>

            </div>
        );
    }

    navigate(shopId) {
        this.props.history.push(`/${shopId}`);
    }

    initRouting() {
        const selectedShopParam = this.props.match.params.selectedShopId;

        if (selectedShopParam == null) {
            this.navigate(this.state.shops[0].id);
        }
    }
}

export default withRouter(ShopList);
