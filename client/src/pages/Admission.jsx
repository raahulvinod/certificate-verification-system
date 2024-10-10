import React from 'react';

const Admission = () => {
  return (
    <section className="bg-white py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#a91079] text-center mb-12">
          Admissions at CertiTrack
        </h2>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to CertiTrack Admissions
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            At CertiTrack, we are excited to welcome new students into our
            community. Our admissions process is designed to be straightforward
            and accessible to ensure that every qualified applicant has the
            opportunity to join us.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions (FAQs)
          </h3>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">
                What is the application deadline?
              </h4>
              <p className="text-gray-600">
                The application deadline for the upcoming academic year is June
                30th.
              </p>
            </div>
            <div className="border p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">
                Can I apply if I don't have all my documents ready?
              </h4>
              <p className="text-gray-600">
                Yes, you can submit your application and provide the remaining
                documents later, but please ensure to complete your application
                before the final deadline.
              </p>
            </div>
            <div className="border p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">
                Is there an application fee?
              </h4>
              <p className="text-gray-600">
                Yes, there is a non-refundable application fee of Rs 500.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Ready to Apply?
          </h3>
          <p className="text-gray-600 text-lg text-center mb-4">
            Take the first step toward joining CertiTrack by completing your
            application today! We look forward to welcoming you into our
            community.
          </p>
          <div className="flex justify-center">
            <a
              href="/apply"
              className="px-6 py-2 bg-[#a91079] text-white font-semibold rounded-lg shadow-md hover:bg-[#b12e95] transition duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
