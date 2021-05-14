import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  removeDecreaseItem,
  addItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({
  cartItem,
  removeItem,
  removeDecreaseItem,
  addItem,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeDecreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span onClick={() => removeItem(cartItem)} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  removeDecreaseItem: (item) => dispatch(removeDecreaseItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
