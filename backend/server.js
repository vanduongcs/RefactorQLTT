import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// Collection routes
// import accountRoute from './routes/accountRoute.js'
import CertificateRoute from './routes/CertificateRoute.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    )
  )
  .catch(error =>
    console.error('❌ MongoDB connection error:', error)
  )

// app.use('/api/account', accountRoute)
app.use('/api/certificate', CertificateRoute)
// app.use('/api/course', courseRoute)
// app.use('/api/exam', examRoute)
// app.use('/api/result', resultRoute)


// app.use('/api/accountHistory', accountHistoryRoute)
// app.use('/api/certReceived', certReceivedRoute)
// app.use('/api/certificateHistory', certificateHistoryRoute)
// app.use('/api/examHistory', examHistoryRoute)
// app.use('/api/courseHistory', courseHistoryRoute)
// app.use('/api/resultHistory', resultHistoryRoute)