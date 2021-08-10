import React, { Component } from 'react';
import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';

//para crear un componente que haga rendering de un ícono Cart
export class CartWidget extends Component {
    render() {
        return (
            <div className="CartWidget">
                <Icon name='envelope outline' className="iconEnvelope" />
                <Icon name="cart" className="iconCart" />
            </div>
        )
    }
}

export default CartWidget;
