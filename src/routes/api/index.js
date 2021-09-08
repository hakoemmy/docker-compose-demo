import { Router } from 'express';
import userRoute from '../api/userRoute';

const router = Router();
router.use('/users', userRoute);
export default router;
