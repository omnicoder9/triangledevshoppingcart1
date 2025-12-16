const express = require("express");

const {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart
} = require("../controllers/cartController");

const router = express.Router();

router.post("/", addToCart);

router.get("/:userId", getCart);

router.patch("/:id", updateCartItem);

router.delete("/:id", removeFromCart);

module.exports = router;
