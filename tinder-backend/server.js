import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

// App Config

const app = express()
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:8DB0dH3g19ZocjHp@cluster0.lbiqx.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares

app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  // useCreateIndex: false,
  useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello Kings this is your first API')
})

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// Listerners

app.listen(port, () => {
  console.log(`listening to localhost: ${port}`)
})
