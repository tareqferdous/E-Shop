import React from "react";
import { Link, NavLink } from "react-router-dom";

const Hero = ({ data }) => {
  const { label, title, titleColored, description, image } = data;

  return (
    <div className="min-w-full relative flex flex-col-reverse py-12 h-full lg:h-screen lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p
                style={{ background: "#354f52" }}
                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full"
              >
                {label}
              </p>
            </div>
            <h2
              style={{ color: "#354f52" }}
              className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              {title}
              <span style={{ color: "#354f52" }} className="inline-block">
                {titleColored}
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">{description}</p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <NavLink
              style={{ background: "#354f52" }}
              to="/shop"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
