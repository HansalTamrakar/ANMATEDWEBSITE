import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Form from "./Form";

const Header = () => {
  const arr = ["Home", "About", "Projects", "Experience", "Contact"];
const [form,setForm]=useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.3,
      }}
      className="fixed top-0 left-0 w-full h-16 md:h-20 bg-gray-800 z-50 shadow "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            H
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">
            HansalCode
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex space-x-8 ">
          {arr.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative text-gray-200 font-medium cursor-pointer group"
            >
              {item}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-6"></span>
            </motion.a>
          ))}
        </div>
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7,
            }}
          >
            <FiGithub className="w-10 h-10" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7,
            }}
          >
            <FiTwitter className="w-10 h-10 bg-gradient-to-r from-blue-500" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7,
            }}
          >
            <FiLinkedin className="w-10 h-10" />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
    px-6 py-2.5
    rounded-xl
    font-semibold
    text-white
    bg-gradient-to-r from-violet-600 to-purple-600
    shadow-md
  "
  onClick={()=>{
    setForm(!form)
  }}
          >
            Hire Me
          </motion.button>
        </div>
        
      </div>
      {form && <Form/>}
    </motion.div>
  );
};




export default Header;
