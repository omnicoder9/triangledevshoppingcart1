const express = require('express')
const cors = require('cors')
const cartRoutes = require('./routes/cartroutes')
const userRoutes = require('./routes/userroutes')

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
