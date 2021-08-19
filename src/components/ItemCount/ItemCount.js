import React, { useState } from 'react';
import "./ItemCount.css";
import { Button } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';

function ItemCount({ stock, initial, onAdd }) {
    // para declarar una variable de estado "initial"
    const [initialItems, setInitialItems] = useState(initial);
    // para declarar una variable de estado "onAdd"
    const [onAddItems, setOnAddItems] = useState(onAdd);
    const onStock = stock - initialItems

    // para que al apretar +, disminuya el stock y aumente el initial
    const handleIncrement = () => {
        if (initialItems < stock) {
            setInitialItems(initialItems + 1);
            console.log("Metros en stock: ", onStock);
        }
    }

    // para que al apretar -, aumente el stock y reduzca el initial
    const handleDecrement = () => {
        if (initialItems > initial) {
            setInitialItems(initialItems - 1);
            console.log("Metros en stock: ", onStock);
        }
    }

    // para agregar al carrito, los productos seleccionados por el usuario
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


