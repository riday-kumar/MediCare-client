"use client";

import useUserHook from "@/hooks/useUserHook";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllAppointment = () => {
  const { user, isSignedIn } = useUserHook();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in user's email (Clerk)
  const userEmail = user?.emailAddresses?.[0]?.emailAddress;

  useEffect(() => {
    if (!isSignedIn || !userEmail) {
      setLoading(false);
      return;
    }

    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `https://medicare-api-server-ejp.vercel.app/appointment?email=${userEmail}`
        );
        const data = await res.json();

        if (res.ok) {
          setAppointments(data);
        } else {
          toast.error("Failed to load appointments");
        }
      } catch (err) {
        console.error(err);
        toast.error("Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userEmail, isSignedIn]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
          My Appointments
        </h1>

        {appointments.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No appointments found</p>
            <Link href="/doctors" className="btn btn-primary mt-6">
              Book Your First Appointment
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-xl rounded-lg">
            <table className="table table-zebra w-full">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th>#</th>
                  <th>Doctor</th>
                  <th>Speciality</th>
                  <th>Fee</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt, index) => (
                  <tr key={apt._id} className="hover:bg-blue-50 transition">
                    <td>{index + 1}</td>
                    <td className="font-semibold">{apt.doctorName}</td>
                    <td>{apt.speciality?.join(", ")}</td>
                    <td>৳{apt.fee}</td>
                    <td>
                      {new Date(apt.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          apt.status === "pending"
                            ? "badge-warning"
                            : apt.status === "confirmed"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td className="flex gap-2 flex-wrap">
                      <Link
                        href={`/doctor-details/${apt.doctorId}`}
                        className="btn btn-sm btn-info text-white"
                      >
                        View
                      </Link>

                      {/* You can add Edit modal later */}
                      <button className="btn btn-sm btn-warning" disabled>
                        Edit
                      </button>

                      <button className="btn btn-sm btn-error text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppointment;
