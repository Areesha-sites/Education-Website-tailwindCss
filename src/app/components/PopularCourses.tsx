import { FaClipboardCheck } from "react-icons/fa";
const PopularCourses = () => {
  const popularCourses = [
    {
      imgSrc: "/class5.jpg",
      title: "Data Science Bootcamp",
      description:
        "Learn data analysis, visualization, and machine learning techniques in this comprehensive bootcamp.",
      instructor: "Dr. Sarah Khan",
      duration: "8 Weeks",
      rating: 4.5,
    },
    {
      imgSrc: "/dev1.jpg",
      title: "Full-Stack Web Development",
      description:
        "Become a full-stack developer and master both front-end and back-end technologies.",
      instructor: "John Doe",
      duration: "10 Weeks",
      rating: 5.0,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">
        Popular Courses
      </h2>
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {popularCourses.map((course, index) => (
          <div
            key={index}
            className=" bg-purple-100 shadow-lg rounded-lg overflow-hidden text-center hover:scale-105 transition-all duration-300 cursor-pointer "
          >
            <img
              className="w-full h-64 object-cover"
              src={course.imgSrc}
              alt={course.title}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-700 italic mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className=" inline-block rounded-full py-1 px-3 text-purple-700 font-semibold   bg-purple-100 shadow-lg shadow-purple-300 ">
                  {course.duration}
                </span>
                <span className="text-yellow-500 text-2xl">
                  {"★".repeat(Math.round(course.rating))}
                </span>
              </div>
              <button className="block w-full bg-purple-700 text-white px-3 py-1 mt-2 rounded-md hover:scale-105 hover:font-bold text-center text-sm font-semibold leading-6 duration-300 transition-all hover:bg-white hover:text-purple-700">
                <span className="inline-flex items-center justify-center gap-2">
                  Enroll Now <FaClipboardCheck />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
