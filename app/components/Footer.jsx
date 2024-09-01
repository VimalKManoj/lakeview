import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} relative bg-slate-200/50 mt-14  py-10 px-8 rounded-t-3xl`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4 ">
          
          <a
            href="#"
            className="flex items-center space-x-1 text-black hover:underline"
          >
            <span>↗</span>
            <span>FACEBOOK</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-black hover:underline"
          >
            <span>↗</span>
            <span>INSTAGRAM</span>
          </a>
        </div>
        <Image src="/images/Logo_2.png" width={220} height={50}  className="ml-40 2xl:w-56 xl:w-36"/>
        <div className="text-black">
          <a href="mailto:info@lakeviewfish.com">info@lakeviewaquatics.com</a> •
          +91 8123578889
        </div>
      </div>
      {/* <h1 class="text-5xl font-bold text-black">Lakeview Aquatics</h1> */}
      <p className="text-sm text-black mt-4">
        © 2024 All rights reserved to Lakeview Aquatics.
      </p>
    </footer>
  );
};

export default Footer;
