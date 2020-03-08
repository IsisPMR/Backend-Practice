import listEmployees from '../controllers/employees/list';
import createEmployees from '../controllers/employees/create';
import updateEmployees from '../controllers/employees/update';
import deleteEmployees from '../controllers/employees/delete';
import findEmployees from '../controllers/employees/find';
import express, { Router } from 'express';
import employeesValidationSchema from '../middlewares/employees'
const router: Router = express.Router();

//Listar employees
router.get('/list', listEmployees);
 
//Crear employees
router.post('/create', [employeesValidationSchema], createEmployees);

//Actualizar employees
router.put('/update', [employeesValidationSchema], updateEmployees);

//Borrar employees
router.delete('/delete/:id', deleteEmployees);

//Buscar por id
router.get('/find/:id', findEmployees);

export default router;