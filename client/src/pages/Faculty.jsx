import React from 'react';

const facultyMembers = [
  {
    name: 'Dr. John Doe',
    title: 'Head of Computer Science',
    bio: 'Dr. John Doe has over 20 years of experience in the field of computer science and specializes in artificial intelligence and machine learning.',
    image:
      'https://www.skillreactor.io/blog/wp-content/uploads/2024/04/web-development-projects.jpg',
  },
  {
    name: 'Prof. Jane Smith',
    title: 'Associate Professor of Mathematics',
    bio: 'Prof. Jane Smith is an expert in applied mathematics with numerous publications in statistical analysis and data science.',
    image:
      'https://t3.ftcdn.net/jpg/05/82/16/78/360_F_582167861_fI1K0aGgWVnL8ZkfZwAyDUNWi6OjtlJj.jpg',
  },
  {
    name: 'Dr. Emily Johnson',
    title: 'Senior Lecturer in Physics',
    bio: 'Dr. Emily Johnson focuses on theoretical physics and has a passion for teaching and mentoring students.',
    image:
      'https://www.shutterstock.com/image-photo/programmer-woman-coding-on-computer-260nw-1986023957.jpg',
  },
];

const Faculty = () => {
  return (
    <section className="bg-white py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#a91079] text-center mb-12">
          Meet Our Faculty
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12">
          Our dedicated faculty members are here to guide you through your
          educational journey, providing support and expertise in various
          fields.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-[#a91079] mb-2">
                {member.name}
              </h3>
              <p className="text-gray-700 font-medium mb-1">{member.title}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Interested in Learning More?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to our faculty for any inquiries regarding courses,
            research opportunities, or mentorship.
          </p>
          <a
            href="/contact"
            className="px-6 py-2 bg-[#a91079] text-white font-semibold rounded-lg shadow-md hover:bg-[#b12e95] transition duration-300"
          >
            Contact Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
