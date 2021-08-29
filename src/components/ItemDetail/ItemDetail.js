import React, { useState } from "react";
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

export function ItemDetail({ getItems }) {

    const [onAddClick, setOnAddClick] = useState(0);

    const onAdd = (quantityToAdd) => {
        setOnAddClick(quantityToAdd);
    }

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
                        {onAddClick ? (
                            <Link to="/cart">
                                <p>Agregaste {onAddClick} metros al carrito.</p>
                                <Button>Termina tu compra</Button>
                            </Link>
                        ) : (
                            <ItemCount stock={getItems.stock} initial={1} onAdd={onAdd} />
                        )}
                    </div>
                </div>
            </Message>
        </div>
    )
}

export default ItemDetail;