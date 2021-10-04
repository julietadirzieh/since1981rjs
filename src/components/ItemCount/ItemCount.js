import React, { useState } from 'react';
import "./ItemCount.css";
import { Button } from 'semantic-ui-react';

export function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState((stock > 0) ? initial : 0);

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
        if (stock > 0) {
            setCount(1);
          } else setCount(0);
    };

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



