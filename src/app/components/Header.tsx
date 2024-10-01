"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-tl from-fuchsia-100 to-slate-50 pt-0 mt-8 ">
      <header className="absolute top-0 left-0 w-full bg-purple-100 z-50 shadow-md">
        <nav
          aria-label="Global"
          className="container flex items-center justify-between p-6 "
        >
          {/* ==============logo section============================ */}
          <div className="flex lg:flex-auto ">
            <Link href="/" className="-m-1.5 p-1.5 ">
              <Image
                src="/logo.png"
                alt="Education-logo"
                height={130}
                width={130}
              ></Image>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
            >
              Courses
            </Link>

            <Link
              href="/newsletter"
              className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
            >
              NewsLetter
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-purple-700 hover:border-b-2 hover:border-purple-400 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* ===============Shopping Cart and User Icon=============== */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
            <FaSearch
              size={20}
              className="text-purple-700 cursor-pointer hover:scale-125 transition-all duration-300"
              title="Search-Bar"
            ></FaSearch>
            <FaUserCircle
              size={20}
              className="text-purple-700 cursor-pointer hover:scale-125 transition-all duration-300"
              title="User"
            ></FaUserCircle>
            <FaBell
              size={20}
              className="text-purple-700 cursor-pointer hover:scale-125 transition-all duration-300"
              title="Notification"
            ></FaBell>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/logo.png"
                  alt="Education-logo"
                  height={130}
                  width={130}
                ></Image>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-y-5">
                  <Link
                    href="/"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-b-[#7E60BF] transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-b-[#7E60BF] transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/classes"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-b-[#7E60BF] transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </Link>

                  <Link
                    href="/newsletter"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-b-[#7E60BF] transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    NewsLetter
                  </Link>

                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-b-[#7E60BF] transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="flex justify-center gap-x-6 mt-4">
                  <FaSearch
                    size={20}
                    className="text-purple-700 cursor-pointer hover:scale-125 transition-all duration-300"
                  ></FaSearch>
                  <FaUserCircle
                    size={20}
                    className="text-purple-700 cursor-pointer hover:scale-125 transition-all duration-300"
                  ></FaUserCircle>
                  <FaBell
                    size={20}
                    className="text-purple-700 cursor-pointer hover:scale-125 transition-all duration-300"
                  ></FaBell>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
