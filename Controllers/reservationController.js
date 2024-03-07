import { ReservationModel } from "../Models/reservationModel.js";
import { validateReservation } from "../Models/validations/validations.js";

export class ReservationController  {
    static async getAll(req, res) {
        try {
            const reservations = await ReservationModel.getAll()
            res.json(reservations)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static async createReservation(req, res) {
        try {
            const result = validateReservation(req.body)

            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

            const newReservation = await ReservationModel.createReservation({ object: result.data })
            res.status(201).json(newReservation)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}