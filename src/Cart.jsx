import React from "react";

function Cart(){
    return(
        <div>
 <div className="top-holder"><p>cart (00)</p></div>

<div className="cart-holder"><div className="empty-cart"><p>your cart is empty</p></div></div>
<hr className="hr"/>

<div className="cont-holder"><div className="continue"><a href="/shop">continue shopping</a></div></div>
        </div>
    );
}

export default Cart;