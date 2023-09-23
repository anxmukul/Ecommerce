import { React, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Trash } from "phosphor-react";
function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const {
    removeFromCart,
    addToCart,
    updateCartItem,
    removeAllFromCart,
    cartItems,
  } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage}></img>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItem(Number(e.target.value), id)}
          ></input>
          <button onClick={() => addToCart(id)}> + </button>
          <button onClick={() => removeAllFromCart(id)}>
            <Trash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
