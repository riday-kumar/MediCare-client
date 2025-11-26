import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="space-y-3 text-white bg-blue-800 flex flex-col justify-center items-center">
        <p className="font-semibold">Welcome to MediCare</p>
        <h1 className="text-6xl font-bold uppercase text-center">
          World Class Medical Treatment{" "}
        </h1>
        {/* opening hour */}
        <div className="space-y-3 my-5 bg-white rounded-lg text-black  p-10 w-[50%]">
          <p className="text-2xl font-semibold">Opening Hours</p>
          <div className="flex justify-between items-center text-[18px]">
            <p>Mon to Fri</p>
            <p className="text-blue-800 font-semibold">8am - 5pm</p>
          </div>
          <hr />
          <div className="flex justify-between items-center text-[18px]">
            <p>Mon to Fri</p>
            <p className="text-blue-800 font-semibold">8am - 5pm</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="w-full object-cover"
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
