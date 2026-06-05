import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error))

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' })
})

app.get('/api/version', (req, res) => {
  res.json({ version: '0.0.1', name: 'OctoFit Tracker API' })
})

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 OctoFit Tracker API server is running on port ${PORT}`)
  console.log(`📊 MongoDB URI: ${MONGODB_URI}`)
})
