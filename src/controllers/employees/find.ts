import { Request, Response } from 'express';
import { empleados } from '../../fakeData/empleados.json';
import { Employee } from "../../models/Employee";

//Buscar por id
export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const foundEmployee: Employee = empleados.find(e => e.id === id);

    if(!foundEmployee) {
        return res.sendStatus(404);
    }
    
    res.status(200).json(foundEmployee);
}