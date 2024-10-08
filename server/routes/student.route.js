// student.route.js
import express from 'express';
import { uploadStudentData } from '../controllers/student.controller.js';

const router = express.Router();

router.post('/upload', uploadStudentData);

export default router;
