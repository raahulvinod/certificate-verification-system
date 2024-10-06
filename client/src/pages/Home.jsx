import React from 'react';

const Home = () => {
  return (
    <div className="font-sans">
      <div className="mt-12 flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
              Welcome to Certify
            </h2>
            <p className="text-sm mt-6 text-gray-800">
              Discover a world of knowledge and opportunities. Join us to
              elevate your education and achieve your dreams.
            </p>
            <p className="text-sm mt-12 text-gray-800">
              Already a student?{' '}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Log in to your account
              </a>
            </p>
          </div>

          <div className="max-w-md md:ml-auto w-full bg-gray-100 p-6 rounded-lg shadow-md">
            <form>
              <h3 className="text-gray-800 text-3xl mb-8 font-normal">
                Student Login
              </h3>

              <div className="space-y-4">
                <div>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-white w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-white w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
