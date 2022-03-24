import express from 'express'
import mongoose from 'mongoose'

// App Config

const app = express()
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:8DB0dH3g19ZocjHp@cluster0.lbiqx.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello Kings this is your first API')
})

// Listerners

app.listen(port, () => {
  console.log(`listening to localhost: ${port}`)
})
