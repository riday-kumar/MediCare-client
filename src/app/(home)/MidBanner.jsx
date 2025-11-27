import Image from "next/image";
import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";

const MidBanner = () => {
  return (
    <div className="py-20 bg-blue-300 bg-blend-overlay bg-[url(/images/background.jpg)] bg-repeat-x bg-cover rounded-md grid grid-cols-4">
      <div className="text-blue-800 space-y-2 flex flex-col justify-center items-center ">
        <Image
          src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000"
          alt="doctor"
          height={100}
          width={100}
        />
        <p className="font-bold text-4xl">9632</p>
        <p className="text-2xl font-semibold">Happy Patients</p>
      </div>
      <div className="text-blue-800 space-y-2 flex flex-col justify-center items-center ">
        <Image
          src="https://img.icons8.com/?size=100&id=8969&format=png&color=000000"
          alt="doctor"
          height={100}
          width={100}
        />
        <p className="font-bold text-4xl">9632</p>
        <p className="text-2xl font-semibold">Happy Patients</p>
      </div>
      <div className="text-blue-800 space-y-2 flex flex-col justify-center items-center ">
        <Image
          src="https://img.icons8.com/?size=100&id=109558&format=png&color=000000"
          alt="doctor"
          height={100}
          width={100}
        />
        <p className="font-bold text-4xl">9632</p>
        <p className="text-2xl font-semibold">Happy Patients</p>
      </div>
      <div className="text-blue-800 space-y-2 flex flex-col justify-center items-center ">
        <Image
          src="https://img.icons8.com/?size=100&id=42306&format=png&color=000000"
          alt="doctor"
          height={100}
          width={100}
        />
        <p className="font-bold text-4xl">9632</p>
        <p className="text-2xl font-semibold">Happy Patients</p>
      </div>
    </div>
  );
};

export default MidBanner;
