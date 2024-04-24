import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./landing.css"
import swatvid from "./assets/swatvid.gif"

function Landing(){

    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = (path) => {
      // Start the slide-down animation
      setAnimate(true);
  
      // Wait for the animation to complete before navigating
      setTimeout(() => {
        navigate(path);
        // Optionally reset the animation state if staying on the same page/component
        setAnimate(false);
      }, 800); // Match the duration of your CSS transition
    };

    useEffect(() => {
        // Set the body style properties
        document.body.style.height = "100%";
        document.body.style.backgroundImage = `url(${swatvid})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
            // Cleanup function to reset styles
            return () => {
                document.body.style.height = "";
                document.body.style.backgroundImage = "";
                document.body.style.backgroundSize = "";
                document.body.style.backgroundPosition = "";
                document.body.style.backgroundRepeat = "";
            };
        }, []); // Empty dependency array means this effect runs only once on mount
       
    return(
        <div className={`landing ${animate ? 'slide-down' : ''}`}>
    <div className="linkyholder">
        <div className="linky"><a id="shop" href="javascript:void(0)" onClick={() => handleClick('/shop')}><p>shop</p></a></div>
        <div className="linky"><a id="about" href="javascript:void(0)" onClick={() => handleClick('/about')}><p>about</p></a></div>
        <div className="linky"><a id="lookbook" href="javascript:void(0)" onClick={() => handleClick('/lookbook')}><p>lookbook</p></a></div>
        <div className="linky"><a id="contacts" href="javascript:void(0)" onClick={() => handleClick('/contacts')}><p>contact us</p></a></div>
    </div>
        <div className="green-mask"></div>
        </div>
    );
}

export default Landing;