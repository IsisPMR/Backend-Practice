import express, { Router } from 'express';
import login from '../controllers/auth/login';
import Credentials from '../middlewares/credentials';

const router: Router = express.Router();

//Login route
router.post('/login', [Credentials, login]);

export default router;