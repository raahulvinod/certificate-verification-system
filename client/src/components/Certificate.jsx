import React from 'react';
import MaterialSymbolsCheckSmallRounded from '../assets/MaterialSymbolsCheckSmallRounded';
import Polygon1 from '../assets/Polygon1';
import Vector from '../assets/Vector';
import signature from '../assets/signature.png';

export const Certificate = ({ certificateData }) => {
  return (
    <div className="relative w-[1440px] h-[860px] bg-gradient-to-br from-white to-[#FFEADC] overflow-clip rounded-[20px]">
      <div className="absolute left-[67px] top-[62px] w-[42px] h-[42px] rounded-full bg-[#D9D9D960] backdrop-blur-[70px]" />
      <Vector />

      <div className="absolute left-[303px] top-[178px] w-[835px] h-[504px] bg-white shadow-lg rounded-lg" />

      <div className="absolute left-[332px] top-[211px] w-[776px] h-[438px] border-2 border-[#F42A40] rounded-lg" />

      <p className="absolute left-[470px] top-[260px] text-5xl text-center font-bold text-black font-['PT_Serif']">
        Certificate of Completion
      </p>

      <p className="absolute left-[620px] top-[400px] text-4xl text-center font-bold text-[#2CA4C6] font-['PT_Serif']">
        {certificateData.studentName}
      </p>

      <p className="absolute left-[550px] top-[340px] text-2xl text-center font-normal text-black font-['PT_Serif']">
        This certificate is presented to
      </p>

      <div className="absolute left-[528px] top-[440px] w-96 h-0 border-t border-[#2CA4C6]" />

      <p className="absolute left-[458px] top-[458px] w-[526px] text-center text-base font-light text-black font-['Raleway']">
        has successfully completed an internship in{' '}
        <strong className="font-bold">
          {certificateData.internshipDomain}
        </strong>
      </p>

      <p className="absolute left-[458px] top-[498px] w-[526px] text-center text-base font-light text-black ">
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

      <p className="absolute left-[419px] top-[551px] text-xl font-normal text-black ">
        Date: {new Date().toLocaleDateString()}
      </p>

      {/* <p className="absolute left-[971px] top-[551px] text-xl font-normal text-black font-['Raleway']">
        Signature
      </p> */}

      <img
        src={signature}
        alt="Signature of Rahul Vinod"
        className="absolute left-[950px] top-[520px] w-[150px] h-auto"
      />
      <div className="absolute left-[940px] top-[560px]  font-normal text-black font-['Raleway']">
        <p className="text-sm">Advisory Board Member</p>
      </div>

      <div className="absolute left-[627px] top-[713px] w-[185.89px] h-[39px] bg-[#F42A40] rounded-[14px]" />

      <p className="absolute left-[672px] top-[719px] text-xl font-semibold text-white font-['Raleway']">
        Download
      </p>

      <div className="absolute left-[397px] top-[257px] w-[60.68px] h-[60.68px] bg-[#2CA4C6] rounded-full" />
      <div className="absolute left-[409.49px] top-[306.08px] w-[34.8px] h-[57.11px] bg-[#2CA4C6]" />
      <Polygon1 />
      <div className="absolute left-[405px] top-[265px] w-11 h-11 bg-white rounded-full" />
      <MaterialSymbolsCheckSmallRounded />
    </div>
  );
};
