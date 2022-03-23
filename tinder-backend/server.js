import express from 'express'
import mongoose from 'mongoose'

// App Config

const app = express()
const port = process.env.PORT || 8001

// Middlewares

// DB Config

// API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hellow Kings this is your first API')
})

// Listerners

app.listeners(port, () => {
  console.log(`listening to localhost: ${port}`)
})
