import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/cuser.js';
import { verifyAdmin, verifyToken , verifyUser} from '../ulits/verifyToken.js';
import { createError } from '../ulits/error.js';
 
 

const router = express.Router();

// //create
// router.post('/', createUser)


// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("you are logged in"); 
// })


// router.get("/checkuser/:id" , verifyUser , (req, res, next) => {
//     res.send("you are logged in and you can delete you account");
// })


// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete you all accounts");
// })


//update
router.put('/:id', verifyUser, updateUser)

//dalete
router.delete('/:id', verifyUser, deleteUser)

//get
router.get('/:id', verifyUser, getUser)

//get all
router.get('/', verifyAdmin, getUsers)




export default router; 