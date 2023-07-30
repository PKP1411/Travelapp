import express from 'express';
import Hotel from '../models/Hotel.js'; 
import { createError } from '../ulits/error.js';
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/chotel.js';
import { verifyAdmin } from '../ulits/verifyToken.js';

const router = express.Router();



//create 
router.post('/', verifyAdmin, createHotel)
router.put('/:id', verifyAdmin, updateHotel)


router.delete('/:id', verifyAdmin, deleteHotel)
 

router.get('/find/:id', getHotel)


router.get('/', getHotels)
router.get('/countByCity', countByCity)
router.get('/countByType', getHotel)



export default router; 