import './App.css';

import { Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  const [userAuth, setUserAuth] = useState();

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
