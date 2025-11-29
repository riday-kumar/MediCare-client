"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FewDoctors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://medicare-api-server-ejp.vercel.app/doctors"
      );
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="pt-10">
      <div className="text-center mb-10">
        <p className="">Our Team</p>
        <h1 className="text-4xl font-semibold">Our Expert Doctors</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((doc, inx) => (
          <Link
            key={inx}
            href={`doctor-details/${doc._id}`}
            className="max-w-sm group relative overflow-hidden rounded-lg shadow-md"
          >
            {/* Doctor Image */}
            <Image
              src={doc.photo}
              alt="Doctor"
              width={228}
              height={228}
              className="w-full h-72"
            />

            {/* Basic Info */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{doc.name}</h3>
              <p className="text-blue-800">{doc.education.degrees[1].title}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-800 bg-opacity-80 flex flex-col items-start justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold mb-1">
                {doc.name}
              </h3>
              <p className="text-white mb-4">
                {doc.education.degrees[1].title}
              </p>

              <div className="flex items-center gap-2 text-white mb-2">
                <span>📅Available : </span>
                <ul className="list-disc">
                  {doc.days.map((day, i) => (
                    <span key={i}>{day} </span>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-white">
                <span>📧</span>
                <span>{doc.email}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FewDoctors;
