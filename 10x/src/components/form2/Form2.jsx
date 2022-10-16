import React from "react";

function Form2() {
  return (
    <div className="container  bg-back-f2 min-h-fit">
      <div className="p-10 bg-nav-f2 flex-initial  ">
        <label className=" uppercase tracking-wide text-black text-xs font-bold  mx-2">
          Hello
        </label>
        <div className="inline-block relative w-64 mb-5 flex-start">
          <select className=" block appearance-none w-full bg-white border-1 border-white px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Salutation</option>
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
        {/* <h1 className="">
          {props.fname} &nbsp;{props.lname}
        </h1> */}
      </div>
      <section id="form2" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full border-2 border-purple-600  p-8 rounded">
                <h1 className="text-xl font-medium title-font text-violet-500 mb-12 text-center">
                  Please Select Topic of interest
                </h1>

                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full border-2 border-purple-600  p-8 rounded">
                <h1 className="text-xl font-medium title-font text-violet-500 mb-12 text-center">
                  Please Select Book of Interest
                </h1>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold mt-5 float-right py-2 px-4 border border-purple-700 rounded">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

export default Form2;
