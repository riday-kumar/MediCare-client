"use client";

import useUserHook from "@/hooks/useUserHook";
import React from "react";

const AboutPage = () => {
  const { user } = useUserHook();
  console.log(user);
  return (
    <div>
      <p>about page</p>
    </div>
  );
};

export default AboutPage;
