import React, { useState } from 'react';
import "./ItemCount.css";
import { Button } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);
    const onStock = stock - count;

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const onAddClick = () => {
        onAdd(count);
        console.log("Metros en stock: ", onStock);
    }

    return (
        <div className="ItemCounter">
            <Button className="ItemCount-Btn" onClick={handleDecrement}>-</Button>
            <p className="pInline">{count}</p>
            <Button className="ItemCount-Btn" onClick={handleIncrement}>+</Button>
            <Button className="ItemCount-Btn" onClick={onAddClick}><CartWidget /></Button>
        </div>
    );
};

export default ItemCount;


