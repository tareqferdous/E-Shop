import React from "react";

const About = () => {
  return (
    <div>
      <header class="bg-white dark:bg-gray-800">
        <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
              <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
              <h1
                style={{ color: "#3d405b", lineHeight: "1.25" }}
                class="text-3xl font-medium tracking-wide dark:text-white md:text-4xl mb-2"
              >
                Shopping Made Easier
              </h1>
              <h3 className="text-xl font-medium tracking-wide text-gray-600 dark:text-white md:text-2xl">
                We've designed the best shopping experience.
              </h3>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
              <div class="mt-6">
                <a
                  style={{ background: "#354f52" }}
                  href="#"
                  class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <div class="w-full max-w-sm p-4 bg-gray-800 rounded-md shadow-md sm:p-6">
              <div class="flex items-center justify-center">
                <span class="text-xl font-medium text-gray-100">
                  Contact Our Team
                </span>
              </div>
              <form class="mt-4">
                <label for="password" class="block mt-3">
                  <span class="text-sm text-gray-100">Name</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    class="block w-full px-3 py-2 mt-1 text-gray-700 bg-white rounded-md focus:outline-none border-1 border-gray-800 focus:shadow-outline focus:bg-white"
                    required
                  />
                </label>
                <label for="email" class="block">
                  <span class="text-sm text-gray-100 mt-1">Email</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    class="block w-full px-3 py-2 mt-2 text-gray-700 bg-white rounded-md focus:outline-none border-1 border-gray-800 focus:shadow-outline focus:bg-white"
                    required
                  />
                </label>

                <label for="email" class="block">
                  <span class="text-sm text-gray-100 mt-1">Message</span>
                  <textarea
                    type="text"
                    placeholder="Message"
                    class="h-24 text-base block w-full px-3 py-2 mt-2 text-gray-700 bg-white rounded-md border-1 border-gray-800 focus:outline-none focus:shadow-outline focus:bg-white"
                  ></textarea>
                </label>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white rounded-md bg-indigo-700 focus:outline-none focus:bg-indigo-700 "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default About;
