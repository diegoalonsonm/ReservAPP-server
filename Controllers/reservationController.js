import { ReservationModel } from "../Models/reservationModel.js";
import {validatePartialReservation, validateReservation} from "../Models/validations/validations.js";

export class ReservationController  {
    static async getAll(req, res) {
        try {
            const reservations = await ReservationModel.getAll()
            res.json(reservations)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static async getById(req, res) {
        try {
            const reservation = await ReservationModel.getOne({ id: req.params.id })

            if (!reservation) return res.status(404).json({ message: "Reservation not found" })

            res.json(reservation)
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

    static async deleteReservation(req, res) {
        try {
            const reservation = await ReservationModel.deleteReservation({ id: req.params.id })

            if (!reservation) return res.status(404).json({ message: "Reservation not found" })
            
            res.json(reservation)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static async updateReservation(req, res) {
        try {
            const result = validatePartialReservation(req.body)

            if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) })

            const reservation = await ReservationModel.updateReservation({ id: req.params.id, object: result.data })

            if (!reservation) return res.status(404).json({ message: "Reservation not found" })

            res.json(reservation)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}