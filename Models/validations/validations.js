import z from 'zod';

const reservationValidation = z.object({
    name: z.string({ required_error: 'Name is required', invalid_type_error: 'Name must be a string' }),
    selectedVenue: z.number({ required_error: 'Selected venue is required', invalid_type_error: 'Selected venue must be a string' }),
    initialDate: z.string({ required_error: 'Initial date is required', invalid_type_error: 'Initial date must be a string' }),
    finalDate: z.string({ required_error: 'Final date is required', invalid_type_error: 'Final date must be a string' }),
    amountPeople: z.number({ required_error: 'Amount of people is required', invalid_type_error: 'Amount of people must be a number' }),
    email: z.string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' }),
})

export function validateReservation (object) {
    return reservationValidation.safeParse(object)
}

export function validatePartialReservation (object) {
    return reservationValidation.partial().safeParse(object)
}