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

<div className="product-page">
    <div className="product-carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
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
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={product.imgSrc} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={product.imgSrc2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={product.imgSrc3} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">  &lt;---  </span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">  ---&gt;  </span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    </div>

    <div className="product-description">
        <div className="pr-title"><h1>{product.description}</h1><div className="product-status"><p>sold out</p></div></div>
        <div className="box">
            <div className="price"><p>${product.price}</p></div>



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
        <a className="atc" href='javascript:void(0)'>add to cart</a>
        </div>
        <div className="about">
            <p>about</p>
            <p>{product.about}</p>
        </div>
    </div>

    </div>

  );
};

export default ProductPage;
