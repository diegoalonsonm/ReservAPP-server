import express from 'express';
import { ReservationController } from '../Controllers/reservationController.js';

export const reservationRouter = express.Router();

reservationRouter.get('/', ReservationController.getAll);

reservationRouter.post('/', ReservationController.createReservation);