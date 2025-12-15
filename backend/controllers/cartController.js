const cartItems = [{
  id: 1,
  userId: 1,
  productId: 2,
  quantity: 1
}];

let nextId = 1;

export const addToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;

  const existingItem = cartItems.find(
    item => item.userId === userId && item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    return res.status(200).json({
      success: true,
      item: existingItem,
    });
  }

  const newItem = {
    id: nextId++,
    userId,
    productId,
    quantity,
  };

  cartItems.push(newItem);

  res.status(201).json({
    success: true,
    item: newItem,
  });
};