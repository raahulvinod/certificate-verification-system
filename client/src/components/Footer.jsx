const Footer = () => {
  return (
    <footer className="text-gray-900 bg-gray-300 py-6 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">
          © 2024 CertiTrack. All rights reserved.
        </p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li>
            <a href="/" className="text-[15px] hover:text-white">
              Academic Calendar
            </a>
          </li>
          <li>
            <a href="/" className="text-[15px] hover:text-white">
              Student Handbook
            </a>
          </li>
          <li>
            <a href="/" className="text-[15px] hover:text-white">
              Admissions
            </a>
          </li>
          <li>
            <a href="/" className="text-[15px] hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[14px]">Certitrack.com</p>
        <p className="text-[14px]">
          Phone: (123) 456-7890 | Email: info@certiTrack.edu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
