import React from "react";
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';

import { useCartContext } from '../../Context/CartContext';

export function ItemDetail({ item }) {

    const { addItem, removeItem, clear } = useCartContext();

    const onAdd = (quantityToAdd) => {
        addItem(item, quantityToAdd);
    }

    return (
        <div>
            <Message>
                <h1 className="ItemDetail-Title">{item.title}</h1>
                <div className="ItemDetailMessage">
                    <div className="ImgsDetail">
                        <img src={item.img1} className="imgItemDetail" alt="" />
                        <img src={item.img2} className="imgItemDetail" alt="" />
                        <img src={item.img3} className="imgItemDetail" alt="" />
                    </div>
                    <div className="ItemDetail">
                        <img src={item.img} className="imgItemDetail--port" alt=""></img>
                        <Message.Header>{item.title}</Message.Header>
                        <Message.List className="listFlex">
                            <Message.Item>{item.description}</Message.Item>
                            <Message.Item>Colores disponibles: {item.colors}.</Message.Item>
                            <Message.Item>Variantes: {item.designs}.</Message.Item>
                        </Message.List>
                        <Message>$ {item.price} el metro.Fraccionamos un mínimo de 10 metros por corte.</Message>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        <Button onClick={clear}>Vaciar carrito</Button>
                        <Button onClick={() => removeItem(item.id)}>Eliminar Item</Button>
                        <div>
                            <Link to="/cart">
                                <Button>Terminar tu compra</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Message>
        </div>
    )
};