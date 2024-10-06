import React from 'react';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r from-green-500 to-green-700 px-8 py-12 h-[400px]">
        <div>
          <div className="max-w-lg mt-16 max-lg:hidden">
            <h3 className="text-3xl font-bold text-white">Sign up</h3>
            <p className="text-sm mt-4 text-white">
              Create an account, this only selected mentors can create this
              account. After this creation, we will verify you, and you will be
              allotted membership to be able to log in.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form onSubmit={handleSignup}>
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-gray-800">Sign up</h3>
            </div>
            <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
              <button
                type="button"
                className="py-2.5 px-4 text-sm font-semibold rounded-md text-green-500 bg-green-100 hover:bg-green-200 focus:outline-none"
                onClick={handleGoogleSignIn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="inline mr-4"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Full Name
              </label>
              <div className="relative flex items-center">
                <input
                  name="fullname"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-2 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">
                Mobile Number
              </label>
              <div className="relative flex items-center">
                <input
                  name="mobileNumber"
                  type="tel"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-2 rounded-lg"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">
                User ID (Email)
              </label>
              <div className="relative flex items-center">
                <input
                  name="userId"
                  type="email"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-2 rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-2 rounded-lg"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full text-center py-2 px-4 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <a href="/admin-login" className="text-green-600 font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
