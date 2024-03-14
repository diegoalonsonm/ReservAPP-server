import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        selectedVenue: {
            type: String,
            required: true
        },
        initialDate: {
            type: String,
            required: true
        },
        finalDate: {
            type: String,
            required: true
        },
        amountPeople: {
            type: Number,
            required: true
        }
    }
)

export const Reservation = mongoose.model('Reservation', reservationSchema)