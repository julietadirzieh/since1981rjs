import React, { useState } from 'react';
import "./ItemCount.css";
import { Button } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';

function ItemCount({ stock, initial, onAdd }) {
    // para declarar una variable de estado "stock"
    const [stockItems, setStockItems] = useState(parseInt(stock));
    // para declarar una variable de estado "initial"
    const [initialItems, setInitialItems] = useState(parseInt(initial));
    // para declarar una variable de estado "onAdd"
    const [onAddItems, setOnAddItems] = useState(parseInt(onAdd));

    // para que al apretar +, disminuya el stock y aumente el initial
    const handleIncrement = () => {
        if ((stockItems > 0)) {
            setStockItems(stockItems - 1);
            setInitialItems(initialItems + 1);
        }
    }

    // para que al apretar -, aumente el stock y reduzca el initial
    const handleDecrement = () => {
        if ((stockItems <= stock) && (initialItems > initial)) {
            setStockItems(stockItems + 1);
            setInitialItems(initialItems - 1);
        }
    }

    // para agregar al carrito, los productos seleccionados por el usuario
    const handleOnAdd = () => {
        setOnAddItems(onAddItems + initialItems);
    }

    return (
        <div className="ItemCount">
            <CartWidget />
            <div>
                <Button className="ItemCount-Btn" onClick={handleDecrement}> - </Button>
                {initialItems}
                <Button className="ItemCount-Btn" onClick={handleIncrement}> + </Button>
            </div>
            <p><Button className="ItemCount-Btn" onClick={handleOnAdd}> Añadir al carrito </Button></p>
            <p>{stockItems} En stock</p>
            <div>
                <p>¡Agregaste {onAddItems} productos a tu carrito!</p>
            </div>
        </div>
    );
};

export default ItemCount;


