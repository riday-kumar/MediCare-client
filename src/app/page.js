"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import Header from "./(home)/Header";
import About from "./(home)/About";

export default function Home() {
  // const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
        <About></About>
      </div>
    </div>
  );
}
