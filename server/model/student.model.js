import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  certificateId: { type: String, required: true },
  studentName: { type: String, required: true },
  internshipDomain: { type: String, required: true },
  startingDate: { type: Date, required: true },
  endingDate: { type: Date, required: true },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
