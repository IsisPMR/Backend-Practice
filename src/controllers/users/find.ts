import { Request, Response } from 'express';
import { usuarios } from '../../fakeData/usuarios.json';
import { User } from "../../models/User";

//Buscar por id
export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const foundUser: User = usuarios.find(e => e.id === id);

    if(!foundUser) {
        return res.sendStatus(404);
    }
    
    res.status(200).json(foundUser);
}