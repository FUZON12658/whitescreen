import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="logoSection relative w-[5.375rem] h-[5.375rem] md:w-[10.375rem] md:h-[10.375rem]">
        <Image
          src={`/logo-c.png`}
          className="object-contain"
          alt="Whitescreen Productions Logo"
          fill
        />
      </div>
      <div className="text-[0.75rem] md:text-[1rem] mt-2 px-10 md:px-0 md:w-[50rem] text-justify" style={{textAlignLast:"center"}}>
        White Screen Production builds digital systems that perform. We create strategic content, bold visual identity, and high-performance custom websites and mobile applications. Our work extends into full-scale digital marketing, social media management, and content execution. We also produce documentary films and commercial video experiences that tell meaningful stories and move audiences.
      </div>
    </div>
  );
};

export default Hero;
