import express from 'express'
import cors from 'cors'
import cartRoutes from './routes/cartroutes.js'
import userRoutes from './routes/userroutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is working 🚀')
})

app.use('/cart', cartRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
