import { Router } from 'express';

//Controllers
import userController from '../controllers/User';

//Middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index); //HAS NO USE, DID JUST TO SEE HOW IT WORKS
//router.get('/:id', userController.show);

router.post('/', userController.store); //userController.create makes the same
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/*
index -> list all users -> GET
store/creeate -> create a new user -> POST
delete -> delete a user -> DELETE
show -> show a user -> GET
update -> updatee a user -> PATCH or PUT
*/
