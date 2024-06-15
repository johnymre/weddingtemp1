"use client";

import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import "../globals.css"


export default function Dresscode() {
    const name = "Dresscode".split(" ");

  return (
   <>
   
    <section className="md:mt-44 md:mb-44 h-full flex items-center justify-center dark:bg-gray-900 bg-fixed bg-cover bg-center" >
        <div className="flex-col w-full">
            <div className="mb-12">
                <div className="pinyon-script-regular text-yellow-800 text-6xl md:text-8xl text-center">
              {name.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
                <div className="h-8"></div>
                </div>
                        <div className="grid grid-cols-4 gap-4 w-fit m-auto ">
                            <div className="bg-yellow-800 w-[50px] h-[50px] shadow-md rounded-lg"></div>
                            <div className="bg-yellow-400 w-[50px] h-[50px] shadow-md rounded-lg"></div>
                            <div className="bg-white w-[50px] h-[50px] shadow-md rounded-lg"></div>
                            <div className="bg-[#582f0e] w-[50px] h-[50px] shadow-md rounded-lg"></div>
                        </div>
                        <div className="h-12"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit m-auto p-10">
                            <div className="bg-[url('./images/mensuit.jpg')] bg-cover bg-center w-[20rem] md:w-[30rem]  h-[30rem] md:block shadow-md rounded-lg"></div>
                            <div className="bg-[url('./images/women.jpg')] bg-cover bg-center w-[20rem] md:w-[30rem] h-[30rem] md:block shadow-md rounded-lg"></div>
                        </div>
            </div>
        </div>
    </section>
    
</>
  );
}

