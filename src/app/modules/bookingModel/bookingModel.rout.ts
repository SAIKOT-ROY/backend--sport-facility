import express from 'express';
import { checkAvailabilityControler } from './bookingModel.controler';
import auth from '../../middlewars/authValidation';
import valideteRequest from '../../middlewars/valideteRequest';
import { bookingValidationSchema } from './bookingModel.validation';

const rout = express.Router();

rout.get('/check-availability', checkAvailabilityControler.checkAvailability);
rout.post('/bookings',
     auth('user'), 
     valideteRequest(bookingValidationSchema),
     checkAvailabilityControler.creatBookings);

rout.get('/bookings',
     checkAvailabilityControler.getAllBookings);

export const ChackAvailityRoutes = rout;