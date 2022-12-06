import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
function Footer() {
  return (
    <section id="footer" className="p-2 dark:bg-gray-800 ">
      <div className="mb-2">
        <button className="text-center text-3xl absolute top-0 left-1/2 bg-blue-500 w-14 h-14 flex items-center justify-center -m-6 shadow-lg rounded-full">
          <div className="flex items-center">
            <GoPlus />
          </div>
        </button>
      </div>
      <footer class=" shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800">
        <ul className="px-4">
          <button className="p-2 bg-slate-800 text-slate-300 align-middle rounded-full hover:text-black hover:bg-white focus:outline-none ">
            <div className="flex items-center">
              <FaHome />
            </div>
          </button>
        </ul>

        <ul className="px-4">
          <button className="p-2 bg-slate-800 text-slate-300 align-middle rounded-full hover:text-black hover:bg-white focus:outline-none ">
            <div className="flex items-center">
              <FaUserAlt />
            </div>
          </button>
        </ul>
      </footer>
    </section>
  );
}

export default Footer;
