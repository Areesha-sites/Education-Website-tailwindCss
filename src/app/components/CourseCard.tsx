import Link from "next/link";
import { FaClipboardCheck } from "react-icons/fa";
const CourseCard = () => {
  const courses = [
    {
      imgSrc: "/class1.png",
      title: "Master Python for Web Development",
      description:
        "Learn Python from scratch and build dynamic web applications. Perfect for beginners looking to step into web development.",
      duration: "8 weeks",
      level: "Beginner",
    },
    {
      imgSrc: "/class2.png",
      title: "Javascript Essentials",
      description:
        "Dive into the fundamentals of Javascript and discover how to create interactive web pages. Ideal for those new to web development.",
      duration: "6 weeks",
      level: "Advance",
    },
    {
      imgSrc: "/class3.png",
      title: "React for Beginners",
      description:
        "Explore the world of React.js and learn how to build scalable, efficient, and powerful modern, dynamic user interfaces for your web applications.",
      duration: "10 weeks",
      level: "Intermediate",
    },
    {
      imgSrc: "/class4.png",
      title: "Next for beginners",
      description:
        "Enhance your Next.js skills with advanced programming concepts and frameworks. perfect for those looking to deepen their knowledge.",
      duration: "12 weeks",
      level: "Intermediate",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="max-w-sm mx-auto bg-purple-100 shadow-lg rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer "
        >
          <img
            src={course.imgSrc}
            alt={course.title}
            className="w-full h-28 object-contain "
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className=" inline-block rounded-full py-1 px-3 text-purple-700 font-semibold   bg-purple-100 shadow-lg shadow-purple-300 ">
                {course.duration}
              </span>
              <span className="text-gray-500 font-semibold">
                {course.level}
              </span>
            </div>
            <div className="mt-4">
              <Link
                href={`/courses/${course.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="block w-full bg-purple-700 text-white px-3 py-1 mt-2 rounded-md hover:scale-105 hover:font-bold text-center text-sm font-semibold leading-6 duration-300 transition-all hover:bg-white hover:text-purple-700"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  Enroll Now <FaClipboardCheck />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CourseCard;
