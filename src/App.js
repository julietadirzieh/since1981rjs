import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//para importar los distintos componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

//para importar las distintas views
import Home from "./views/Home/Home";
import About from "./views/About/About";
import FAQs from "./views/FAQs/FAQs";
import Contact from "./views/Contact/Contact";
import category from "./views/category/category";
import detail from "./views/detail/detail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}  >
          <div className="ItemList-Container">
              <ItemListContainer />
              </div >
          </Route>

          <Route path="/about" component={About} />
          <Route path="/FAQs" component={FAQs} />
          <Route path="/contact" component={Contact} />

          <Route path="/category/:categoryId" component={category}>
          <div className="ItemList-Container">
              <ItemListContainer />
              </div >
          </Route>

          <Route path="/detail/:itemId" component={detail}>
          <div className="ItemDetail-Container">
              <ItemDetailContainer />
              </div >
          </Route>

        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App;

