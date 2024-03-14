import { Reservation } from "./schema/reservationSchema.js";
import { sendEmail} from "./nodemailer/index.js";

export class ReservationModel {
    static async getAll() {
        const reservations = await Reservation.find({})
        return reservations
    }

    static async getOne({id}) {
        const reservation = await Reservation.findById(id)
        return reservation
    }

    static async createReservation({object}) {
        const newReservation = { ...object }
        const reservation = await Reservation.create(newReservation)
        await sendEmail({object})
        return reservation
    }

    static async deleteReservation({id}) {
        const reservation = await Reservation.findByIdAndDelete(id)
        return reservation
    }

    static async updateReservation({id, object}) {
        const reservation = await Reservation.findByIdAndUpdate(id, object, { new: true })
        return reservation
    }
}