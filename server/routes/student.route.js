// student.route.js
import express from 'express';
import {
  getAllStudents,
  retrieveCertificate,
  uploadStudentData,
} from '../controllers/student.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/upload', verifyToken, uploadStudentData);
router.post('/', verifyToken, getAllStudents);

router.get('/certificate/:certificateId', retrieveCertificate);

export default router;
