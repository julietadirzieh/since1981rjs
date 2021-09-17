/* import React from 'react';
import "./Orders.css";
import { db } from "../../firebase"
import { collection, getFirestore, Timestamp } from "firebase/firestore";
import { Message } from 'semantic-ui-react';
import { useCartContext } from '../../Context/CartContext';

export const Orders = () => {

    const { cart, totalPrice } = useCartContext();

    const db = getFirestore();
    const orders = collection(db, "orders");
    const newOrder = {
        buyer: userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalPrice,
		};
    
    orders.add(newOrder).then(({ id }) => { 
        setOrderId(id);
    });

		//e.preventDefault();
		//await collection(db, "orders").doc().set(buyer);
		//collection(db, "orders").onSnapshot((querySnapshot) => {
		//	querySnapshot.forEach((doc) => {
		//		console.log(doc.id);
		//	});
		//});

    return (
        <div className="Cart-Container">
            <h1>Resumen de Compra</h1>
                {cart.map((item) => {
                    return (
                        <div className="CartMessage" >
                            <Message key={item.id} >
                                <h2 className="pInlineCart">{item.title}</h2>
                                <h4 className="pInlineCart">{item.quantity} metros</h4>
                                <h4 className="pInlineCart">$ {item.price} por metro</h4>
                                <h3 className="pInlineCart">$ {item.price * item.quantity} total</h3>
                            </Message>
                        </div>
                    )
                })
                }
                    <h2>Total: $ {totalPrice}</h2>
        <div className="OrderContainer">
        <h1>Complete sus datos</h1>
            <form onSubmit={newOrder} className="formSection">
                <p><label for="Nombre">Nombre:</label>
                <input type="text" placeholder="Escriba su nombre" required /></p>
                <p><label for="Correo">Correo electrónico:</label>
                <input type="email" placeholder="Escriba su correo" required /></p>
                <p><label for="Teléfono">Teléfono:</label>
                <input type="telphone" placeholder="Escriba su teléfono" required /></p>
                <input type="submit" value="Enviar formulario"/>
                <input type="reset" value="Limpiar formulario" />
            </form>
        </div>
        </div>
    )
}; */