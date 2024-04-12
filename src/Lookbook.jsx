import React from "react";
import { useLocation } from "react-router-dom"; 
import { productsData } from "./Shop";

function Lookbook(){

    return (
        <div>
                <div class="top-holder left">
        <p>Lookbook (00)</p>
    </div>
<div class="carousel-holder">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src={productsData[0].imgSrc} alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={productsData[1].imgSrc} alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={productsData[2].imgSrc} alt="Third slide"/>
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100" src={productsData[3].imgSrc} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={productsData[4].imgSrc} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={productsData[5].imgSrc} alt="Third slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={productsData[6].imgSrc} alt="Third slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={productsData[7].imgSrc} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={productsData[8].imgSrc} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={productsData[9].imgSrc} alt="Third slide"/>
              </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true">  &lt;---  </span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true">  ---&gt;  </span>
        </a>
    </div>
</div>

        </div>
    )
}

export default Lookbook;