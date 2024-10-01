import { FolderLockIcon, LockIcon, MailIcon } from "lucide-react";
import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="bg-gradient-to-tl from-purple-200 to-purple-300 pb-12 mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-2 ">
          <div className="mx-auto max-w-screen-md sm:text-center pt-20">
            <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900 sm:text-4xl">
              Sign Up For Our{" "}
              <span className="text-purple-700 ">
                News Letter <div className="inline-block text-3xl"> 📰</div>
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-900 md:mb-12 sm:text-lg ">
              Stay updated with the latest courses, expert tips, and special
              offers. Sign up for our newsletter to enhance your learning
              journey and never miss our on exciting oppertunities.📬
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm fonr-medium text-gray-900 "
                  >
                    Email Address
                  </label>

                  <div className="flex absolute inset-y-0 letf-0 items-center pl-3 pointer-events-none">
                    <MailIcon className="text-purple-700"></MailIcon>
                  </div>
                  <input
                    type="email"
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-purple-100 rounded-lg border-purple-300 sm:rounded-none sm:rounded-l-lg "
                    placeholder="Enter our email"
                    id="email"
                    required
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-7 w-full text-sm font-semibold text-center text-white rounded-lg cursor-pointer bg-purple-700  sm:rounded-none sm:rounded-r-lg hover:bg-white hover:text-purple-700 transition-all "
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center space-x-2 justify-center text-sm text-gray-600 mt-10">
              <span className="flex items-center">
                <FolderLockIcon className="text-purple-700 cursor-pointer hover:scale-105 transition-transform"></FolderLockIcon>
                <span className="ml-2">We respect your privacy.</span>
              </span>

              <span className="flex items-center">
                <LockIcon className="text-purple-700 cursor-pointer hover:scale-105 transition-transform"></LockIcon>
                <span className="ml-2">No spam, unsubscribe anytime.</span>
              </span>
            </div>
          </div>
          <div>
            <img
              src="/support2.png"
              alt="boy-image"
              height={1000}
              width={1000}
              className="pt-6 object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
