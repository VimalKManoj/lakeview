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
      className="relative z-10 min-h-screen w-full justify-center items-center text-sm lg:flex p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/svg/hero_back.svg"
        width={3000}
        height={3000}
        className="-z-10 absolute  w-full h-full object-cover rounded-3xl "
      />
      <div className="flex flex-col w-[80%] pl-14 select-none overflow-hidden">
        <h2
          className={`${poppins.className} relative z-50 xl:text-7xl 2xl:text-8xl font-semibold text-white pt-20 `}
        >
          {" "}
          Uncover Nature’<span className="absolute z-50 opacity-65 ">s</span>
        </h2>
        <h2
          className={`${poppins.className} relative z-50 xl:text-7xl 2xl:text-8xl font-semibold text-white pt-4 pb-20`}
        >
          Underwater Jew
          <span className="absolute z-50 opacity-65 ">els</span>
        </h2>
        <motion.button
          initial={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
          className="text-white self-start px-10 py-3 rounded-3xl bg-white/50"
          type="button"
          onClick={() => router.push("/Gallery")}
        >
          Explore
        </motion.button>
      </div>

      <div className="relative top-0 right-24 z-20 w-1/2 h-1/2">
        <Image
          src="/images/hero.png"
          width={1000}
          height={1000}
          className="w-full "
        />
      </div>
    </motion.div>
  );
};

export default Hero;
