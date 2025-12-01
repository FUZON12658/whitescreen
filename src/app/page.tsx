import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { Slider } from "@/components/slider";

import React from "react";

const page = () => {
  return (
    <div className="h-dvh flex flex-col justify-center">
      <Hero />
      <Contact />
      <Slider />
    </div>
  );
};

export default page;
