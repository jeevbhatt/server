import express, { Router } from 'express';
import AuthController from '../../../controller/globals/auth/authController';
import{ Request, Response } from 'express';

const router: Router = express.Router();

// Wrap async controller to handle errors
router.route('/auth/register')
  .post((req: Request, res: Response) => {
    AuthController.registerUser(req, res);
  });
router.route("/auth/login").post((req: Request, res: Response) => {
  AuthController.loginUser(req, res);
});

export default router;
export { router as authRouter };
