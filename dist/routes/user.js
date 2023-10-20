import { Router } from 'express';
import { getAllUsers, userDelete, userLogin, userSignup, } from '../controllers/user-controller.js';
import { loginValidator, signupValidator, validate, } from '../utils/validators.js';
const userRouter = Router();
userRouter.get('', getAllUsers);
userRouter.post('', await validate(signupValidator), userSignup);
userRouter.post('/login', await validate(loginValidator), userLogin);
userRouter.delete('', userDelete);
export default userRouter;
//# sourceMappingURL=user.js.map