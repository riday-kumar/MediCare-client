"use client";

import Footer from "@/app/(home)/Footer";
import useUserHook from "@/hooks/useUserHook";
import { toast } from "react-toastify";

const { default: Image } = require("next/image");

export function DoctorDetailsClient({ doctorData }) {
  const { user } = useUserHook();

  console.log(user?.emailAddresses[0]?.emailAddress);

  const handleAppointment = async (e) => {
    e.preventDefault();

    const patientName = e.target.name.value.trim();
    const patientPhone = e.target.phone.value.trim();

    if (!patientName || !patientPhone) {
      alert("Please fill in all fields");
      return;
    }

    const appointmentData = {
      doctorId: doctorData._id, // doctor ID
      doctorName: doctorData.name,
      patientName,
      patientPhone,
      patientEmail: user?.emailAddresses[0]?.emailAddress, // logged in user email
      fee: doctorData.fee,
      speciality: doctorData.speciality,
      date: new Date().toISOString(), // or let user pick date later
      status: "pending",
    };

    try {
      const res = await fetch("http://localhost:5000/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (res.ok) {
        toast.success("Appointment booked successfully!");
        e.target.reset(); // clear form
      } else {
        const error = await res.json();
        alert("Failed: " + (error.message || "Something went wrong"));
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-[url(/images/bg.jpg)] min-h-52 flex justify-center items-center">
        <h2 className="text-5xl font-bold text-right uppercase text-blue-800">
          Dedicated Doctor
        </h2>
      </div>
      {/* doctor details */}
      <div className="min-h-screen w-11/12 lg:w-[75%] mx-auto grid grid-cols-5 gap-10 lg:p-20">
        {/* img */}
        <div className="col-span-1">
          <Image
            src="https://i.ibb.co.com/W4TntDDc/dr-03.png"
            alt="dr img"
            height={400}
            width={250}
          />
        </div>
        {/* dr details + appointment form */}
        <div className="col-span-4">
          <div className=" space-y-4">
            {/* name */}
            <div>
              <p className="text-3xl font-bold">{doctorData.name}</p>
              <p className="text-[18px] text-blue-800">
                {doctorData.education.degrees.map((deg, i) => (
                  <span key={i}>{deg.title}</span>
                ))}
              </p>
            </div>
            {/* about */}
            <div>
              <p>{doctorData.about}</p>
            </div>
            {/* speciality */}

            <div className="flex justify-start items-center gap-5">
              <p className="font-bold">Speciality : </p>
              <p>
                {doctorData.speciality.map((spe, i) => (
                  <span key={i}>{spe}, </span>
                ))}
              </p>
            </div>

            {/* education */}
            <div className="flex justify-start items-center gap-5">
              <p className="font-bold">Education : </p>
              <p>
                {doctorData.education.degrees.map((spe, i) => (
                  <span key={i}>{spe.title}, </span>
                ))}
              </p>
            </div>
            {/* trainings */}
            <div className="flex justify-start items-center gap-5">
              <p className="font-bold">Trainings : </p>
              <p>
                {doctorData.education.trainings.map((spe, i) => (
                  <span key={i}>{spe}, </span>
                ))}
              </p>
            </div>
            {/* fee */}
            <div className="flex justify-start items-center gap-5">
              <p className="font-bold">Visit Fee : </p>
              <p>{doctorData.fee}</p>
            </div>
          </div>
          {/* form */}
          <div className="mt-10">
            <p className="text-2xl font-bold text-blue-400 uppercase ">
              Make Your Appointment
            </p>
            <form onSubmit={handleAppointment} className="w-[50%]">
              <fieldset className="fieldset *:w-full">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                />
                <button type="submit" className="btn btn-success mt-4">
                  Got Appointment
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
