import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);

export default router;