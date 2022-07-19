import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import ShopNavbar from "../components/ShopNavbar";
import Sidebar from "../components/Sidebar";

const Shop = () => {
  return (
    <>
      <ShopNavbar />

      <div className="pt-2 md:pt2 pr-2 ml-80 lg:pl-4 bg-gray-100">
        <Sidebar />
        <div className="pt-2 md:pt-5">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Shop;
