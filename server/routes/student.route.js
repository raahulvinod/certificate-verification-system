// student.route.js
import express from 'express';
import {
  retrieveCertificate,
  uploadStudentData,
} from '../controllers/student.controller.js';

const router = express.Router();

router.post('/upload', uploadStudentData);
router.get('/certificate/:certificateId', retrieveCertificate);

export default router;
