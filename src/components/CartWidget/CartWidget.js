import { Icon } from 'semantic-ui-react';
import { useCartContext } from '../../CartContext';

export const CartWidget = () => {

    const { totalItems } = useCartContext();

    return (
        <div>
            {totalItems}
            <Icon name="cart" color="grey" size="large" className="IconCart" />
        </div>
    )
};
