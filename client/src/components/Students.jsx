import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import ConfirmationModal from './ConfirmationModal';
import toast from 'react-hot-toast';

const Students = () => {
  const { userAuth } = useContext(UserContext);
  const access_token = userAuth?.access_token;
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch students data
  useEffect(() => {
    const fetchStudents = async () => {
      if (!access_token) return;

      try {
        setLoading(true);
        const { data } = await axios.post(
          `${import.meta.env.VITE_SERVER_DOMAIN}/students`,
          {},
          {
            headers: { Authorization: `Bearer ${access_token}` },
          }
        );

        setStudentData(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch student details. Please try again later.');
        setLoading(false);
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [access_token]);

  // Handle student deletion
  const handleDelete = async (studentId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_DOMAIN}/students/${studentId}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      setStudentData((prevData) =>
        prevData.filter((student) => student._id !== studentId)
      );
      setIsModalOpen(false);
      toast.success('Student deleted successfully.');
    } catch (error) {
      toast.error('Error deleting student.');
      console.error('Error deleting student:', error);
    }
  };

  const confirmDelete = (studentId) => {
    setStudentToDelete(studentId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStudentToDelete(null);
  };

  // Pagination logic
  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
  const currentStudents = studentData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(studentData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col w-full container mx-auto xl:px-24 px-4 mb-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : currentStudents.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left text-xs font-semibold text-gray-800">
                    Certificate ID
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-800">
                    Student Name
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-800">
                    Internship Domain
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-800">
                    Starting Date
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-800">
                    Ending Date
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-800">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {currentStudents.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="p-4 text-sm text-gray-800">
                      {student.certificateId}
                    </td>
                    <td className="p-4 text-sm text-gray-800">
                      {student.studentName}
                    </td>
                    <td className="p-4 text-sm text-gray-800">
                      {student.internshipDomain}
                    </td>
                    <td className="p-4 text-sm text-gray-800">
                      {new Date(student.startingDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-sm text-gray-800">
                      {new Date(student.endingDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 flex space-x-2">
                      <button
                        title="Edit"
                        className="text-blue-500 hover:text-blue-700 transition duration-150"
                      ></button>
                      <button
                        title="Delete"
                        onClick={() => confirmDelete(student._id)}
                        className="text-red-500 hover:text-red-700 transition duration-150"
                      ></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-4 py-2 border rounded ${
                    currentPage === index + 1
                      ? 'bg-purple-700 text-white'
                      : 'bg-white text-purple-700'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No students found.</p>
        )}
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={() => {
          if (studentToDelete) {
            handleDelete(studentToDelete);
          }
        }}
      />
    </div>
  );
};

export default Students;
