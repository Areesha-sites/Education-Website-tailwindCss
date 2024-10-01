import { Button } from "@headlessui/react";
import { GraduationCapIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container min-w-full pt-[90px] bg-gradient-to-tl from-purple-200 to-purple-300 md:col-span-1 ">
        <div className="flex ml-10">
          <div className=" py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* ========Left Section========= */}
            <div>
              <p className=" inline-block rounded-full py-1 px-3 text-purple-700 font-semibold   bg-purple-100 shadow-lg shadow-purple-300 ">
                Feed Your Knowledge
              </p>
              <h1 className="font-semibold text-6xl py-4 text-gray-900 ">
                Develop Your skills with online
                <br />
                <span className="text-purple-700 flex items-center">
                  Courses
                  <GraduationCapIcon
                    className="ml-2"
                    size={32}
                  ></GraduationCapIcon>{" "}
                </span>
              </h1>
              <p className="py-1 ">
                Unlock your potential and enhance your skills with a wide range
                of online course designed by industry experts. Whether You are a
                beginner or looking to upgrade your Knowledge, our flexible and
                accessible learning platform empowers you to learn at your own
                pace, anytime and anywhere. Join Thousands of learners and take
                the next step in your personal and professional growth today.📚{" "}
                <br />
                <b>
                  <i>
                    "Learning never stops, and neither should your journey to
                    success." ♡
                  </i>
                </b>
              </p>

              <Button className=" bg-purple-700 text-white px-3 py-1 mt-2 mb-5 rounded-md hover:scale-105 hover:font-bold  text-sm font-semibold leading-6  duration-300  transition-transform hover:bg-white hover:text-purple-700 flex justify-center items-center">
                Get Started <MoveRightIcon className="ml-2"></MoveRightIcon>
              </Button>
            </div>
            {/* ========right section=========== */}
            <div className="flex justify-end">
              <Image
                src="/Fourth-Image.png"
                alt="Banner"
                height={600}
                width={600}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
