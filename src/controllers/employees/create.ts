import { Request, Response } from 'express';
import { empleados } from '../../fakeData/empleados.json';
import { Employee } from "../../models/Employee";

//Crear usuario
export default (req: Request, res: Response) => {
    const employee: Employee = req.body;
    empleados.push(employee);
    res.status(201).json(employee);
}