import { Reservation } from "./schema/reservationSchema.js";

export class ReservationModel {
    static async getAll() {
        const reservations = await Reservation.find({})
        return reservations
    }

    static async createReservation({object}) {
        const newReservation = { ...object }
        const reservation = await Reservation.create(newReservation)
        return reservation
    }
}