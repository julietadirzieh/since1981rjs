import React, { useState } from 'react';
import "./ItemCount.css";
import { Button } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';

function ItemCount({ stock, initial, onAdd }) {

    const [initialItems, setInitialItems] = useState(initial);
    const [onAddItems, setOnAddItems] = useState(onAdd);
    const onStock = stock - initialItems

    const handleIncrement = () => {
        if (initialItems < stock) {
            setInitialItems(initialItems + 1);
            console.log("Metros en stock: ", onStock);
        }
    }

    const handleDecrement = () => {
        if (initialItems > initial) {
            setInitialItems(initialItems - 1);
            console.log("Metros en stock: ", onStock);
        }
    }

    const handleOnAdd = () => {
        setOnAddItems(onAddItems + initialItems);
    }

    return (
        <div className="ItemCounter">
            <Button className="ItemCount-Btn" onClick={handleDecrement}>-</Button>
            <p className="pInline">{initialItems}</p>
            <Button className="ItemCount-Btn" onClick={handleIncrement}>+</Button>
            <Button className="ItemCount-Btn" onClick={handleOnAdd}><CartWidget /> </Button>
            <p>¡Agregaste {onAddItems} metros a tu carrito!</p>
        </div>
    );
};

export default ItemCount;


