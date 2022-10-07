import { Router } from 'express';
import multer from 'multer';

import pictureController from '../controllers/Picture';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('picture'), pictureController.store);

export default router;
