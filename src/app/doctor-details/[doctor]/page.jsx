import { DoctorDetailsClient } from "@/components/DoctorDetailsClient";

import React from "react";

const page = async ({ params }) => {
  const { doctor } = await params;
  // console.log(doctor);

  const doctorData = await fetch(
    `https://medicare-api-server-ejp.vercel.app/doctor/${doctor}`
  ).then((res) => res.json());
  console.log(doctorData);

  return <DoctorDetailsClient doctorData={doctorData} />;
};

export default page;
