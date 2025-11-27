import { DoctorDetailsClient } from "@/components/DoctorDetailsClient";

import React from "react";

const page = async ({ params }) => {
  const { doctor } = await params;
  // console.log(doctor);
 

  const doctorData = await fetch(`http://localhost:5000/doctor/${doctor}`).then(
    (res) => res.json()
  );
  console.log(doctorData);

  return <DoctorDetailsClient doctorData={doctorData} />;

  // const handleAppointment = (e)=>{
  //   e.preventDefault();
  //   const patientName = e.target.name.value;
  //   const patientPhone = e.target.phone.value;
  //   const appointedEmail = user.
  // }

  // return (
  //   <div className="min-h-screen w-11/12 mx-auto grid grid-cols-5">
  //     {/* img */}
  //     <div className="col-span-1">
  //       <Image
  //         src="https://i.ibb.co.com/W4TntDDc/dr-03.png"
  //         alt="dr img"
  //         height={400}
  //         width={250}
  //       />
  //     </div>
  //     {/* dr details + appointment form */}
  //     <div className="col-span-4">
  //       <div className=" space-y-4">
  //         {/* name */}
  //         <div>
  //           <p className="text-2xl font-bold">{doctorData.name}</p>
  //           <p className="text-[18px] text-blue-800">
  //             {doctorData.education.degrees.map((deg, i) => (
  //               <span key={i}>{deg.title}</span>
  //             ))}
  //           </p>
  //         </div>
  //         {/* about */}
  //         <div>
  //           <p>{doctorData.about}</p>
  //         </div>
  //         {/* speciality */}

  //         <div className="flex justify-start items-center gap-5">
  //           <p className="font-bold">Speciality : </p>
  //           <p>
  //             {doctorData.speciality.map((spe, i) => (
  //               <span key={i}>{spe}, </span>
  //             ))}
  //           </p>
  //         </div>

  //         {/* education */}
  //         <div className="flex justify-start items-center gap-5">
  //           <p className="font-bold">Education : </p>
  //           <p>
  //             {doctorData.education.degrees.map((spe, i) => (
  //               <span key={i}>{spe.title}, </span>
  //             ))}
  //           </p>
  //         </div>
  //         {/* trainings */}
  //         <div className="flex justify-start items-center gap-5">
  //           <p className="font-bold">Trainings : </p>
  //           <p>
  //             {doctorData.education.trainings.map((spe, i) => (
  //               <span key={i}>{spe}, </span>
  //             ))}
  //           </p>
  //         </div>
  //         {/* fee */}
  //         <div className="flex justify-start items-center gap-5">
  //           <p className="font-bold">Visit Fee : </p>
  //           <p>{doctorData.fee}</p>
  //         </div>
  //       </div>
  //       {/* form */}
  //       <div>
  //         <p className="text-2xl font-bold text-blue-800">
  //           Make Your Appointment
  //         </p>
  //         <form onSubmit={handleAppointment} className="w-[50%]">
  //           <fieldset className="fieldset *:w-full">
  //             <label className="label">Name</label>
  //             <input
  //               type="text"
  //               name="name"
  //               className="input"
  //               placeholder="Name"
  //             />
  //             <label className="label">Phone</label>
  //             <input
  //               type="text"
  //               name="phone"
  //               className="input"
  //               placeholder="Phone"
  //             />
  //             <button type="submit" className="btn btn-success mt-4">
  //               Got Appointment
  //             </button>
  //           </fieldset>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default page;
