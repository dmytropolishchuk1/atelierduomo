import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import doublet2 from "./products/doublet2.png";
import doublet22 from "./products/doublet2.2.jpeg"
import doublet23 from "./products/doublet2.3.jpeg"
import re22 from "./products/re2.2.png";
import re222 from "./products/re2.2.2.jpeg";
import re223 from "./products/re2.2.3.png";
import re32  from "./products/re3.2.png";
import re322 from "./products/re3.2.2.png";
import y12  from "./products/y1.2.png";
import y122 from "./products/y1.2.2.png";
import y123 from "./products/y1.2.3.png";
import y32  from "./products/y3.2.png";
import y322 from "./products/y3.2.2.png";
import y323 from "./products/y3.2.3.png";
import my22 from "./products/my2.2.png";
import my23 from "./products/my2.3.png";
import my24 from "./products/my2.4.png";
import mya2  from "./products/mya2.png";
import mya22 from "./products/mya2.2.png";
import mya23 from "./products/mya2.3.png";
import re12  from "./products/re1.2.png";
import re122 from "./products/re1.2.2.png";
import re123 from "./products/re1.2.3.png";
import he2  from "./products/he2.png";
import he22 from "./products/he2.2.png";
import he23 from "./products/he2.3.png";
import y22  from "./products/y2.2.png";
import y222 from "./products/y2.2.2.png";
import y223 from "./products/y2.2.3.png";

const productsData = [
    {
      id: 1,
      description: "'goodwin' - doublet hoodie",
      imgSrc: doublet2,
      imgSrc2: doublet22,
      imgSrc3: doublet23,
      price: 390,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product"
    },
    {
      id: 2,
      description: "'rci' - reese cooper hoodie",
      imgSrc: re22,
      imgSrc2: re222,
      imgSrc3: re223,
      price: 290,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product2"
    },
    {
      id: 3,
      description: "'logoe' - reese cooper hoodie",
      imgSrc: re32,
      imgSrc2: re322,
      price: 270,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product3"
    }
    ,
    {
      id: 4,
      description: "'yyy' - y project hoodie",
      imgSrc: y12,
      imgSrc2: y122,
      imgSrc3: y123,
      price: 610,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product4"
    },
    {
      id: 5,
      description: "'metal' - y project hoodie",
      imgSrc: y32,
      imgSrc2: y322,
      imgSrc3: y323,
      price: 590,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product5"
    }
    ,
    {
      id: 6,
      description: "' mm y ' faded l-sleeve",
      imgSrc: my22,
      imgSrc2: my23,
      imgSrc3: my24,
      price: 410,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product6"
    }
    ,
    {
      id: 7,
      description: "' mm y 'patched t-shirt",
      imgSrc: mya2,
      imgSrc2: mya22,
      imgSrc3: mya23,
      price: 280,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product7"
    }
    ,
    {
      id: 8,
      description: "' r c ' eagle t-shirt",
      imgSrc: re12,
      imgSrc2: re122,
      imgSrc3: re123,
      price: 190,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product8"
    }
    ,
    {
      id: 9,
      description: "heliot emil reflective pants",
      imgSrc: he2,
      imgSrc2: he22,
      imgSrc3: he23,
      price: 520,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product9"
    }
    ,
    {
      id: 10,
      description: "y project boot-cut jeans",
      imgSrc: y22,
      imgSrc2: y222,
      imgSrc3: y223,
      price: 390,
      about: "Black PZ Today Edition Hoodie. French terry hoodie. Drawstring at hood. Graphic printed at front.Kangaroo pocket.Rib knit hem and cuffs.Part of the Doublet x PZ Today collaboration.",
      path: "/product10"
    }
    ,
    {
      id: 11,
      path: "javascript: void(0)"
    }
    ,
    {
      id: 12,
      path: "javascript: void(0)"
    }
  ];
function Shop(){
    
    const [hoveredProductId, setHoveredProductId] = useState(null);

    return(
        <div className="shop">
      <div className="main">
        <div className="grid-aligner">
          <div className="grid-container">
          {productsData.map((product) => (
          <Link 
            key={product.id} 
            to={`/product${product.path}`} 
            state={{ product: product, productsData: productsData}} // Pass the entire product object as state
            className="colie"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <img 
              src={hoveredProductId === product.id ? product.imgSrc2 : product.imgSrc} 
              alt={product.description} 
            />
            <p>{product.description}</p>
          </Link>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
export {productsData};
