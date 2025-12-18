import express from 'express'
import {
  addItemToCart,
  getUserCart,
  updateCartItem,
  removeCartItem,
  clearUserCart,
} from '../controllers/cartController.js'
import { requireAuth } from '../middleware/requireAuth.js'

const router = express.Router()

router.use(requireAuth)

router.get('/', getUserCart)

router.post('/', addItemToCart)

router.patch('/:id', updateCartItem)

router.delete('/:id', removeCartItem)

router.delete('/', clearUserCart)

export default router
