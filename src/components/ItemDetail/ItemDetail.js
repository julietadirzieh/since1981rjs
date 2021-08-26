import React from "react";
import { Message } from 'semantic-ui-react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

export function ItemDetail({ getItems }) {
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
                        <ItemCount stock={getItems.stock} initial={1} onAdd={0} />
                    </div>
                </div>
            </Message>
        </div>
    )
}

export default ItemDetail;