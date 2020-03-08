//Solo importaciones de las rutas y el controller
import express, { Application } from 'express';
import bodyParser from "body-parser";
import usersRouters from './routes/userRoutes';
import employeesRouters from './routes/employeesRoutes'
import authRouters from './routes/authRoutes';
import tokenValidator from './middlewares/token';

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

// User routes
app.use('/users', [tokenValidator, usersRouters]);

// Employee router
app.use('/employees', employeesRouters);

// Auth routes
app.use('/auth', authRouters);

export default app;