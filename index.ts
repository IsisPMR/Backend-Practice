import express, { Application } from 'express';
import entryPoint from './src/app';
import { constants } from './src/config/constants';

const app: Application = express();

// entry point
app.use(entryPoint);

//Se levanta el servidor
app.listen(constants.port, () => {
    console.log("Servidor Iniciado " + constants.port);
});