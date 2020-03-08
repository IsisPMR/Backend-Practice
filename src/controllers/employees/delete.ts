import { Request, Response } from 'express';
import { empleados } from '../../fakeData/empleados.json';

//Borrar usuarios
export default (req: Request, res: Response) => {
    const employe = req.params.id;
    const index = empleados.findIndex(u => u.id === employe);
    
    if(index < 0) {
        return res.sendStatus(400);
    }

    empleados.splice(index, 1)
    res.sendStatus(200);
}