import React, { Component } from "react";
import "./App.css";

//para importar las imagenes
import rayados from "./images/rayados.jpg";
import batistalisa from "./images/batistalisa.jpg";
import batistaestampada from "./images/batistaestampada.jpg";
import poplin from "./images/poplin.jpg";
import simillino from "./images/simillino.jpg";

//para importar los distintos componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardComponent from "./components/CardComponent/CardComponent";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="List-Container">
          <ItemListContainer />
        </div>
        <div className="Cards-Container">
          <CardComponent
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

        <Footer />

      </div>
    );
  }
}

export default App;
