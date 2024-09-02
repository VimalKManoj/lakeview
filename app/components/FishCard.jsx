import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const FishCard = ({ name, image, description }) => {
  return (
    <div className={`${poppins.className}`}>
      <div className="group relative rounded-3xl border-2  overflow-hidden w-30 2xl:h-96 2xl:w-80 xl:h-80 xl:w-72 transition-shadow hover:shadow-xl hover:shadow-black/30 cursor-pointer ">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 group-hover:from-black/70  group-hover:to-black/10"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">
         
          <p className="mb-3 xl:text-sm 2xl:text-base italic text-white opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
      <h2 className="w-full text-center p-3 font-medium text-lg">{name}</h2>
    </div>
  );
};

export default FishCard;
