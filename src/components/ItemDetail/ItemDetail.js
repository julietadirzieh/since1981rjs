import React, { useState } from 'react';
import "./ItemDetail.css";
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';
import { ItemCount } from '../ItemCount/ItemCount';

export function ItemDetail({ item }) {

    const [added, setAdded] = useState(false);

    const { addItem, removeItem, clear, realStock } = useCartContext();

    const onAdd = (quantityToAdd) => {
        addItem(item, quantityToAdd);
        setAdded(true)
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
                        <Message>$ {item.price} el metro.</Message>
                        <ItemCount stock={realStock(item)} initial={1} onAdd={onAdd} />
                        {added ? (
                            <Message
                                success
                                header='¡Los metros fueron agregados exitosamente!'
                                content='Podés volver a Inicio para agregar metros de otras telas.'
                            />
                        ) : (
                            <></>
                        )}
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