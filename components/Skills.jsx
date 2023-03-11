import React from "react";

function Skills() {
  return (
    <section className="mx-auto max-w-3xl lg:px-0 px-5 mb-5">
      <h1 className="lg:text-3xl md:text-2xl text-lg font-bold ">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        <div>
          <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
            Languages
          </p>
          <div className="flex flex-row items-center justify-start">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="h-5 w-5 m5:h-5 md:w-5 lg:h-6 lg:w-6 mr-2"
            />
            <span className="text-gray-600 text-xs md:text-sm lg:text-lg">
              JavaScript
            </span>
          </div>
          <div
            className="flex flex-row items-center justify-start"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="h-5 w-5 m5:h-5 md:w-5 lg:h-6 lg:w-6 mr-2"
            />
            <span className="text-gray-600 text-xs md:text-sm lg:text-lg">
              TypeScript
            </span>
          </div>
          <div
            className="flex flex-row items-center justify-start"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="Python"
              className="h-5 w-5 m5:h-5 md:w-5 lg:h-6 lg:w-6 mr-2"
            />
            <span className="text-gray-600 text-xs md:text-sm lg:text-lg">
              Python
            </span>
          </div>
          <div
            className="flex flex-row items-center justify-start"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg"
              alt="Rust"
              className="h-5 w-5 m5:h-5 md:w-5 lg:h-6 lg:w-6 mr-2"
            />
            <span className="text-gray-600 text-xs md:text-sm lg:text-lg">
              Rust
            </span>
          </div>
          <div
            className="flex flex-row items-center justify-start"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
              alt="GO"
              className="h-5 w-5 m5:h-5 md:w-5 lg:h-6 lg:w-6 mr-2"
            />
            <span className="text-gray-600 text-xs md:text-sm lg:text-lg">
              Golang
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-xs md:text-sm lg:text-lg">Frontend</p>
        <p className="text-gray-600 text-xs md:text-sm lg:text-lg">Backend</p>
        <p className="text-gray-600 text-xs md:text-sm lg:text-lg">Devops</p>
      </div>
    </section>
  );
}

export default Skills;
