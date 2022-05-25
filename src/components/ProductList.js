import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product) || [];
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((r) => {
        const { img, name, price } = r;
        const productName = name.substr(0, 80);
        return (
          <div
            key={r}
            class="flex max-w-sm mx-auto p-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div class="w-1/3 bg-cover">
              <img src={img} alt="" />
            </div>

            <div class="w-2/3 p-4 md:p-4">
              <h1
                style={{ color: "#354f52" }}
                class="text-lg font-bold text-gray-800 dark:text-white"
              >
                {productName}
              </h1>

              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              </p>
              <div class="flex justify-around mt-3 item-center">
                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  ${price}
                </h1>
                <button
                  style={{ background: "#354f52" }}
                  class="px-2 py-1 text-xs font-bold text-white uppercase rounded "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
