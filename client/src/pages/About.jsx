import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#a91079] text-center mb-12">
          About CertiTrack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              At CertiTrack, our mission is to provide a seamless and secure
              platform for students and universities to manage and verify
              certificates. We strive to enhance transparency and trust in the
              educational process, ensuring that every certificate is easily
              accessible and verifiable.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              We envision a world where every educational achievement is
              recognized and verifiable, empowering students to showcase their
              skills and accomplishments effectively. Through innovation and
              technology, we aim to set new standards for certificate management
              in the education sector.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/VVFHHBP/Screenshot-342.png"
              alt="About CertiTrack"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Join Us Today!
          </h3>
          <p className="text-gray-600 text-lg text-center mb-4">
            Whether you are a student looking to manage your certificates or a
            university wanting to streamline your verification process,
            CertiTrack is here to help. Join us today and be part of the future
            of certificate management!
          </p>
          <div className="flex justify-center">
            <a
              href="/signup"
              className="px-6 py-2 bg-[#a91079] text-white font-semibold rounded-lg shadow-md hover:bg-[#b12e95] transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
