import React from "react";
import "./Cart.css";
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

export const Cart = () => {

    const { cart, removeItem, clear, totalPrice, totalQuantity } = useCartContext();

    return (
        <div className="Cart-Container">
            {totalQuantity ? (
                <div>
                    <Button className="CartBtn2" onClick={clear}>Vaciar carrito</Button>
                    {cart.map((item) => {
                        return (
                            <div className="CartMessage" key={item.id}>
                                <Message>
                                    <h2 className="pInlineCart">{item.title}</h2>
                                    <h4 className="pInlineCart">{item.quantity} metros</h4>
                                    <h4 className="pInlineCart">$ {item.price} por metro</h4>
                                    <h3 className="pInlineCart">$ {item.price * item.quantity} total</h3>
                                    <p className="pInlineCart"><Button onClick={() => removeItem(item.id)}>Eliminar Item</Button></p>
                                </Message>
                            </div>
                        )
                    })
                    }
                    <div className="CartBtn">
                        <p>Agregaste un total de {totalQuantity} metros al carrito.</p>
                    </div>
                    <div className="CartBtn1">
                        <h1>Total: $ {totalPrice}</h1>
                        <Link to="/order">
                        <Button>Iniciar compra</Button>
                        </Link>
                        <Link to="/">
                            <p>Ver más telas</p>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="BtnLanding-Container">
                    <h1>¡No hay metros agregados al carrito :(!</h1>
                    <Link to="/">
                        <Button className="BtnLanding">Volver al Inicio</Button>
                    </Link>
                </div>
            )
            }
        </div >
    )
};