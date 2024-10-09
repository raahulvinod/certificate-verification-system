import { useState } from 'react';
import CertificateRetrieval from '../components/CertificateRetrival';
import { Certificate } from '../components/Certificate';
import Cert from '../components/cert';
import Modal from '../components/Modal';

const Home = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setCertificateData(null);
  };

  const handleShowModal = () => {
    setShowModal(true);
    // if (certificateData) {
    //   setShowModal(true);
    // }
  };

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
          <CertificateRetrieval
            certificateData={certificateData}
            setCertificateData={setCertificateData}
            onShowModal={handleShowModal}
          />
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <Certificate
            certificateData={certificateData}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Home;
