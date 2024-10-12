import React from "react";
import shoe from "../images/hero-image.png";
import amz from "../images/amazon.png";
import fpk from "../images/flipkart.png";

const Main = () => {
  return (
    <article className="grid justify-center items-center px-8 py-14 md:grid-cols-2 gap-8 md:ml-40">
      {/* TEXT SECTION */}
      <div className="space-y-6">
        <p className="font-extrabold text-4xl md:text-7xl text-center md:text-left">
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </p>
        <p className="text-gray-400 text-center md:text-left">
          Experience unmatched comfort and performance with the Nike Air Zoom
          Pegasus 40, designed for all runners with responsive cushioning and
          lightweight support.
        </p>
        {/* BUTTONS */}
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 font-bold rounded hover:bg-red-800">
            Shop Now
          </button>
          <button className="text-gray-600 border-2 border-gray-600 px-4 py-2 font-bold rounded hover:bg-gray-400 hover:text-white">
            Category
          </button>
        </div>
        {/* AVAILABILITY SECTION */}
        <div className="text-center md:text-left">
          <h3 className="font-bold">Also available in</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-2">
            <a href="https://www.amazon.in/Nike-Vomero-Running-Shoes-Numeric_7/dp/B0C49ZT7WY/ref=sr_1_7?crid=3HB8YK4LTEESX&dib=eyJ2IjoiMSJ9.SRflcMELAZz5Hx1l5fRM_RmbCQcaxEoHWe9lIhp93YAuV-c1gvs6ONTaNN_seUKFyvLJyIFZx5jIUgF-FJ1yKTisJI6mlZDgIdfdRVva4qW5I62Rxh6jAd1bbGfskWGF8_zxLTGGgMlNe9YySMOhApEzl0KIyStQ6R7_p87VKmonD8k0KnlFn4NfgOEeJ-P_L4Kn50fmE2QujRVoFCHEF5mwqRlZhu4XPg6LjiNfU3xYOE2xSrRZ4eowNMERq7sSc3yRapQL5z1l-Lb99ddBdfbd9B74Vr-5w3EXhTMgEgk.k-SOgOmDOAxuVDtwZd4KgJXlp0PB5CZY2x2S8QznwAg&dib_tag=se&keywords=nike+shoe+red&nsdOptOutParam=true&qid=1728718648&sprefix=nike+shoe+red%2Caps%2C199&sr=8-7">
              <img
                src={amz}
                className="h-8 w-8 object-cover cursor-pointer"
                alt="Amazon"
              />
            </a>
            <a href="https://www.flipkart.com/nike-flex-experience-run-11-walking-shoes-men/p/itm216134167f7c9?pid=SHOGV2QYKV42SBVU&lid=LSTSHOGV2QYKV42SBVU9LAJ9W&marketplace=FLIPKART&q=nike+shoe+red&store=osp%2Fcil%2F1cu&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=afb7cd7f-c512-4db6-8321-f3cc6e720a00.SHOGV2QYKV42SBVU.SEARCH&ppt=sp&ppn=sp&ssid=1clm159owg0000001728718739599&qH=9c0251f551707ea9">
              <img
                src={fpk}
                className="h-8 w-8 object-cover cursor-pointer"
                alt="Flipkart"
              />
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex justify-center items-center">
        <img
          src={shoe}
          className="w-full max-w-sm object-cover"
          alt="Nike Shoe"
        />
      </div>
    </article>
  );
};

export default Main;
