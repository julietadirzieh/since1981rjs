import React, { Component } from "react";
import "./App.css";

//para importar los distintos componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="List-Container">
          <ItemListContainer greeting="¡Somos fabricantes textiles!"/>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
