import './App.css';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './utils/ProtectedRoute';
import { lookInSession } from './utils/sessions';
import About from './pages/About';
import Admission from './pages/Admission';
import Faculty from './pages/Faculty';
import Affiliation from './pages/Affiliation';

function App() {
  const [userAuth, setUserAuth] = useState();

  const access_token = lookInSession('token');

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/affliation" element={<Affiliation />} />

          <Route
            path="/admin-login"
            element={
              access_token ? <Navigate to="/dashboard" replace /> : <Login />
            }
          />

          <Route
            path="/admin-signup"
            element={
              access_token ? <Navigate to="/dashboard" replace /> : <Signup />
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
