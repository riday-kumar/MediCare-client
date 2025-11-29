import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiMedicalDrip } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoIosHappy } from "react-icons/io";

const About = () => {
  return (
    <div className="pt-20">
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
          <p className="lg:w-[80%] text-justify">
            Regular health check-ups help detect medical issues early and ensure
            overall well-being. Our expert doctors provide personalized
            assessments based on your lifestyle and medical history. We use
            modern tools to deliver accurate and reliable results.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <GiMedicalDrip className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Operation Theater</p>
          <p className="lg:w-[80%] text-justify">
            Our state-of-the-art operation theaters are equipped with advanced
            surgical technology for safe and effective procedures. Experienced
            surgeons and trained staff ensure precision and comfort throughout
            the entire surgical journey. We prioritize hygiene, safety, and
            patient care.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <GiMedicines className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Pharmacy Support</p>
          <p className=" lg:w-[80%] text-justify">
            Our in-house pharmacy provides a wide range of authentic and
            essential medicines at affordable prices. Patients can easily access
            prescriptions immediately after consultation. We ensure safe
            dispensing and proper guidance for correct medication usage.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <FaAmbulance className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Ambulance Care</p>
          <p className="lg:w-[80%] text-justify">
            We offer 24/7 ambulance services to ensure timely medical support
            during emergencies. Our ambulances are equipped with essential
            life-saving equipment and handled by trained paramedics. Quick
            response and safe patient transfer are our top priorities.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <ImLab className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Lab Tests</p>
          <p className=" lg:w-[80%] text-justify">
            Our diagnostic lab offers accurate and fast test reports using
            modern equipment. From routine blood tests to advanced screenings,
            we maintain strict quality standards. Reports are delivered
            efficiently to assist in proper medical treatment.
          </p>
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center text-center hover:bg-white p-10 rounded-md">
          <div>
            <IoIosHappy className=" text-blue-800 text-8xl bg-white p-3 rounded-full" />
          </div>
          <p className="text-2xl">Intensive Care</p>
          <p className=" lg:w-[80%] text-justify">
            Our Intensive Care Unit (ICU) provides specialized monitoring and
            treatment for critically ill patients. Highly trained doctors and
            nurses ensure round-the-clock observation. Advanced life-support
            systems are used to deliver the highest level of care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
