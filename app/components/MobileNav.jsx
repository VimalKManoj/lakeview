"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:hidden fixed top-0 bg-white  text-white p-4 flex items-center justify-between z-50 w-full">
      <Link href="/">
        <Image src="/images/Logo.png" width={120} height={60} />
      </Link>
      <div className="cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <Image width={40} height={40} src="/svg/close.svg" />
        ) : (
          <Image width={40} height={40} src="/svg/menu.svg" />
        )}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="absolute top-16 left-0 w-full bg-white/70 backdrop-blur-xl overflow-hidden text-black"
        transition={{ duration: 0.3 }}
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center py-4 space-y-4"
        >
          <li className="text-lg p-3 border-b-2 text-center w-[60%]">
            <Link href="/Gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li className="text-lg p-3  text-center w-[60%]">
            <Link href="/Contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default MobileNavBar;
