import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryHeader = () => {
  return (
    <div className="hidden md:block fixed top-0 z-50 w-full  px-10 py-2 text-black">
      <div className="w-full  h-full flex justify-between items-center  rounded-3xl p-2  pt-4 text-gray-850">
        <Link className="font-bold px-16" href="/">
          <Image src="/images/Logo.png" width={200} height={200} />
        </Link>
        <div className="flex gap-10 px-20">
          <Link href="/#about">About Us</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Service">Our Services</Link>
          <Link href="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
