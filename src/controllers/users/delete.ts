import { Request, Response } from 'express';
import { usuarios } from '../../fakeData/usuarios.json';

//Borrar usuarios
export default (req: Request, res: Response) => {
    const user = req.params.id;
    const index = usuarios.findIndex(u => u.id === user);
    
    if(index < 0) {
        return res.sendStatus(400);
    }

    usuarios.splice(index, 1)
    res.sendStatus(200);
}