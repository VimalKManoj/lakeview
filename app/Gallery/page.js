"use client";
import React, { useEffect, useRef } from "react";
import FishCard from "../components/FishCard";
import { Poppins } from "next/font/google";
import GalleryHeader from "../components/GalleryHeader";
import { useAnimation, useInView, motion } from "framer-motion";
import { products } from "../constants";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Page = () => {
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
  

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center xl:p-12 2xl:p-16 2xl:pt-24 w-full mt-10 md:mt-0">
        <GalleryHeader />
        <div
          className="z-10  w-full items-center justify-center text-sm lg:flex flex-col "
          ref={ref}
        >
          <motion.h2
            className={`${poppins.className} text-3xl text-center md:text-left xl:text-5xl 2xl:text-6xl font-semibold md:pt-14 2xl:p-6 2xl:mb-2 mt-10 md:mt-0 p-3 `}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Fresh Water Marvels: A Gallery of Fish Species
          </motion.h2>
          <motion.h2
            className="w-full p-3 px-5 text-base md:px-20 md:mb-10 2xl:text-2xl xl:text-xl font-light text-center md:text-left "
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Discover the stunning diversity of marine life in our carefully
            curated gallery, featuring rare and exotic fish species from around
            the world. Let these vibrant aquatic wonders inspire your next
            aquarium masterpiece.
          </motion.h2>
          <div className="p-4 md:p-0 flex w-full flex-wrap justify-center items-center gap-2 2xl:gap-5">
            {products.map((product, index) => {
              const delay = 0.6 + index * 0.2; // Calculate delay based on index

              return (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay }}
                >
                  <FishCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
