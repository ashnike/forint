import React from "react";
import { useState } from "react";
import Form2 from "../form2/Form2";

function Form1() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container p-2 bg-cus-ind flex sm:justify-center md:justify-center  xl:w-min xl:h-screen  lg:w-min lg:h-screen">
        <form className="p-2">
          <div className=" mx-3 mb-6 w-min ">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              First Name:{""}
            </label>
            <input
              className="appearance-none block w-full bg-white text-sm text-black border border-red-500 rounded py-3 px-2 mb-5 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="fname"
              value={state.fname}
              onChange={handleChange}
              placeholder="Please provide your First Name"
            />
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name:{""}
            </label>
            <input
              className="appearance-none block w-full bg-white text-sm text-black border border-gray-200 rounded py-3 px-2  mb-14 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="lname"
              value={state.lname}
              onChange={handleChange}
              placeholder="Please provide your Last Name"
            />
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              Choose your preferred option:
            </label>
            <div className="inline-block relative w-64 mb-14">
              <select className=" block appearance-none w-full bg-white border-1 border-white px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Gender Group</option>
                <option></option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 border-2 rounded-r-lg border-white bg-cus-ind text-white">
                <svg
                  className="fill-white h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full bg-white border-1 border-white  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Age Group</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 border-2 rounded-r-lg border-white bg-cus-ind text-white">
                <svg
                  className="fill-white h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form1;
