"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const color = useTransform(
    scrollY,
    [
      0,
      viewportHeight * 0.92,
      viewportHeight * 2.06,
      viewportHeight * 2.7,
      viewportHeight * 5.38,
    ],

    [
      "rgba(255 ,255 ,255 , 1)",
      "rgba(255 ,255 ,255 , 1)",
      "black",
      "rgba(255 ,255 ,255 , 1)",
      "rgba(255 ,255 ,255 , 1)",
    ]
  );

  const padding = useTransform(
    scrollY,
    [0, viewportHeight - 60, viewportHeight],
    [24, 24, 12]
  );

  const paddingTop = useTransform(
    scrollY,
    [0, viewportHeight - 60, viewportHeight],
    [16, 16, 4]
  );

  return (
    <div className="hidden md:block fixed top-0 z-50 w-full  px-10 py-2 text-white">
      <motion.div
        className="w-full  h-full flex justify-between items-center  rounded-3xl p-2  pt-4 text-gray-850"
        style={{ color, padding, paddingTop }}
      >
        <Link className="font-bold px-16" href="/">
          <Image src="/images/Logo.png" width={200} height={200} />
        </Link>
        <div className="flex gap-10 px-20">
          <Link href="/#about">About Us</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Service">Our Services</Link>
          <Link href="/Contact">Contact Us</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
