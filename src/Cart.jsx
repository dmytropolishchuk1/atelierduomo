import React from "react";

function Cart(){
    return(
        <div>
 <div class="top-holder"><p>cart (00)</p></div>

<div class="cart-holder"><div class="empty-cart"><p>your cart is empty</p></div></div>
<hr class="hr"/>

<div class="cont-holder"><div class="continue"><a href="/shop">continue shopping</a></div></div>
        </div>
    )
}

export default Cart;