export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeDecreaseItem = (cartItems, itemToDecreaseRemove) => {
  if (itemToDecreaseRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToDecreaseRemove.id);
  }

  return cartItems.map((item) =>
    item.id === itemToDecreaseRemove.id
      ? { ...item, quantity: itemToDecreaseRemove.quantity - 1 }
      : item
  );
};
