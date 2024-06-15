"use client";

import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import "../globals.css"


export default function Rsvp() {
    const name = "Registry".split(" ");

  return (
   <>
   
    <section className="p-10 md:pt-20 md:pb-20 h-full flex items-center justify-center bg-yellow-800" >
        <div className="flex-col w-full ">
            <div className="md:mb-12">
                <div className="pinyon-script-regular text-white text-6xl md:text-8xl text-center">
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
                        <div className="flex md:w-[50rem] m-auto text-center">
                            <p className="text-white">While your presence at our wedding is the greatest gift, if you wish to share in our joy through a gift, please visit our registry.</p>
                        </div>
                        <div className="h-8"></div>
                        <div className="flex items-center justify-center md:w-[50rem] m-auto">
                            <motion.a href="https://www.google.com/maps/place/Hillcreek+Gardens+Tagaytay/@14.0996375,120.8822282,15z/data=!4m9!3m8!1s0x33bd9d7ac7a80e05:0x8fa3203e4b197710!5m2!4m1!1i2!8m2!3d14.0996375!4d120.8822282!16s%2Fg%2F1tjgm3q2?entry=ttu" target="_blank" className="inline-flex w-full md:w-auto  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900  rounded-lg hover:text-white  bg-yellow-400  text-white dark:border-gray-700"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                            
                                RSVP Link
                                <span className="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                                </span>
                            </motion.a> 
                        </div>
                        
            </div>
        </div>
    </section>
    
</>
  );
}

