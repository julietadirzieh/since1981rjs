import React, { useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

//para importar las imagenes que iran en las cards
import rayados from "./img/rayados.jpg";
import batistalisa from "./img/batistalisa.jpg";
import batistaestampada from "./img/batistaestampada.jpg";
import poplin from "./img/poplin.jpg";
import simillino from "./img/simillino.jpg";

const ItemListContainer = () => {

  // estado donde voy a tener los items
  const [items, setItems] = useState([]);

  // promesa que devuelve un array con los items en tiempo diferido
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const items = [
        { id: 1, title: "Batista Lisa", description: "67% Algodón - 33% Poliéster", price: 290, img: batistalisa, stock: 30 },
        { id: 2, title: "Batista Estampada", description: "67% Algodón - 33% Poliéster", price: 350, img: batistaestampada, stock: 50 },
        { id: 3, title: "Poplin", description: "98% Algodón - 2% Spandex", price: 440, img: poplin,  stock: 100 },
        { id: 4, title: "Simil Lino", description: "98% Algodón - 2% Spandex", price: 440, img: simillino,  stock: 60 },
        { id: 5, title: "Rayados", description: "98% Algodón - 2% Spandex", price: 490, img: rayados,  stock: 10 }
      ];
      resolve(items)
    }, 2000)
  });

  myPromise.then((items) => setItems(items));

  return (
    <div className="ItemList-Container">
      <ItemList items={items} />
    </div>
  )

};

export default ItemListContainer;

