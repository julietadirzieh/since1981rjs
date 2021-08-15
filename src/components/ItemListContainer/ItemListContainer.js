import React from 'react';
import { List } from 'semantic-ui-react';
import "./ItemListContainer.css";
import CardComponent from "../CardComponent/CardComponent";

//para importar las imagenes que iran en las cards
import rayados from "./img/rayados.jpg";
import batistalisa from "./img/batistalisa.jpg";
import batistaestampada from "./img/batistaestampada.jpg";
import poplin from "./img/poplin.jpg";
import simillino from "./img/simillino.jpg";

//para importar el componente
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => (
  <List className="List-Container">
    <List.Item><h1>{greeting}</h1></List.Item>
    <div className="ItemCount-Container">
      <ItemCount
        stock="5"
        initial="0"
        onAdd="0"
      />
    </div>
    <div className="Cards-Container">
      <CardComponent className="Card-Padding"
        name="Batista Lisa"
        description="67% Algodón - 33% Poliéster"
        stock="Disponible en 10 colores."
        img={batistalisa}
      />

      <CardComponent
        name="Batista Estampada"
        description="67% Algodón - 33% Poliéster"
        stock="Muchas estampas y colores disponibles."
        img={batistaestampada}
      />

      <CardComponent
        name="Simil Lino"
        description="100% Algodón"
        stock="Línea Liviana y Rústica. Más de 20 colores en stock."
        img={simillino}
      />

      <CardComponent
        name="Poplin Elastizado Estampado"
        description="98% Algodón - 2% Spandex"
        stock="Muchas estampas y colores disponibles."
        img={poplin}
      />

      <CardComponent
        name="Rayados"
        description="98% Algodón - 2% Spandex"
        stock="Rígidos y Elastizados."
        img={rayados}
      />

    </div>
  </List>
)

export default ItemListContainer;