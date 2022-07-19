import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const ShopNavbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.Cart);
  return (
    <>
      <nav class="bg-white shadow sticky top-0">
        <div class="container mx-auto px-8 py-4 md:flex md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <div>
              <Link
                class=" text-xl font-bold md:text-2xl text-gray-700 hover:text-gray-700 "
                to="/"
              >
                E-Shop
              </Link>
            </div>

            <div class="flex md:hidden">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="md:flex items-center">
            <div class="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/"
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                to="/shop"
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              >
                Shop
              </Link>
              <Link
                to="/"
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              >
                Contact
              </Link>
              <Link
                to="/"
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              >
                About
              </Link>
            </div>

            <div class="flex justify-center md:block">
              <a
                onClick={() => setOpenModal(true)}
                class="relative text-gray-700 hover:text-gray-600"
                href="#"
              >
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {cartTotalQuantity}
                  </span>
                </a>

                <span class="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {<Cart openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default ShopNavbar;
