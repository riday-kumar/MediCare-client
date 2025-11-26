import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

const About = () => {
  return (
    <div className="py-15">
      <div className="text-center mb-10">
        <p className="">Our Service</p>
        <h1 className="text-4xl font-semibold">We Care Our Patients</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaHeartPulse className="text-8xl text-blue-800 bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Health Check</p>
          <p className="w-[70%]">
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaHeartPulse className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Operation Theater</p>
          <p className="w-[70%]">
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaHeartPulse className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Pharmacy Support</p>
          <p className="w-[70%]">
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaHeartPulse className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Ambulance Care</p>
          <p className="w-[70%]">
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaHeartPulse className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Lab Tests</p>
          <p className="w-[70%]">
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaHeartPulse className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Intensive Care</p>
          <p className="w-[70%]">
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
