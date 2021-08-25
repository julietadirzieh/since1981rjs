import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';

//para crear un componente que haga rendering de un ícono Cart
const CartWidget = () => {
    return (
        <div className="CartWidget">
            <Icon name="cart" className="iconCart" />
        </div>
    )
};
export default CartWidget;
