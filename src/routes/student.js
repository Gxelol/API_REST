import { Router } from 'express';
import studentController from '../controllers/Student';

const router = new Router();

router.get('/', studentController.index);

export default router;
