import React from 'react';

const CallToAction = () => {
  return (
    <div className="font-[sans-serif] px-6 py-16 bg-gradient-to-t from-gray-200 via-gray-50 to-gray-50">
      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <p className="text-sm font-bold text-[#a91079] mb-4">
          <span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE WITH
          CERTITRACK
        </p>
        <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
          Elevate Your Certification Experience
        </h2>
        <div className="mt-8">
          <p className="text-base text-gray-500 leading-relaxed">
            Unlock the full potential of your academic achievements with
            CertiTrack. Verify your certificates seamlessly and access a range
            of features to manage your educational records effectively.
          </p>
        </div>

        <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-white pl-4 text-gray-800 text-sm"
          />
          <button
            type="button"
            className="bg-[#a91079] hover:bg-[#a91079] transition-all text-white text-sm rounded-full px-4 py-2.5"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
