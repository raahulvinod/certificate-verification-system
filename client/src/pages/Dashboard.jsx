import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FaBars, FaUpload, FaCertificate, FaHome } from 'react-icons/fa';
import UploadField from '../components/UploadField';
import toast from 'react-hot-toast';
import { UserContext } from '../context/UserContext';
import Students from '../components/Students';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [uploadStatus, setUploadStatus] = useState('');

  const { userAuth } = useContext(UserContext);
  const access_token = userAuth?.access_token;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_DOMAIN}/students/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setUploadStatus('Upload successfull');
        toast.success('Upload successfull.');
        console.log('Upload successful', response.data);
      } catch (error) {
        toast.error(error.response.data.message);
        setUploadStatus('Upload failed. Please try again.');
        console.error('Upload failed', error);
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return (
          <div>
            <UploadField handleFileChange={handleFileChange} />
            {uploadStatus && (
              <p className="mt-4 text-red-500">{uploadStatus}</p>
            )}
          </div>
        );
      case 'viewStudents':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">View Students</h2>
            <Students />
          </div>
        );
      case 'studentPortal':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Student Portal Dashboard</h2>
            <p>
              Welcome to the student portal. Here you can access your data, view
              reports, and manage your certificates.
            </p>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">
              Select an option from the sidebar
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex">
      <div
        className={`bg-gray-800 text-white ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          <h1 className={`text-lg font-bold ${isSidebarOpen ? '' : 'hidden'}`}>
            Dashboard
          </h1>
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
        <ul className="space-y-4 py-6 px-4">
          <li
            className={`cursor-pointer hover:bg-gray-700 p-3 rounded flex items-center space-x-2 ${
              activeTab === 'upload' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveTab('upload')}
          >
            <FaUpload size={20} />
            {isSidebarOpen && <span>Upload Data</span>}
          </li>
          <li
            className={`cursor-pointer hover:bg-gray-700 p-3 rounded flex items-center space-x-2 ${
              activeTab === 'viewStudents' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveTab('viewStudents')}
          >
            <FaCertificate size={20} />
            {isSidebarOpen && <span>View Students</span>}
          </li>
          <li
            className={`cursor-pointer hover:bg-gray-700 p-3 rounded flex items-center space-x-2 ${
              activeTab === 'studentPortal' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveTab('studentPortal')}
          >
            <FaHome size={20} />
            {isSidebarOpen && <span>Student Portal</span>}
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-gray-100 p-6">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
