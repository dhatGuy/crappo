"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "~/assets";
import Button from "./Button";

const navigation = ["Products", "Features", "About", "Contact"];

const variants = {
  open: {
    // opacity: 1,
    // x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    // opacity: 0,
    // x: "100%",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navbar = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      // document.body.style.overflow = "hidden";
    } else {
      // document.body.style.overflow = "auto";
    }
    console.log(state);
  }, [state]);

  return (
    <nav className="w-full">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 relative">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#" className="flex items-center gap-x-4">
            <Logo />
            <span className="uppercase">crappo</span>
          </a>
          <div className="md:hidden">
            <button className="" onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <motion.div
          variants={variants}
          animate={state ? "open" : "closed"}
          initial={false}
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 absolute md:min-h-fit min-h-screen bg-primary z-20 right-0 left-0 px-4 md:px-0 md:static ${
            state ? "block " : "hidden"
          }`}
        >
          <motion.ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <motion.li key={idx} whileHover={{ scale: 1.1 }}>
                  <a href="#" className="block">
                    {item}
                  </a>
                </motion.li>
              );
            })}
            <ul className="space-y-3 items-center gap-x-6 md:pl-6 md:flex md:space-y-0">
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#" className="block text-center font-medium">
                  Log in
                </a>
              </motion.li>
              <span className="hidden w-px h-6 bg-[#525267] md:block"></span>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Button className="w-full rounded-full py-3.5">Register</Button>
              </motion.li>
            </ul>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
