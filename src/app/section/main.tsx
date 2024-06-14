"use client";

import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";

export default function Home() {
  const name = "John & Maria".split(" ");
  const date = "06.29.2024".split(" ");

  return (
   <>
   
    <section className="h-screen 2xl:h-screen flex items-center justify-center dark:bg-gray-900 bg-[url('./images/mainbg.jpg')] bg-fixed bg-cover bg-center" >
      <div className="w-full h-full absolute z-0 bg-black opacity-50"></div>
      <div className="relative z-1">
          <div className="pinyon-script-regular text-6xl md:text-9xl">
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
              <div className="text-center text-xl md:text-4xl">
               {date.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: i / 50,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
              </div>
        </div>
       {/* <motion.div
       
      initial={{ y:100, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      >
      <div className="max-w-full border-0">
        <div className="w-fit text-center"> 
            <h1 className="text-6xl md:text-9xl">John & Maria</h1>
        </div>
    </div>
    </motion.div> */}
    </div>
    
</section>

</>
  );
}

