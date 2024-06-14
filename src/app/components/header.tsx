"use client";

import React, { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../images/logo.svg";



export default function Header() {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeColor)
  }, []);

  return (
    <motion.div
    className="w-10/12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      >
      <Navbar className={color ? "bg-blue-600 absolute w-full fixed z-1 shadow-sm ease-in-out duration-300 " :  "bg-transparent absolute w-full fixed z-1 backdrop-blur-sm ease-in-out duration-300"}>
      <Navbar.Toggle className = "z-2" /> 
      <Navbar.Collapse>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#projects">Projects</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#about">About</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="#skills">Skills</Navbar.Link>
        <Navbar.Link className="text-white md:hover:text-sky-500" href="mailto:johnermy@gmail.com">Contact</Navbar.Link>
      </Navbar.Collapse>
     
        </Navbar>
    </motion.div>
  );
}