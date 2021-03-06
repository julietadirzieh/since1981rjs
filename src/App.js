import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from './Context/CartContext';

import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { FAQs } from "./views/FAQs/FAQs";
import { Contact } from "./views/Contact/Contact";
import { category } from "./views/category/category";
import { item } from "./views/item/item";
import { Footer } from "./components/Footer/Footer";
import { cart } from "./views/cart/cart";
import { order } from "./views/order/order";
import { Error404 } from "./views/Error404/Error404";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/FAQs" component={FAQs} />
            <Route path="/contact" component={Contact} />
            <Route path="/category/:categoryId" component={category} />
            <Route path="/item/:itemId" component={item} />
            <Route path="/cart" component={cart} />
            <Route path="/order" component={order} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </div >
      </Router>
    </CartProvider>
  );
}

export default App;

