import React from "react";
import "./App.css";
import rayados from "./images/rayados.JPG";
import batistalisa from "./images/batistalisa.jpg";
import batistaestampada from "./images/batistaestampada.JPG";
import poplin from "./images/poplin.jpg";
import simillino from "./images/simillino.JPG";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CardComponent from "./components/CardComponent/CardComponent";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Menu"><Menu /></div>
        <div className="Cards-Container">
          <p className="Cards-Item"><CardComponent
            name="Batista Lisa"
            description="67% Algodón - 33% Poliéster"
            stock="Disponible en 10 colores."
            img={batistalisa}
          /></p>

          <p className="Cards-Item"><CardComponent
            name="Batista Estampada"
            description="67% Algodón - 33% Poliéster"
            stock="¡Consultá por las distintas estampas y colores disponibles!"
            img={batistaestampada}
          /></p>

          <p className="Cards-Item"><CardComponent
            name="Simil Lino"
            description="100% Algodón"
            stock="Línea Liviana y Rústica. Más de 20 colores en stock."
            img={simillino}
          /></p>

          <p className="Cards-Item"><CardComponent
            name="Poplin Elastizado Estampado"
            description="98% Algodón - 2% Spandex"
            stock="¡Consultá por las distintas estampas y colores disponibles!"
            img={poplin}
          /></p>

          <p className="Cards-Item"><CardComponent
            name="Rayados"
            description="98% Algodón - 2% Spandex"
            stock="Rígidos y Elastizados."
            img={rayados}
          /></p>

        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
