import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import MaterialSymbolsCheckSmallRounded from '../assets/MaterialSymbolsCheckSmallRounded';
import Polygon1 from '../assets/Polygon1';
import signature from '../assets/signature.png';

export const Certificate = ({ certificateData, onClose }) => {
  return (
    <div className="relative w-[1000px] h-[600px] bg-gradient-to-br from-white to-[#FFEADC] rounded-[20px]">
      <button
        onClick={onClose}
        className="absolute left-[30px] top-[20px] w-[42px] h-[42px] rounded-full bg-[#D9D9D960] backdrop-blur-[70px] flex items-center justify-center"
      >
        <MdArrowBack className="text-red-500 w-6 h-6" />
      </button>
      {certificateData ? (
        <div>
          <div className="absolute left-[80px] top-[50px] w-[835px] h-[504px] bg-white shadow-lg rounded-lg" />

          <div className="absolute left-[110px] top-[80px] w-[776px] h-[438px] border-2 border-[#F42A40] rounded-lg" />

          <p className="absolute left-[250px] top-[110px] text-5xl text-center font-bold text-black font-['PT_Serif']">
            Certificate of Completion
          </p>

          <p className="absolute left-[400px] top-[230px] text-4xl text-center font-bold text-[#2CA4C6] font-['PT_Serif']">
            {certificateData.studentName}
          </p>

          <p className="absolute left-[360px] top-[180px] text-2xl text-center font-normal text-black font-['PT_Serif']">
            This certificate is presented to
          </p>

          <div className="absolute left-[335px] top-[270px] w-96 h-0 border-t border-[#2CA4C6]" />

          <p className="absolute left-[270px] top-[300px] w-[526px] text-center text-base font-light text-black font-['Raleway']">
            has successfully completed an internship in{' '}
            <strong className="font-bold">
              {certificateData.internshipDomain}
            </strong>
          </p>

          <p className="absolute left-[250px] top-[350px] w-[526px] text-center text-base font-light text-black ">
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

          <p className="absolute left-[150px] top-[450px] text-xl font-normal text-black ">
            Date : {new Date().toLocaleDateString()}
          </p>

          <img
            src={signature}
            alt="Signature of Rahul Vinod"
            className="absolute left-[700px] top-[430px] w-[150px] h-auto"
          />
          <div className="absolute left-[700px] top-[470px] font-normal text-black font-['Raleway']">
            <p className="text-sm">Advisory Board Member</p>
          </div>

          <button className="absolute left-[420px] top-[560px] w-[185.89px] h-[39px] bg-[#F42A40] rounded-[14px] flex items-center justify-center">
            <p className="text-xl font-semibold text-white font-['Raleway']">
              Download
            </p>
          </button>

          <div className="absolute left-[175px] top-[110px] w-[60.68px] h-[60.68px] bg-[#2CA4C6] rounded-full" />
          <div className="absolute left-[188px] top-[150px] w-[34.8px] h-[57.11px] bg-[#2CA4C6]" />
          <Polygon1 />
          <div className="absolute left-[183px] top-[117px] w-11 h-11 bg-white rounded-full" />
          <MaterialSymbolsCheckSmallRounded />
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
