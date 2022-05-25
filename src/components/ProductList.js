import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product) || [];
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleAddToCart = (product) => {
    return () => dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product) => {
        const { img, name, price } = product;
        const productName = name.substr(0, 80);
        return (
          <div
            key={product.key}
            className="flex max-w-sm mx-auto p-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="w-1/3 bg-cover">
              <img src={img} alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
              <h1
                style={{ color: "#354f52" }}
                className="text-lg font-bold text-gray-800 dark:text-white"
              >
                {productName}
              </h1>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              </p>
              <div className="flex justify-around mt-3 item-center">
                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  ${price}
                </h1>
                <button
                  onClick={handleAddToCart(product)}
                  style={{ background: "#354f52" }}
                  className="px-2 py-1 text-xs font-bold text-white uppercase rounded "
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
