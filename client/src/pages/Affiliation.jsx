import React from 'react';

const affiliatedColleges = [
  {
    name: 'Indian Institute of Technology, Delhi',
    description:
      'One of the premier engineering institutes in India, known for its academic excellence and research facilities.',
  },
  {
    name: 'Indian Institute of Science, Bangalore',
    description:
      'A leading institution for advanced scientific and technological research, offering a range of postgraduate programs.',
  },
  {
    name: 'National Institute of Technology, Trichy',
    description:
      'A top-ranking NIT known for its engineering courses and a vibrant campus life.',
  },
  {
    name: 'Birla Institute of Technology and Science, Pilani',
    description:
      'A renowned private university offering a variety of undergraduate and postgraduate programs in engineering and science.',
  },
  {
    name: 'Jawaharlal Nehru University, Delhi',
    description:
      'A prestigious university known for its research and social sciences programs.',
  },
];

const Affiliation = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#a91079] text-center mb-12">
          Affiliated Colleges
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12">
          We are proud to be affiliated with some of the top institutions in
          India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {affiliatedColleges.map((college, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-[#a91079] mb-2">
                {college.name}
              </h3>
              <p className="text-gray-700 mb-4">{college.description}</p>
              <a
                href="/college-details" // Link to the college details page
                className="mt-4 inline-block px-4 py-2 bg-[#a91079] text-white font-semibold rounded-lg shadow-md hover:bg-[#b12e95] transition duration-300"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliation;
