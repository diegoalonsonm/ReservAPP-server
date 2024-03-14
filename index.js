import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { reservationRouter } from './Routes/reservationRouter.js';

const PORT = process.env.PORT || 5000
const connectionToDBURL = 'mongodb+srv://diegoalonsonm:ZAndAt7YprpPgu8t@cluster0.ub1cif4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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