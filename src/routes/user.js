import { Router } from 'express';

//Controllers
import userController from '../controllers/User';

//Middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store); //userController.create makes the same
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> list all users -> GET
store/creeate -> create a new user -> POST
delete -> delete a user -> DELETE
show -> show a user -> GET
update -> updatee a user -> PATCH or PUT
*/
