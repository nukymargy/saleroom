import React, {Component} from 'react';

export class Testing extends Component {

    border = {
        border: '1px solid black'
    };
    shops = [
        {
            name: 'H&M',
            saleItems: {
                type: 'clothes',
                name: 'T-shirt',
                sale: 10,
                size: '10'
            }
        }, {
            name: 'celio',
            saleItems: {
                type: 'clothes',
                name: 'Shirt',
                sale: 25,
                size: '15'
            }
        }
    ];

    render() {
        return null;

    }
}
