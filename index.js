import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { reservationRouter } from './Routes/reservationRouter.js';

const PORT = process.env.PORT || 5000
const connectionToDBURL = process.env.CONNECTION_URL

const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

app.use('/reservations', reservationRouter)

mongoose.connect(connectionToDBURL).then(() => {
    console.log('Connected to the database')
    app.listen(PORT, () => {})
}).catch((error) => {
    console.log(error.message)
})