import { useState } from 'react';
import CertificateRetrieval from '../components/CertificateRetrival';
import { Certificate } from '../components/Certificate';

import Modal from '../components/Modal';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setCertificateData(null);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="font-sans">
      <Banner />
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
              Track Your Certificate from Registered Universities
            </h2>
            <p className="text-sm mt-6 text-gray-800">
              Seamlessly verify your academic credentials and track certificates
              issued by trusted institutions. CertiTrack ensures accuracy,
              security, and instant access to your verified records.
            </p>
          </div>
          <CertificateRetrieval
            certificateData={certificateData}
            setCertificateData={setCertificateData}
            onShowModal={handleShowModal}
            onCloseModal={handleCloseModal}
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
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
