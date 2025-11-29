import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="max-lg:order-2 py-10 space-y-3 text-white bg-blue-800 flex flex-col justify-center items-center">
        <p className="font-semibold">Welcome to MediCare</p>
        <h1 className="text-4xl lg:text-6xl font-bold uppercase text-center">
          World Class Medical Treatment{" "}
        </h1>
        {/* opening hour */}
        <div className="space-y-3 my-5 bg-white rounded-lg text-black  p-10 w-[90%] lg:w-[50%]">
          <p className="text-2xl font-semibold">Opening Hours</p>
          <div className="flex gap-3 justify-between items-center text-[18px]">
            <p>Mon to Fri</p>
            <p className="text-blue-800 font-semibold">8am - 5pm</p>
          </div>
          <hr />
          <div className="flex gap-3 justify-between items-center text-[18px]">
            <p>Mon to Fri</p>
            <p className="text-blue-800 font-semibold">8am - 5pm</p>
          </div>
        </div>
      </div>
      <div className="max-lg:order-1">
        <Image
          className="w-fit object-cover h-full"
          src="/images/bgdrs.jpg"
          width={1200}
          height={400}
          alt="doctor"
        />
      </div>
    </div>
  );
};

export default Header;
