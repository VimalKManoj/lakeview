"use client";
import React, { useEffect, useRef } from "react";
import GalleryHeader from "../components/GalleryHeader";
import { Poppins } from "next/font/google";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function page() {
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
    <section className="flex min-h-screen flex-col justify-center items-center xl:p-12 2xl:p-16 2xl:pt-24 w-full mt-10 md:mt-0">
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
          Dive Into Premium Aquatic Solutions
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
          At Lakeview Aquatics, we are passionate about creating stunning
          aquatic environments that go beyond the ordinary. Whether you're
          looking to enhance your home, corporate space, pub, or brewery, we
          offer a range of professional aquarium services to help you design and
          maintain breathtaking aquatic displays. Our services combine
          aesthetics, expert care, and attention to detail, ensuring that your
          aquatic installations are as captivating as they are sustainable.
        </motion.h2>
     
        <motion.section
          className={`${poppins.className} flex flex-col justify-center items-center p-4 md:p-10  w-full`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Top Left Box */}
            <div className="md:col-span-2 flex flex-col bg-gray-100  rounded-lg p-6 justify-center items-center hover:scale-[1.02] transition">
              <Number>1</Number>
              <H1>Custom Aquarium Design and Installation</H1>
              <div className="w-full flex justify-center h-[20rem] overflow-hidden rounded-lg mb-6">
                <Image
                  src="/images/aquarium.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover bottom-56 object-bottom"
                />
              </div>
              <Sub>
                Our team of experts will work with you to create the perfect
                aquarium, tailored to your space and vision.
              </Sub>
              <ul className="flex flex-col md:flex-row justify-center items-center md:h-40 text-center mb-4">
                <li className="p-2">
                  <H3>Residential Aquariums</H3>
                  Bring tranquility to your home with a custom-built aquarium
                  that fits your space and complements your decor.
                </li>
                <li>
                  <H3> Corporate Aquariums</H3>
                  Transform your office, lobby, or conference room into a
                  visually stunning space that promotes relaxation and
                  creativity.
                </li>
                <li>
                  <H3>Pubs and Breweries</H3>
                  Add a unique feature to your establishment with a vibrant,
                  eye-catching aquarium that attracts attention and enhances the
                  ambiance.
                </li>
              </ul>

              <p className="font-semibold">
                We handle everything from concept to completion, ensuring a
                seamless installation that suits your needs and space.
              </p>
            </div>

            {/* Top Right Box */}
            <div className=" row-span-2 bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center hover:scale-[1.02] transition hover:shadow-xl">
              <Number>2</Number>
              <H1>Aquatic Landscaping (Aquascaping)</H1>
              <div className="w-full flex justify-center h-[20rem] overflow-hidden rounded-lg mb-6">
                <Image
                  src="/images/aquascape.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover bottom-56 object-bottom"
                />
              </div>
              <Sub>
                Aquascaping is more than just an aquarium—it's an art form. Our
                team specializes in designing aquatic landscapes that mimic
                natural environments, providing a peaceful and visually
                appealing focal point for your space. We use high-quality
                plants, rocks, driftwood, and other materials to create
                landscapes that are both beautiful and sustainable.
              </Sub>
              <ul className="flex flex-col justify-center items-center text-center mb-4">
                <li className="p-2">
                  <H3>Aquatic Landscapes for Homes</H3>
                  Add a serene, nature-inspired feature to your living space
                  with an expertly crafted aquascape.
                </li>
                <li>
                  <H3>Corporate and Commercial Aquascaping</H3>
                  Create a calming and visually striking environment for
                  employees and clients.
                </li>
                <li>
                  <H3>Aquascaping for Pubs and Restaurants</H3>
                  Engage your guests with a conversation-starting aquatic
                  display that enhances the ambiance of your establishment.
                </li>
              </ul>
            </div>

            {/* Bottom Left Box */}

            <div className=" row-span-2 bg-gray-100 flex flex-col  rounded-lg p-6 justify-center items-center hover:scale-[1.02] transition hover:shadow-xl">
              <Number>3</Number>
              <H1>Aquarium Maintenance and Cleaning</H1>
              <Sub>
                Maintaining a healthy and beautiful aquarium requires regular
                care and attention. At Lakeview Aquatics, we offer professional
                maintenance services to ensure your aquarium remains in peak
                condition.
              </Sub>
              <ul className="flex flex-col justify-center items-center text-center mb-4">
                <li className="p-2">
                  <H3>Water quality testing and balancing</H3>
                </li>
                <li>
                  <H3>Tank cleaning and algae control</H3>
                </li>
                <li>
                  <H3>Filter maintenance and equipment checks</H3>
                </li>
                <li>
                  <H3>Fish health monitoring</H3>
                </li>
                <li>
                  <H3>Plant and aquascape maintenance</H3>
                </li>
              </ul>

              <Sub>
                We offer flexible maintenance plans tailored to your schedule,
                so you can enjoy your aquarium without the hassle of upkeep.
              </Sub>
            </div>

            {/* Bottom Center Box */}
            <div className="row-span-2 bg-gray-100 flex flex-col rounded-lg p-6 justify-center items-center hover:scale-[1.02] transition hover:shadow-xl">
              <Number>4</Number>
              <H1>Fish and Aquatic Life Consultation</H1>
              <Sub>
                Not sure which fish or aquatic life is best for your setup? Our
                experts provide personalized consultation services to help you
                choose the right species for your aquarium. We offer guidance
                on:
              </Sub>
              <ul className="flex flex-col justify-center items-center text-center mb-4">
                <li className="p-2">
                  <H3>Species compatibility</H3>
                </li>
                <li>
                  <H3>Optimal tank environments</H3>
                </li>
                <li>
                  <H3>Feeding and care routines</H3>
                </li>
                <li>
                  <H3>Aquatic plant and decoration choices</H3>
                </li>
              </ul>

              <Sub>
                Whether you're starting a new aquarium or looking to enhance an
                existing one, we provide the knowledge you need to create a
                thriving ecosystem.
              </Sub>
            </div>

            {/* Bottom Right Box */}
            <div className="bg-gray-100 flex flex-col  rounded-lg p-6 justify-center items-center  hover:scale-[1.02] transition hover:shadow-xl">
              <Number>5</Number>
              <H1>Corporate and Event Aquarium Rentals</H1>
              <Sub>
                Looking to make a splash at your next corporate event or special
                occasion? We offer short-term{" "}
                <span className="font-semibold text-teal-600  ">
                  aquarium rentals
                </span>{" "}
                for events, exhibitions, and showrooms.
                <br />
                <br /> Our team will deliver, set up, and maintain the aquarium
                throughout the event, providing a stunning visual centerpiece
                that will leave a lasting impression on your guests.
              </Sub>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

export const H1 = ({ children }) => (
  <h1 className="text-2xl font-bold pt-2 text-center md:text-center pb-6">
    {children}
  </h1>
);

export const Sub = ({ children }) => (
  <h1 className="font-semibold text-center ">{children}</h1>
);

export const H3 = ({ children }) => (
  <h1 className="text-teal-600 text-lg font-semibold py-4">{children}</h1>
);

export const Number = ({ children }) => (
  <h1 className="text-white text-2xl font-semibold p-4 rounded-full bg-black/90 mb-4">
    {children}
  </h1>
);
