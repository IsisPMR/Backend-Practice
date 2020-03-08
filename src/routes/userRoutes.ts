import listUsers from '../controllers/users/list';
import createUsers from '../controllers/users/create';
import updateUsers from '../controllers/users/update';
import deleteUsers from '../controllers/users/delete';
import findUsers from '../controllers/users/find';
import express, { Router } from 'express';
import userValidationSchema from '../middlewares/users'
const router: Router = express.Router();

//Listar usuarios
router.get('/list', listUsers);

//Crear usuario
router.post('/create', [userValidationSchema], createUsers);

//Actualizar usuario
router.put('/update', [userValidationSchema], updateUsers);

//Borrar usuarios
router.delete('/delete/:id', deleteUsers);

//Buscar por id
router.get('/find/:id', findUsers);

export default router;