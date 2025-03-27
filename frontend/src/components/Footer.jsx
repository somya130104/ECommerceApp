import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex:col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Fashion has always been about expressing who you are, and we're here
            to help you do just that. Whether you're dressing up for a special
            occasion or keeping it casual, our collection has something for
            every mood and style. Explore our pieces that blend comfort and
            trend effortlessly, so you can look and feel your best every day!
          </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+91-9876-543-210</li>
              <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">Copyright 2025@ forever clothing - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
