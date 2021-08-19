import React, { useState } from "react";

//para importar el componente ItemDetail
import ItemDetail from "../ItemDetail/ItemDetail";

//para importar las imagenes
import batistalisa from "./img/batistalisa.jpg";
import celeste from "./img/celeste.jpeg";
import azul from "./img/azul.jpeg";
import negro from "./img/negro.jpeg";

//poner promise
function ItemDetailContainer() {
  // estado donde voy a tener los items que quiero que me devuelva
  const [getItems, setGetItems] = useState({});

  // promesa que devuelve un array con los items en tiempo diferido
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const getItems =
        { title: "Batista  Lisa", description: "67% Algodón - 33% Poliéster", price: 290, imgPort: batistalisa, img1: celeste, img2: azul, img3: negro, stock: 30, colors: "Blanco, rosa, celeste, mostaza, verde militar, azul marino, bordó melange, azul melange, gris melange y negro", designs: "Lisos" };
      resolve(getItems)
    }, 2000)
  });
  myPromise.then((getItems) => setGetItems(getItems));
  
  return (
    <div className="ItemDetail-Container">
      <ItemDetail getItems={getItems} />
    </div>
  )
};

export default ItemDetailContainer;