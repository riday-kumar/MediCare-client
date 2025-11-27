"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import Header from "./(home)/Header";
import About from "./(home)/About";
import MidBanner from "./(home)/MidBanner";
import FewDoctors from "./(home)/FewDoctors";
import Footer from "./(home)/Footer";
import Emergency from "./(home)/Emergency";

export default function Home() {
  // const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto space-y-20 mb-20">
        <About></About>
        <FewDoctors></FewDoctors>
        <MidBanner></MidBanner>
        <Emergency></Emergency>
      </div>
      <Footer></Footer>
    </div>
  );
}
