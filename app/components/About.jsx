"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import { categories } from "../constants";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  const mainControls = useAnimation();
  const scaleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      scaleControls.start("visible");
    }
  }, [isInView, mainControls]);
  const [selectedCategory, setSelectedCategory] = useState("Quality and Care");

  return (
    <div
      className={`${poppins.className} z-10 min-h-screen w-full md:w-[83vw] items-center justify-center text-sm lg:flex flex-col md:mb-20`}
      id="about"
      ref={ref}
    >
      <div className="relative w-full  md:h-[45vh] rounded-3xl  overflow-hidden flex flex-col p-3 md:p-6 2xl:mt-14">
        <motion.h2
          className="self-center md:self-start  font-normal text-sm px-3 py-2 md:my-3 bg-[#FDD604] text-white rounded-3xl  "
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About Us
        </motion.h2>
        <div className="flex text-center md:text-left h-full flex-col md:flex-row  justify-center items-start  mt-3 md:mt-0">
          <motion.h2
            className="text-2xl xl:text-5xl 2xl:text-6xl md:w-1/2 mr-3 select-none"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your Premier Destination for Rare and Exotic Aquatic Fishes.
          </motion.h2>
          <motion.h2
            className="xl:text-base 2xl:text-lg  text-gray-950/70 md:w-1/2 pt-4 md:pt-0 select-none "
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            At <span className="">Lakeview Aquatics</span>, we are passionate
            about the underwater world and dedicated to bringing the finest and
            rarest aquatic species to enthusiasts like you. Our mission is to
            offer an unparalleled selection of exotic and hard-to-find fish,
            ensuring that your aquarium stands out as a vibrant, diverse, and
            thriving ecosystem.
          </motion.h2>
        </div>
      </div>
      <motion.div
        className="w-full md:h-[45vh] bg-gray-200/40 flex-col md:flex-row  rounded-3xl flex p-2 md:p-6 mt-4 md:mt-0"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="md:w-1/3 h-[250px] md:h-full">
          <Image
            src={categories[selectedCategory].image}
            alt={selectedCategory}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="md:w-2/3 h-full md:pl-6">
          <div className="mt-6 md:mt-4 justify-between space-x-1  mb-6 flex md:space-x-4 flex-wrap md:flex-nowrap">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-[150px] px-4 py-2 rounded-full text-sm m-2 md:mt-0 ${
                  selectedCategory === category
                    ? "border-2 border-black  text-black font-semibold"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="about-us-section">
            <div className="content-above-buttons">
              <h2 className="text-2xl font-medium pt-2 text-center md:text-left">
                {categories[selectedCategory].title}
              </h2>
              <p className=" xl:text-base 2xl:text-lg text-gray-700 mt-2 text-center md:text-left mb-6">
                {categories[selectedCategory].description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
