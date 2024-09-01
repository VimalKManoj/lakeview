"use client";
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
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [1200, 1400, 2000, 2100], [0, 1, 1, 0]);
  const translateX = useTransform(scrollY, [1200, 2300], [-100, 800]);
  const opacity2 = useTransform(
    scrollY,
    [2100, 2300, 3000, 3200],
    [0, 1, 1, 1]
  );
  const translateX2 = useTransform(scrollY, [2000, 3400], [100, 800]);
  return (
    <div
      className="hidden relative w-full md:flex justify-between z-20"
      style={{ height: `calc(${SECTION_HEIGHT}rem + 100vh)` }}
    >
      <div className=" sticky top-0 z-10 h-screen w-full justify-around items-center text-sm lg:flex p-6 flex-col  overflow-hidden ">
        <Image
          src="/svg/discover.svg"
          layout="fill"
          className="-z-10 absolute  w-full h-full object-cover rounded-3xl "
        />
        <h2
          className={`${poppins.className} text-7xl font-semibold text-white/70 mt-6`}
        >
          Discover our top exotic picks
        </h2>
        <div className="w-2/3 rounded-3xl h-[70vh] relative" style={{ opacity }}>
          <motion.div style={{ opacity, translateX }} className="w-full ">
            <Image
              src="/svg/angel.svg"
              width={300}
              height={200}
              className="-rotate-12"
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity2, translateX: translateX2 }}
            className="w-full absolute top-10 "
          >
            <Image
              src="/svg/redhead.svg"
              width={250}
              height={200}
              className="-rotate-12"
            />
          </motion.div>
          <motion.div className="text-white" style={{ opacity }}>
            <h2 className="text-lg font-semibold mb-4">Platinum Angel</h2>
            <h2 className="text-base">
              {" "}
              Platinum Angelfish are a beautiful and elegant addition to any
              community tank. Their striking appearance and relatively peaceful
              nature make them a popular choice among aquarists. They require a
              well-maintained environment with suitable tank mates to thrive and
              display their best coloration and behavior.The Platinum Angelfish
              is a selectively bred variant of the common angelfish
              (Pterophyllum scalare), originally found in the slow-moving rivers
              and floodplains of the Amazon Basin in South America, including
              Brazil, Peru, and Colombia.
            </h2>
          </motion.div>
          <motion.div
            className="text-white absolute xl:bottom-20 2xl:bottom-32  "
            style={{ opacity:opacity2 }}
          >
            <h2 className="text-lg font-semibold mb-4">Red Head Tapajos</h2>
            <h2 className="text-base">
              The Red Head Tapajos is a stunning and relatively peaceful
              cichlid, ideal for those who want to add color and activity to
              their aquarium. Their unique feeding behavior, combined with their
              vibrant appearance, makes them a favorite among cichlid
              enthusiasts. They do best in well-maintained aquariums with
              appropriate tank mates and a natural environment that mimics their
              native habitats.The Red Head Tapajos is native to the Tapajós
              River Basin in the Amazon River system of Brazil. These cichlids
              are found in slow-moving, sandybottomed rivers and streams, where
              they sift through the substrate for food.
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
