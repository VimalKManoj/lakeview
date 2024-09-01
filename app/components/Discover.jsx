import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { motion, useTransform, useScroll } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SECTION_HEIGHT = 90;

const Discover = () => {
  return (
    <div
      className="hidden relative w-full md:flex justify-between z-20"
      style={{ height: `calc(${SECTION_HEIGHT}rem + 100vh)` }}
    >
      <div className=" sticky top-0 z-10 h-screen w-full justify-around items-center text-sm lg:flex p-6 flex-col ">
        <Image
          src="/svg/discover.svg"
          layout="fill"
          className="-z-10 absolute  w-full h-full object-cover rounded-3xl"
        />
        <h2
          className={`${poppins.className} text-7xl font-semibold text-white/70 mt-6`}
        >
          Discover our top exotic picks
        </h2>
        <div className="w-2/3 rounded-3xl h-[70vh] ">

        </div>
      </div>
    </div>
  );
};

export default Discover;
