import React from 'react';

const Banner = () => {
  return (
    <div className="flex items-center max-md:flex-col gap-6 bg-gradient-to-tr from-blue-700 to-purple-400 text-white px-6 py-3.5 rounded font-[sans-serif]">
      <p className="text-base flex-1 text-center">
        Exciting news! We have added new university certifications to
        CertiTrack. Verify and showcase your achievements with trusted
        institutions today!
      </p>
    </div>
  );
};

export default Banner;
