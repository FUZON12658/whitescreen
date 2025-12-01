import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const data = {
  sliderImages: [
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png",
    "/logos/8.png",
    "/logos/9.png",
    "/logos/10.png",
    "/logos/11.png",
    "/logos/12.png",
    "/logos/13.png",
    "/logos/14.png",
    "/logos/15.png",
    "/logos/16.png",
    "/logos/17.png",
    "/logos/18.png",
    "/logos/19.png",
    "/logos/20.png",
    "/logos/21.png",
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png",
    "/logos/8.png",
    "/logos/9.png",
    "/logos/10.png",
    "/logos/11.png",
    "/logos/12.png",
    "/logos/13.png",
    "/logos/14.png",
    "/logos/15.png",
    "/logos/16.png",
    "/logos/17.png",
    "/logos/18.png",
    "/logos/19.png",
    "/logos/20.png",
    "/logos/21.png",
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png",
    "/logos/8.png",
    "/logos/9.png",
    "/logos/10.png",
    "/logos/11.png",
    "/logos/12.png",
    "/logos/13.png",
    "/logos/14.png",
    "/logos/15.png",
    "/logos/16.png",
    "/logos/17.png",
    "/logos/18.png",
    "/logos/19.png",
    "/logos/20.png",
    "/logos/21.png",
  ],
};

export const Slider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative ${className} overflow-hidden mt-2`}
    >
      <h2 className="font-bold text-center">Our Clients</h2>
      <div>
        <Marquee speed={40} gradient={false} className=" mt-[1.25rem] mx-auto">
          {data.sliderImages.map((image, index) => (
            <div className="w-[4rem] h-[4rem] md:w-[5.375rem]  md:h-[5.375rem] relative mx-6">
              <Image
                key={index}
                src={image}
                fill
                alt={`Hospital ${index + 1}`}
                className="object-contain grayscale cursor-pointer hover:grayscale-0 pointer-events-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
