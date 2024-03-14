import express from 'express';
import { ReservationController } from '../Controllers/reservationController.js';

export const reservationRouter = express.Router()

reservationRouter.get('/', ReservationController.getAll)
reservationRouter.get('/:id', ReservationController.getById)

reservationRouter.post('/', ReservationController.createReservation)

reservationRouter.delete('/:id', ReservationController.deleteReservation)

reservationRouter.put('/:id', ReservationController.updateReservation)