import React from "react";
import GalleryHeader from "../components/GalleryHeader";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Page = () => {
  return (
    <div
      className={` ${poppins.className} flex min-h-screen flex-col justify-center items-center 2xl:p-24 w-full mt-10 md:mt-0`}
    >
      <GalleryHeader />
      <section className="flex flex-col md:flex-row items-center  px-3 md:px-20 h-full w-full">
        <div className=" hidden md:flex justify-center md:items-center gap-7 h-full w-full ">
          <div className="relative w-72 h-full rounded-full overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src="/images/contact.jpg"
              alt="Pet 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-around gap-7">
            <div className="relative w-48 h-72 rounded-full overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src="/images/contact_2.jpg"
                alt="Pet 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-48 h-72 rounded-full overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src="/images/contact_3.jpg"
                alt="Pet 3"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="md:ml-16 text-center md:text-left flex flex-col justify-around h-full w-full">
          <h2 className=" self-center md:self-start font-normal text-sm px-3 py-2 my-3 bg-[#FDD604] text-white rounded-3xl mb-4  ">
            Contact Us
          </h2>
          <h2 className="text-2xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-4 select-none">
            We’re Here to Help You Care for Your{" "}
            <span className="">Aquatic World</span>
          </h2>
          <p className="text-gray-600 mb-6 md:mb-0 select-none xl:text-base 2xl:text-lg ">
            Feel free to reach out to us for expert guidance, personalized
            advice, and top-tier aquatic care to ensure your aquarium thrives.
          </p>
          <div className="flex justify-between items-center text-white font-semibold rounded-md w-full h-96 flex-col md:flex-row">
            <div className="flex-1 w-full md:h-[30vh] rounded-3xl md:mr-2 border-2 border-slate-200/70 flex flex-col justify-around items-center p-3 hover:shadow-lg transition-shadow text-black">
              <div className="flex justify-center items-center flex-col">
                <Image
                  src="/svg/email.svg"
                  width={60}
                  height={60}
                  className="pr-2 w-6 h-6 2xl:w-8 2xl:h-8 xl:w-8 xl:h-8 "
                />
                <a href="mailto:info@lakeviewaquatics.com">
                  info@lakeviewaquatics.com
                </a>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Image
                  src="/svg/mobile.svg"
                  width={80}
                  height={80}
                  className="pr-2 w-6 h-6 2xl:w-8 2xl:h-8 xl:w-8 xl:h-8 "
                />
                <a href="tel:+91 8123578889">+91 8123578889</a>
              </div>
            </div>
            <div className="flex-1 w-full mt-4 md:mt-0  md:h-[30vh] border-2 border-slate-200/70 rounded-3xl md:ml-2 flex flex-col justify-around items-center p-3 hover:shadow-lg transition-shadow text-black">
              <div className="flex justify-center items-center ">
                <Image
                  src="/svg/arrow.svg"
                  width={45}
                  height={45}
                  className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
                />
                <h2>Facebook</h2>
              </div>
              <div className="flex justify-center items-center ">
                <Image
                  src="/svg/arrow.svg"
                  width={45}
                  height={45}
                  className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
                />
                <h2>Instagram</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
