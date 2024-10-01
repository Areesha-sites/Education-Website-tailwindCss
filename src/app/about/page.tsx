import React from "react";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { AwardIcon, MoveRightIcon } from "lucide-react";
import { BookOpenIcon } from "lucide-react";
import TeamSection from "../components/TeamSection";
const About = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-purple-200 to-purple-300 pt-2 mt-14 ">
        <div className="container">
          <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-2  ">
            <div className="">
              <Image
                src="/MAIN-IMAGE.png"
                alt=""
                height={550}
                width={550}
              ></Image>
            </div>
            <div className="lg:ps-0  mt-16">
              <p className=" inline-block rounded-full py-1 px-3 text-purple-700 font-semibold   bg-purple-100 shadow-lg shadow-purple-300 ">
                What We Offer
              </p>
              <h1 className="text-5xl text-gray-900 py-4 font-semibold">
                Learn & Grow Your{" "}
                <span className="text-purple-700">SKILLS </span>
                From Anywhere
                <BookOpenIcon
                  className="ml-2 text-purple-600"
                  size={32}
                ></BookOpenIcon>
              </h1>
              <p className="py-1 text-center pr-9">
                Empower yourself with the flexibility to learn at your own pace,
                from any corner of the world. Our online couses are designed to
                fit seamlessly into your busy life, allowing you to acquire new
                skills and grow professionally without boundries. Whether you
                are at home, at work, or on the go, access expert-led courses
                anytime, anywhere, and take control of your future.💡
              </p>

              <div className="mt-5">
                <h3 className="text-xl font-bold text-purple-700 text-center">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-500">
                  To provide accessible, high-quality online education that
                  empowers individuals to achieve their goals and excel in their
                  careers.
                </p>
              </div>
              <div className="flex mt-5">
                <div className="flex items-center h-5  ">
                  <input type="checkbox" className="h-4 w-4 "></input>
                  <div className="ms-2 text-xl">
                    <label
                      htmlFor="helper-checkbox"
                      className="font-medium text-gray-900 text-xl    "
                    >
                      Commmitment To Excellence
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex items-center h-5  ">
                  <input type="checkbox" className="h-4 w-4 "></input>
                  <div className="ms-2 text-xl">
                    <label
                      htmlFor="helper-checkbox"
                      className="font-medium text-gray-900 text-xl    "
                    >
                      Collaborative Culture
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex items-center h-5 ">
                  <input type="checkbox" className="h-4 w-4 "></input>
                  <div className="ms-2 text-xl">
                    <label
                      htmlFor="helper-checkbox"
                      className="font-medium text-gray-900 text-xl"
                    >
                      Adaptability & Innovation
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex items-center h-5 ">
                  <input type="checkbox" className="h-4 w-4 "></input>
                  <div className="ms-2 text-xl pt-4">
                    <label
                      htmlFor="helper-checkbox"
                      className="font-medium text-gray-900 text-xl "
                    >
                      Continuous Learning
                    </label>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Button className="bg-purple-700 text-white px-3 py-1 mt-10 mr-11 relative -left-52 rounded-md hover:scale-105 hover:font-bold text-sm font-semibold leading-6  duration-300 transition-transform hover:bg-white hover:text-purple-700 flex justify-center items-center mx-auto md:mx-0 ">
                    Learn More <MoveRightIcon className="ml-2"></MoveRightIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-11 gap-7 ml-11">
            <h2 className=" text-3xl font-bold text-purple-800 flex justify-center items-center mb-7">
              Our Achievements
              <AwardIcon className="text-purple-700" size={34}></AwardIcon>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-0 mt-4 mb-5 md:ml-20 md:text-left">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600 ">500+</h3>
                <p className="text-base text-gray-500 mr-5">
                  Courses Available
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600 ">100%</h3>
                <p className="text-base text-gray-500">Student Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600 ">10,000+</h3>
                <p className="text-base text-gray-500">Student Enrolled</p>
              </div>
            </div>
          </div>
          <TeamSection></TeamSection>
        </div>
      </div>
    </>
  );
};

export default About;
