import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import FAQs from "./views/FAQs/FAQs";
import Contact from "./views/Contact/Contact";
import category from "./views/category/category";
import item from "./views/item/item";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
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
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App;

