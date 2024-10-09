import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import signature from '../assets/signature.png';
import logo from '../assets/preview.jpg';

export const Certificate = ({ certificateData, onClose }) => {
  const downloadCertificate = async () => {
    const certificate = document.getElementById('certificate');
    const canvas = await html2canvas(certificate);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height]);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${certificateData.studentName}_Certificate.pdf`);
  };

  return (
    <div className="relative w-[1000px] h-[600px] bg-gradient-to-br from-white to-[#FFEADC] rounded-[20px]">
      <button
        onClick={onClose}
        className="absolute left-[30px] top-[20px] w-[42px] h-[42px] rounded-full bg-[#D9D9D960] backdrop-blur-[70px] flex items-center justify-center"
      >
        <MdArrowBack className="text-red-500 w-6 h-6" />
      </button>
      {certificateData ? (
        <div className="flex flex-col items-center">
          <div className="p-8 bg-white" id="certificate">
            {/* Certificate Container */}
            <div className="relative w-[850px] h-[500px] bg-white shadow-lg rounded-lg p-8 border-4 border-[#2CA4C6] flex flex-col">
              {/* Logo  */}
              <div className="flex items-center mb-6">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[120px] h-auto px-2 ml-8"
                />
                <h1 className="text-center text-5xl font-bold text-black font-['PT_Serif']">
                  Certificate of Completion
                </h1>
              </div>

              <p className="text-2xl text-center text-black font-['PT_Serif']">
                This certificate is presented to
              </p>
              <h2 className="text-4xl text-center text-[#2CA4C6] font-bold mt-4 font-['PT_Serif']">
                {certificateData.studentName}
              </h2>
              <div className="border-t-2 border-[#2CA4C6] mx-auto my-4 w-1/2"></div>
              <p className="text-center text-lg text-black font-['Raleway']">
                has successfully completed an internship in{' '}
                <strong>{certificateData.internshipDomain}</strong>
              </p>
              <p className="text-center text-lg text-black mt-4">
                from{' '}
                <strong>
                  {new Date(certificateData.startingDate).toLocaleDateString()}
                </strong>{' '}
                to{' '}
                <strong>
                  {new Date(certificateData.endingDate).toLocaleDateString()}
                </strong>
                .
              </p>

              <div className="flex justify-between items-center mt-12">
                <p className="text-xl text-black">
                  Date: {new Date().toLocaleDateString()}
                </p>
                <div className="text-center">
                  <img
                    src={signature}
                    alt="Signature of Rahul Vinod"
                    className="w-[120px] h-auto"
                  />
                  <p className="text-sm mt-2">Advisory Board Member</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={downloadCertificate}
            className="mt-1 px-6 py-2 bg-[#F42A40] text-white text-xl font-semibold rounded-lg"
          >
            Download Certificate
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 animate-spin fill-orange-300 block mx-auto"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
              data-original="#000000"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
