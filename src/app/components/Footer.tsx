import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className=" bg-purple-100 shadow-md text-gray-800 py-8 pb-9">
        <div className="container mx-auto justify-between items-center">
          <div className="mb-4 sm:mb-0 ml-6">
            <Image
              src="/logo.png"
              alt="Website-logo"
              width={150}
              height={50}
            ></Image>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="text-center mb-4 sm:mb-0">
              <h3 className="text-2xl text-purple-700 font-semibold">
                Quick Links
              </h3>
              <ul className="mt-2 flex justify-between items-center space-x-5">
                <li className="">
                  {" "}
                  <Link
                    href="/"
                    className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
                  >
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
                  >
                    Courses
                  </Link>
                </li>

                <i>
                  {" "}
                  <Link
                    href="/newsletter"
                    className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
                  >
                    NewsLetter
                  </Link>
                </i>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
                  >
                    ContactUs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex justify-center sm:justify-start space-x-6 mt-4 sm:mt-0">
              <Link
                title="GitHub"
                target="_blank"
                href="https://github.com/Areesha-sites"
                className="hover:scale-125 transition-all duration-300 text-purple-700 shadow-2xl "
              >
                <FaGithub size={24}></FaGithub>
              </Link>
              <Link
                title="Instagram"
                target="_blank"
                href="https://www.instagram.com/zoxo_emmaaa/?hl=en"
                className="hover:scale-125 transition-all duration-300 text-purple-700"
              >
                <FaInstagram size={24}></FaInstagram>
              </Link>
              <Link
                title="Linkedin"
                target="_blank"
                href="https://WWW.linkedin.com/in/areesha-sattar-14b8832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:scale-125 transition-all duration-300 text-purple-700"
              >
                <FaLinkedinIn size={24}></FaLinkedinIn>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 border-t border-purple-700 pt-4 text-purple-500">
          <p>
            &copy; {new Date().getFullYear()} Improve Your Skills. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
