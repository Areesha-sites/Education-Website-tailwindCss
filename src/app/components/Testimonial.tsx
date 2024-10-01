import React from "react";
import { Button } from "@headlessui/react";
import { ChevronRight, MessageCircleHeart } from "lucide-react";
const Testimonial = () => {
  return (
    <>
      <div className="container mt-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className=" inline-block rounded-full py-1 px-3 text-purple-700 font-semibold  bg-purple-100 shadow-lg shadow-purple-300 ">
            Testimonials
          </p>
          <h1 className="font-semibold text-4xl py-4 text-gray-900 ">
            What Our Students Say About
            <br />
            <span className="text-purple-700 flex items-center ">
              Courses{" "}
              <MessageCircleHeart
                className="ml-2"
                size={32}
              ></MessageCircleHeart>
            </span>
          </h1>
          <img
            src="/girl.png"
            alt=""
            height={200}
            width={200}
            className="rounded-full"
          />
          <h1 className="font-semibold italic py-2 text-2xl text-purple-700 ">
            Areesha
          </h1>
          <p className="max-w-4xl text-center py-2 text-gray-900">
            <i>Our Students</i> success is our top priority. Each testimonial
            you see here reflects the hard work, dedication, and growth od
            individuals who have taken our courses. These stories are proof of
            the transformative impact our programs have on careers, skills, and
            personal development. We hbelieve in nurturing potential, and our
            students achievements inspire us to keep delivering the best
            educational experience possible. ⋆｡°✩
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="hidden sm:block -space-x-2 overflow-hidden">
              <img
                src="/courses1.jpeg"
                alt=""
                className=" inline-block h-12 w-12 rounded-full ring-0 ring-purple-100"
              />
              <img
                src="/courses3.jpeg"
                alt=""
                className=" inline-block h-12 w-12 rounded-full ring-1 ring-purple-100"
              />
              <img
                src="/testimonial.png"
                alt=""
                className=" inline-block h-12 w-12 rounded-full ring-1 ring-purple-100"
              />
              <img
                src="/girl.png"
                alt=""
                className=" inline-block h-12 w-12 rounded-full ring-1 ring-purple-100"
              />
              <img
                src="/Fourth-Image.png"
                alt=""
                className=" inline-block h-12 w-12 rounded-full ring-1 ring-purple-100"
              />
            </div>
            <div className="boder-none sm:border-l-2 border-black sm:pl-8">
              <div className="flex justify-center sm:justify-start">
                <h3 className="text-3xl font-semibold text-gray-900 mr-2">
                  4.6
                </h3>
                <i className="bx bxs-star w-5 text-yellow-400"></i>
              </div>
            </div>
            <h3 className="text-sm text-gray-900">Rated by 25k on google.</h3>
          </div>
          <Button className=" bg-purple-700 text-white px-3 py-1 mt-10 relative -left-7  rounded-md hover:scale-105 hover:font-bold  text-sm font-semibold leading-6  duration-300  transition-transform hover:bg-white hover:text-purple-700 flex justify-center items-center ">
            Read More <ChevronRight></ChevronRight>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
