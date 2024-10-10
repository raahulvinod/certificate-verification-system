import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Students = () => {
  const { userAuth } = useContext(UserContext);
  const access_token = userAuth?.access_token;
  const [studentData, setstudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        setstudentData(data);
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
      setstudentData((prevData) =>
        prevData.filter((student) => student._id !== studentId)
      );
    } catch (error) {
      console.error('Error deleting student:', error);
    }
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
        ) : studentData.length > 0 ? (
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
                {studentData.map((student) => (
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
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5"
                          viewBox="0 0 348.882 348.882"
                        >
                          <path d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z" />
                          <path d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z" />
                        </svg>
                      </button>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(student._id)}
                        className="text-red-500 hover:text-red-700 transition duration-150"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No students found.</p>
        )}
      </div>
    </div>
  );
};

export default Students;
