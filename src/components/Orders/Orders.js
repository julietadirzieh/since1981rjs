import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Orders.css";
import { db } from "../../firebase"
import { collection, addDoc, onSnapshot, Timestamp } from "firebase/firestore";
import { Message, Button } from 'semantic-ui-react';
import { useCartContext } from '../../Context/CartContext';

export const Orders = () => {

    const { cart, clear, totalPrice } = useCartContext();

    const [buyer, setBuyer] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleOnChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'emailConfirm') {
            setEmailConfirm(e.target.value)
        } else if (e.target.name === 'phone') {
            setPhone(e.target.value)
        }
        const buyerInfo = { name: name, email: email, phone: phone }
        setBuyer(buyerInfo);
    }

    const handleSubmit = () => {
        const buyerInfo = buyer.toLowerCase().replace(/ /g, "");
        setBuyer(buyerInfo)
        setName("");
        setEmail("");
        setPhone("");
    };

    const items = cart;
    const date = new Date();
    const hour = Timestamp.fromDate(new Date()).toDate();
    const actualDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}-${hour}`;

    class Order {
        constructor(buyer, items, actualDate, total) {
            this.buyer = buyer;
            this.items = items;
            this.actualDate = actualDate;
            this.total = total;
        }
        toString() {
            return this.buyer + ', ' + this.items + ', ' + this.actualDate + ', ' + this.total;
        }
    }

    // Firestore data converter
    var orderConverter = {
        toFirestore: (order) => {
            return {
                buyer: order.buyer,
                items: order.items,
                actualDate: order.actualDate,
                total: order.total
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Order(data.buyer, data.items, data.actualDate, data.total);
        },
    };

    const addProduct = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "orders").withConverter(orderConverter), new Order(buyer, items, actualDate, totalPrice));
        onSnapshot(collection(db, "orders").withConverter(orderConverter), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setOrderId(doc.id)
                clear()
            });
        });
    };

    return (
        <div className="ItemList-Container">
            {(orderId !== "") ? (<div>
                <Message className="CartMessage">
                    <h3>Se ha generado la Orden N° {orderId} exitosamente.</h3>
                    <h4>¡Muchas gracias!</h4>
                </Message>
                <Link to="/">
                    <p>Volver al Inicio</p>
                </Link>
            </div>
            ) : (
                <div>
                    <h1>Resumen de Compra</h1>
                    {cart.map((item) => {
                        return (
                            <div className="CartMessage" key={item.id} >
                                <Message >
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
                            <p><label htmlFor="Nombre">Nombre:</label>
                                <input type="text" name='name' id='name' value={name} placeholder="Escriba su nombre y apellido" required onChange={handleOnChange} /></p>
                            <p><label htmlFor="Correo">Correo electrónico:</label>
                                <input type="email" name='email' id='email' value={email} placeholder="Escriba su correo" required onChange={handleOnChange} /></p>
                            <p><label htmlFor="Correo">Reiterar correo electrónico:</label>
                                <input type="email" name='emailConfirm' id='emailConfirm' value={emailConfirm} placeholder="Confirme su correo" required onChange={handleOnChange} /></p>
                            <p><label htmlFor="Teléfono">Teléfono:</label>
                                <input type="telphone" name='phone' id='phone' value={phone} placeholder="Escriba su teléfono" onChange={handleOnChange} /></p>
                            {((email === emailConfirm) && (email !== "")) ? (<div className="marginBtn">
                                <Button onClick={addProduct}>Realizar compra</Button>
                            </div>
                            ) : (
                                <div></div>)
                            }
                        </form>
                    </div>
                </div>
            )
            }
        </div >
    )
};