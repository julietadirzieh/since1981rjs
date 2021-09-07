import { Icon } from 'semantic-ui-react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const { totalQuantity } = useCartContext();

    return (
        <div>
            {totalQuantity ? (
                <Link to="/cart">
                    {totalQuantity}
                    <Icon name="cart" color="grey" size="large" className="IconCart" />
                </Link>
            ) : (
                <></>
            )}
        </div>
    )
};

