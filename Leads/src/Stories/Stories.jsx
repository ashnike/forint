import React from "react";
import "./story.css";
function Stories() {
  return (
    <section id="story" className=" text-gray-600 body-font dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-left w-full mb-20">
          <h1 className="sm:text-2xl  text-xl font-medium title-font mb-4 text-white">
            Stories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="">
              <img
                className="rounded-xl ring-offset-4"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="w:1/2">
              <img
                className="rounded-xl  ring-offset-4"
                src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="">
              <img
                className="rounded-xl ring-offset-4"
                src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
