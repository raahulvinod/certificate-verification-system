import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Certificate } from './Certificate';

const CertificateRetrieval = ({ certificateData, setCertificateData }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      certificateId: '',
    },
    validationSchema: Yup.object({
      certificateId: Yup.string()
        .required('Certificate ID is required')
        .matches(/^[A-Z0-9]+$/, 'Must be uppercase letters and numbers'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_DOMAIN}/students/certificate/${
            values.certificateId
          }`
        );
        setCertificateData(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'An error occurred');
        setCertificateData(null);
      }
    },
  });

  const { errors, touched } = formik;

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    formik.setFieldValue('certificateId', value);
  };

  return (
    <div className="mt-6 w-full mx-auto rounded-lg">
      <div className="gap-14 sm:p-8 p-4 font-[sans-serif]">
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="space-y-4 max-lg:mt-4">
            <div className="px-4 py-2 w-1/2 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4">
              Enter Certificate ID
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              name="certificateId"
              placeholder="Enter Certificate ID"
              className={`w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079] ${
                touched.certificateId && errors.certificateId
                  ? 'border-red-500'
                  : ''
              }`}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              value={formik.values.certificateId}
              maxLength={10}
            />
            {touched.certificateId && errors.certificateId && (
              <p className="text-red-500">{errors.certificateId}</p>
            )}
            <button
              type="submit"
              className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Get certificate
            </button>
          </form>
          {errorMessage && (
            <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
          )}
          {/* {certificateData && <Certificate certificateData={certificateData} />} */}
        </div>
      </div>
    </div>
  );
};

export default CertificateRetrieval;
