"use client";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  const router = useRouter();
  return (
    <motion.div
      className="relative z-10 h-screen md:min-h-screen w-full justify-center items-center text-sm lg:flex md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/svg/hero_back.svg"
        width={3000}
        height={3000}
        className="-z-10 absolute  w-full h-[97vh] md:h-full object-cover rounded-3xl "
      />
      <div className=" hidden md:flex flex-col w-[80%] pl-14 select-none ">
        <h2
          className={`${poppins.className}  relative z-50 md:text-7xl 2xl:text-8xl font-semibold text-white pt-20 `}
        >
          {" "}
          Uncover Nature’<span className="absolute z-50 opacity-65 ">s</span>
        </h2>
        <h2
          className={`${poppins.className} relative z-50 md:text-7xl 2xl:text-8xl font-semibold text-white pt-4 pb-20`}
        >
          Underwater Jew
          <span className="absolute z-50 opacity-65 ">els</span>
        </h2>
        <motion.button
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
          className="text-white self-start px-10 py-3 rounded-3xl bg-white/50 "
          type="button"
          onClick={() => router.push("/Gallery")}
        >
          Explore
        </motion.button>
      </div>

      <div className="relative top-20 md:-top-10 xl:-top-20 md:right-28 z-20 md:w-1/2 h-1/2">
        <Image
          src="/images/hero.png"
          width={1000}
          height={1000}
          className="w-full "
        />
        <h2 className="md:hidden font-semibold w-full text-center text-3xl p-2 text-white">
          Uncover Nature’s Underwater Jewels
        </h2>
        <div className="md:hidden w-full flex justify-center items-center p-6">
          <motion.button
            initial={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
            className="text-white   px-10 py-3 rounded-3xl bg-white/50"
            type="button"
            onClick={() => router.push("/Gallery")}
          >
            Explore
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
