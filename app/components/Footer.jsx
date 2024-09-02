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
      className={`${poppins.className} w-full overflow-hidden md:overflow-auto relative bg-slate-200/50 mt-14  md:py-10 md:px-8 rounded-t-3xl`}
    >
      <div className="flex justify-between items-center mb-8 flex-col md:flex-row">
        <div className="flex space-x-4 mt-6 md:mt-0">
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
        <Image
          src="/images/Logo_2.png"
          width={220}
          height={50}
          className="w-24 md:ml-40 2xl:w-56 xl:w-36 mt-4 md:mt-0"
        />
        <div className="text-black text-center mt-4 px-20">
          <a href="mailto:info@lakeviewfish.com">info@lakeviewaquatics.com</a> •
          +91 8123578889
        </div>
      </div>

      <p className="text-sm text-black mt-4 text-center mb-4">
        © 2024 All rights reserved to Lakeview Aquatics.
      </p>
    </footer>
  );
};

export default Footer;
