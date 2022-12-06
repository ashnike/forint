import React from "react";

import { VscBellDot } from "react-icons/vsc";
import { SiGooglemessages } from "react-icons/si";
function Navbar() {
  return (
    <section className="nav">
      <nav className=" px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Sasmad
          </h2>
          <div className="flex p-2">
            <ul className="px-4">
              <button className="p-2 bg-slate-800 text-slate-300 align-middle rounded-full hover:text-black hover:bg-white focus:outline-none ">
                <div className="flex items-center">
                  <VscBellDot />
                </div>
              </button>
            </ul>
            <ul>
              <button className="p-2 bg-slate-800 text-slate-300 align-middle rounded-full  hover:text-black hover:bg-white focus:outline-none ">
                <div className="flex items-center">
                  <SiGooglemessages />
                </div>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
