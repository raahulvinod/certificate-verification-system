import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { storeInSession } from '../utils/sessions';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();

  const { userAuth, setUserAuth } = useContext(UserContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_DOMAIN}/login`,
        values
      );

      if (response.status === 200) {
        toast.success('login successful!');
        navigate('/dashboard');
      }

      storeInSession('token', response.data.token);
      storeInSession('user', JSON.stringify(response.data.user));

      setUserAuth({
        ...response.data.user,
        access_token: response.data.token,
      });
    } catch (error) {
      console.error('Error logged in:', error.message);
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-12 h-[320px]">
        <div>
          <div className="max-w-lg mt-16 max-lg:hidden">
            <h3 className="text-3xl font-bold text-white">Sign in</h3>
            <p className="text-sm mt-4 text-white">
              Embark on a seamless journey as you sign in to your account.
              Unlock a realm of opportunities and possibilities that await you.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
            </div>
            <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
              <button
                type="button"
                className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none"
                onClick={handleGoogleSignIn}
              >
                {/* Google Sign-in Icon */}
                Sign in with Google
              </button>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <div className="relative flex flex-col">
                <input
                  name="email"
                  type="email"
                  className={`w-full text-sm text-gray-800 border ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } px-4 py-2 rounded-lg`}
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative flex flex-col">
                <input
                  name="password"
                  type="password"
                  className={`w-full text-sm text-gray-800 border ${
                    formik.touched.password && formik.errors.password
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } px-4 py-2 rounded-lg`}
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full text-center py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              Create ?{' '}
              <a href="/admin-signup" className="text-blue-600 font-semibold">
                signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
