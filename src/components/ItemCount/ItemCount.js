import React, { useState } from 'react';
import "./ItemCount.css";
import { Button } from 'semantic-ui-react';

export function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

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
        setCount(1);
    }

    return (
        <div className="ItemCounter">
            <Button onClick={handleDecrement}>-</Button>
            <p className="pInline">{count}</p>
            <Button onClick={handleIncrement}>+</Button>
            <Button className="ItemCount-Btn" onClick={onAddClick}>Agregar</Button>
            <p></p>
        </div>
    );
};



