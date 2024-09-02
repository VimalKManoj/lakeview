"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";

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

  const categories = {
    "Quality and Care": {
      title: "Uncompromising Quality, Unwavering Care",
      description:
        "Our journey began with a deep love for aquatic life and a desire to provide fellow hobbyists with access to the best and most unique fish available. We take pride in offering only the healthiest and most beautiful specimens, sourced from reputable breeders and suppliers around the globe. Every fish in our care is treated with the utmost respect, provided with optimal living conditions.",
      image: "/images/fish.jpg",
    },
    "Exceptional Selection": {
      title: "Curated for Perfection: Exceptional Selections",
      description:
        "We specialize in rare and exotic species, from vibrant cichlids and majestic angelfish to unique invertebrates and everything in between. Whether you're a seasoned aquarist or just starting, you'll find something extraordinary at Lakeview Aquatics.",
      image: "/images/about.jpg",
    },
    "Expert Knowledge": {
      title: "Guided by Expertise: Knowledge You Can Trust",
      description:
        "Our team is composed of experienced aquarists who are passionate about sharing their knowledge. We're here to assist you with everything from selecting the right fish for your tank to offering tips on care, feeding, and habitat setup.",
      image: "/images/about_2.jpg",
    },
    "Customer Satisfaction": {
      title: "Commitment to Customer Delight",
      description:
        "Your satisfaction is our top priority. We strive to provide excellent customer service, whether you're visiting our store or shopping online. We're always ready to answer your questions and ensure you have a positive experience with us",
      image: "/images/about_3.jpg",
    },
    "Explore Our World": {
      title: "Discover the World of Lakeview",
      description:
        "At Lakeview Aquatics, we believe that every aquarium should be a reflection of nature's beauty and diversity. That's why we continuously expand our collection, bringing you the latest and most sought-after species in the aquatics world. We invite you to explore our store, where every visit promises new discoveries and inspiration for your aquatic environment.",
      image: "/images/Glowing.jpg",
    },
  };
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

