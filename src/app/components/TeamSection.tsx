import React from "react";
import Image from "next/image";
const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Co-Founder 👑",
      Image: "/courses1.jpeg",
      bio: "Johnis a skilled educator with over 10 years of experience in online learning.",
    },
    {
      name: "Jane Smith",
      position: "Lead Instructor",
      Image: "/courses2.jpeg",
      bio: "Jane specializes in digital marketing and has helped thousands of students grow their skills.",
    },
    {
      name: "Sam Wilson",
      position: "Course Designer",
      Image: "/courses3.jpeg",
      bio: "Sam is passionate about creating engaging learning experience and course materials.",
    },
  ];

  return (
    <>
      <section className="py-10 bg-gradient-to-tr from-purple-200 to-purple-300">
        <div className="container mx-auto text-center bg-gradient-to-tr from-purple-200 to-purple-300 ">
          <h2 className="text-3xl font-bold text-purple-800 mb-5">
            <i> Meet Our Team💜</i>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" p-4 rounded-3xl shadow-purple-400 shadow-md bg-purple-100 m-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={member.Image}
                  alt={member.name}
                  width={400}
                  height={200}
                  className=" w-full h-auto"
                />
                <h3 className="text-xl font-semibold mt-3 text-purple-700">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.position}</p>
                <p className="mt-2 text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
