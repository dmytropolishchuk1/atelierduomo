import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Shop from "./Shop";
import ProductPage from "./ProductPage";
import About from "./About";
import Lookbook from "./Lookbook";
import Contacts from "./Contacts";
import Cart from "./Cart";
import "./index.css";



function App(){
    return(
        <div className="App">
          <Router>
          <Routes>
          <Route path="/" element={<><Header /><Landing /></>} />
          <Route path="/shop" element={<><Header /><Shop /></>} />
          <Route path="/product/:productPath" element={<><Header/><ProductPage /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/lookbook" element={<><Header/><Lookbook /></>}/>
          <Route path="/contacts" element={<><Header/>< Contacts/></>}/>
          <Route path="/cart" element={<><Header/>< Cart/></>}/>
          </Routes>
          </Router>
    </div>
    )
}

export default App;