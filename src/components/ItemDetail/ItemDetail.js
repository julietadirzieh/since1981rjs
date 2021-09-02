import React from "react";
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';

import { useCartContext } from '../../CartContext';

export function ItemDetail({ getItems }) {

    const { cart, addItem, removeItem, clear } = useCartContext();

    const onAdd = (quantityToAdd) => {
        addItem(getItems, quantityToAdd);
    }

    console.log("Esto es lo seleccionado por el usuario: ", cart)

    return (
        <div>
            <Message>
                <h1 className="ItemDetail-Title">{getItems.title}</h1>
                <div className="ItemDetailMessage">
                    <div className="ImgsDetail">
                        <img src={getItems.img1} className="imgItemDetail" alt="" />
                        <img src={getItems.img2} className="imgItemDetail" alt="" />
                        <img src={getItems.img3} className="imgItemDetail" alt="" />
                    </div>
                    <div className="ItemDetail">
                        <img src={getItems.img} className="imgItemDetail--port" alt=""></img>
                        <Message.Header>{getItems.title}</Message.Header>
                        <Message.List className="listFlex">
                            <Message.Item>{getItems.description}</Message.Item>
                            <Message.Item>Colores disponibles: {getItems.colors}.</Message.Item>
                            <Message.Item>Variantes: {getItems.designs}.</Message.Item>
                        </Message.List>
                        <Message>$ {getItems.price} el metro. Fraccionamos un mínimo de 10 metros por corte.</Message>
                        <ItemCount stock={getItems.stock} initial={1} onAdd={onAdd} />
                        <Button onClick={clear}>Vaciar carrito</Button>
                        <Button onClick={removeItem}>Eliminar Item</Button>
                        <Link to="/cart">
                            <Button>Termina tu compra</Button>
                        </Link>
                    </div>
                </div>
            </Message>
        </div>
    )
};