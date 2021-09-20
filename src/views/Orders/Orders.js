import React, { useState } from 'react';
import "./Orders.css";
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import { Message, Button } from 'semantic-ui-react';
import { useCartContext } from '../../Context/CartContext';

export const Orders = () => {

    const { cart, totalPrice } = useCartContext();

    const [buyer, setBuyer] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);

    const handleOnChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'phone') {
            setPhone(e.target.value)
        }
        const buyerInfo = { name: name, email: email, phone: phone }
        setBuyer(buyerInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const buyerInfo = buyer.toLowerCase().replace(/ /g, "");
    };

    const items = cart;

    class Order {
        constructor(buyer, items, total) {
            this.buyer = buyer;
            this.items = items;
            this.total = total;
        }
        toString() {
            return this.buyer + ', ' + this.items + ', ' + this.total;
        }
    }

    // Firestore data converter
    var orderConverter = {
        toFirestore: (order) => {
            return {
                buyer: order.buyer,
                items: order.items,
                total: order.total
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Order(data.buyer, data.items, data.total);
        }
    };

    const addProduct = async (e) => {
        e.preventDefault();
        const ref = collection(db, "orders").withConverter(orderConverter);
        const docRef = await addDoc(ref, new Order(buyer, items, totalPrice));
        console.log("ID de la compra: ", docRef.id)
    };

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
                <form onSubmit={handleSubmit} className="formSection">
                    <p><label for="Nombre">Nombre:</label>
                        <input type="text" name='name' id='name' value={name} placeholder="Escriba su nombre" required onChange={handleOnChange} /></p>
                    <p><label for="Correo">Correo electrónico:</label>
                        <input type="email" name='email' id='email' value={email} placeholder="Escriba su correo" required onChange={handleOnChange} /></p>
                    <p><label for="Teléfono">Teléfono:</label>
                        <input type="telphone" name='phone' id='phone' value={phone} placeholder="Escriba su teléfono" required onChange={handleOnChange} /></p>
                    <Button onClick={addProduct} className="BtnLanding">Enviar formulario</Button>
                </form>
            </div>
        </div>
    )
};