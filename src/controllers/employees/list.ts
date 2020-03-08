import { Request, Response } from 'express';
import { empleados } from '../../fakeData/empleados.json';

//list users
export default (req: Request, res: Response) => {
    res.status(200).json(empleados);
}