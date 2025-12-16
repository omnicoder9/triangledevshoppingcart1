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

router.get("/test", (req, res) => {
  res.send("cart route works");
});


module.exports = router;
