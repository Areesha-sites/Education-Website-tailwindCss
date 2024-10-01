import React from "react";
import { Button } from "@headlessui/react";
import { UserPenIcon } from "lucide-react";
const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-purple-200 to-purple-300 pb-12 py-12 px-12 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* heading */}
          <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900 sm:text-4xl ">
            Contact{" "}
            <span className="text-purple-700 ">
              Us{" "}
              <UserPenIcon
                className="ml-2 mb-3 inline-block text-3xl"
                size={34}
              />{" "}
            </span>
          </h2>
          <p className="mt-4 text-lg  text-gray-950 md:text-black">
            Have questions about our courses or need assistance? We are here to
            help! Reach out to us through form below, and we will get back to
            you as soon as possible. 💬
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <form action="" className="grid grid-cols-1 gap-y-6">
            <div className="">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="block w-full px-2 py-2 border bg-purple-100 rounded-md shadow-sm "
              />
            </div>
            <div className="">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email "
                className="block w-full px-2 py-2 border bg-purple-100 rounded-md shadow-sm "
              />
            </div>
            <div className="">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your Message"
                className="block w-full px-2 py-2 border bg-purple-100  rounded-md shadow-sm "
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <Button className=" bg-purple-700 text-white px-4 py-1 mt-2 rounded-md hover:scale-105 hover:font-bold  text-sm font-semibold leading-6  duration-300  transition-transform hover:bg-white hover:text-purple-700 ">
                Send Message
              </Button>
            </div>
          </form>
          <div className="mt-12 text-center text-gray-800">
            <p>You can also reach us at:</p>
            <p className="mt-2 text-purple-700 font-semibold">
              Email:{" "}
              <a
                href="mailto:contact@improveyourskills.com"
                className="text-gray-700 font-light hover:underline"
              >
                contact@improveyourskills.com
              </a>
            </p>
            <p className="mt-2 text-purple-700 font-semibold">
              Phone:
              <span className="text-gray-700 font-light"> +123 456 7890</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
