import multer from 'multer';
import xlsx from 'xlsx';
import Student from '../model/student.model.js';
import User from '../model/user.model.js';

// Configure multer for file uploads (memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.mimetype === 'application/vnd.ms-excel'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only Excel files are allowed.'), false);
    }
  },
}).single('file'); // Handle single file upload

// Helper function to handle the multer upload as a promise
const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

// Upload Excel data and save to MongoDB
export const uploadStudentData = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    // Wait for multer to process the file upload
    await multerUpload(req, res);

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Parse Excel file
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Validate and prepare the student data
    const students = data.map((row, index) => {
      const {
        certificateId,
        studentName,
        internshipDomain,
        startingDate,
        endingDate,
      } = row;

      if (
        !certificateId ||
        !studentName ||
        !internshipDomain ||
        !startingDate ||
        !endingDate
      ) {
        throw new Error(`Incomplete data in the sheet at row ${index + 2}`);
      }

      return new Student({
        certificateId,
        studentName,
        internshipDomain,
        startingDate: new Date(startingDate),
        endingDate: new Date(endingDate),
      });
    });

    await Student.insertMany(students);
    return res.status(200).json({ message: 'Data uploaded successfully' });
  } catch (error) {
    return res.status(500).json({ message: `Error: ${error.message}` });
  }
};

// Retrieve Certificate
export const retrieveCertificate = async (req, res) => {
  const { certificateId } = req.params;

  try {
    const student = await Student.findOne({ certificateId });

    if (!student) {
      return res.status(404).json({ message: 'Certificate not found.' });
    }

    res.status(200).json({
      certificateId: student.certificateId,
      studentName: student.studentName,
      internshipDomain: student.internshipDomain,
      startingDate: student.startingDate,
      endingDate: student.endingDate,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error retrieving certificate: ${error.message}` });
  }
};
