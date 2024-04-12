import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductPage = () => {
const [selectedSize, setSelectedSize] = useState(null);

  const location = useLocation();
  // Assuming the product object is passed correctly via state from the Link component
  const product = location.state?.product;

  if (!product) {
    return <div>No product details available</div>;
  }
 

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
            const sizes = [' s ', ' m ', ' l ', ' xl ', ' xxl '];
  return (

<div class="product-page">
    <div class="product-carousel">
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
                    <img class="d-block w-100" src={product.imgSrc} alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={product.imgSrc2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={product.imgSrc3} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true">  &lt;---  </span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true">  ---&gt;  </span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    </div>

    <div class="product-description">
        <div class="pr-title"><h1>{product.description}</h1><div class="product-status"><p>sold out</p></div></div>
        <div class="box">
            <div class="price"><p>${product.price}</p></div>



  <div className="size">
    {sizes.map((size) => (
      <a 
        key={size} 
        className={`onesie ${selectedSize === size ? 'selected' : ''}`} 
        onClick={() => handleSizeClick(size)}
        href="javascript:void(0)"
      >
        {size}
      </a>
    ))}
  </div>
        <a class="atc" href='javascript:void(0)'>add to cart</a>
        </div>
        <div class="about">
            <p>about</p>
            <p>{product.about}</p>
        </div>
    </div>

    </div>

  );
};

export default ProductPage;
