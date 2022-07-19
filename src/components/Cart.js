import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  addToCart,
  decreaseCartQuantity,
  getTotals,
  removeFromCart,
} from "../store/cartSlice";

const Cart = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    return () => dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCartQuantity(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };

  const cart = useSelector((state) => state.Cart);
  const { cartTotalAmount } = useSelector((state) => state.Cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      {openModal && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Close panel</span>

                            <svg
                              onClick={() => setOpenModal(false)}
                              className="h-6 w-6"
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
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {cart.cartItems.length === 0 ? (
                        <div>
                          <h3>Your cart is currently empty</h3>
                          <Link to="/shop">Start Shopping</Link>
                        </div>
                      ) : (
                        <>
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {cart.cartItems?.map((item) => {
                                  return (
                                    <li key={item.key} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={item.img}
                                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href="#"> {item.name} </a>
                                            </h3>
                                            <p className="ml-4">
                                              ${item.price * item.cartQuantity}
                                            </p>
                                          </div>
                                        </div>

                                        <div className="flex flex-1 items-end justify-between text-sm mt-2">
                                          <div class="custom-number-input h-10 w-24 border-1 border-gray-300">
                                            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
                                              <button
                                                data-action="decrement"
                                                class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                              >
                                                <span
                                                  onClick={() =>
                                                    handleDecreaseCart(item)
                                                  }
                                                  class="m-auto text-2xl font-thin"
                                                >
                                                  −
                                                </span>
                                              </button>
                                              <input
                                                type="text"
                                                class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                                name="custom-input-number"
                                                value={item.cartQuantity}
                                              ></input>
                                              <button
                                                data-action="increment"
                                                class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                              >
                                                <span
                                                  onClick={() =>
                                                    handleIncreaseCart(item)
                                                  }
                                                  class="m-auto text-2xl font-thin"
                                                >
                                                  +
                                                </span>
                                              </button>
                                            </div>
                                          </div>

                                          <div className="flex">
                                            <button
                                              onClick={handleAddToCart(item)}
                                              type="button"
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{cartTotalAmount}</p>
                      </div>

                      {cart?.cartItems.length > 0 && (
                        <div className="mt-6">
                          <NavLink
                            to="/success"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Confirm Order
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
