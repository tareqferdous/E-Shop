import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import ShopNavbar from "../components/ShopNavbar";

const Shop = () => {
  return (
    <>
      <ShopNavbar />

      <div className="pt-2 md:pt2 pr-2 pl-2 md:pr-80 md:pl-8 lg:pl-8 bg-gray-100">
        <div className="pt-2 md:pt-5">
          <ProductList />
        </div>
      </div>
      <Cart />
    </>
  );
};

export default Shop;
