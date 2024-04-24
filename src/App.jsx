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

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state to indicate an error has occurred
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Log the error to an error reporting service
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return
      }
  
      // Render children as usual if no error occurred
      return this.props.children;
    }
  }
  

function App(){
    return(
        <ErrorBoundary>
        <div className="App">
          <Router>
          <Routes>
          <Route path="/" element={<><Header /><Landing /></>} />
          <Route path="/shop" element={<><Header /><Shop /></>} />
          <Route path="/product/:productPath" element={<><Header/><ProductPage /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/lookbook" element={<><Header/><Lookbook /></>}/>
          <Route path="/contacts" element={<><Header/><Contacts/></>}/>
          <Route path="/cart" element={<><Header/><Cart/></>}/>
          </Routes>
          </Router>
    </div>
    </ErrorBoundary>
    );
}

export default App;