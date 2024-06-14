"use client";

import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import "../globals.css"


export default function Home() {


  return (
   <>
   
    <section className="mt-44 mb-44 h-full flex items-center justify-center dark:bg-gray-900 bg-fixed bg-cover bg-center" >
        <div className="flex-col w-full">
            <div className="mb-12">
                <h2 className="text-center pinyon-script-regular text-8xl text-yellow-800">Save the Date</h2>
            </div>
            <motion.div
       
       initial={{ y:100, opacity: 0 }}
       whileInView={{ y:0, opacity: 1 }}
       viewport={{ once: true }}
       transition={{ delay: 0.5 }}
       
       >
            <div  className="bg-white ml-10 mr-10 md:m-auto md:w-4/12 shadow-lg overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center">
                <div className="flex items-center justify-around px-4 py-6">
                    <div className="text-2xl font-extrabold">June 2024</div>
                </div>
                <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
                    <div className="text-yellow-800">Mon</div>
                    <div className="text-yellow-800">Tue</div>
                    <div className="text-yellow-800">Wed</div>
                    <div className="text-yellow-800">Thu</div>
                    <div className="text-yellow-800">Fri</div>
                    <div className="text-yellow-800">Sat</div>
                    <div className="text-yellow-800">Sun</div>
                    <div className="md:p-2 text-gray-500"></div>
                    <div className="md:p-2 text-gray-500"></div>
                    <div  className="md:p-2 text-gray-500"></div>
                    <div  className="md:p-2 text-gray-500"></div>
                    <div  className="md:p-2 text-black"></div>
                    <div  className="md:p-2 text-black">1</div>
                    <div  className="md:p-2 text-black">2</div>
                    <div  className="md:p-2 text-black">3</div>
                    <div  className="md:p-2 text-black">4</div>
                    <div  className="md:p-2 text-black">5</div>
                    <div  className="md:p-2 text-black">6</div>
                    <div  className="md:p-2 text-black">7</div>
                    <div  className="md:p-2 text-black">8</div>
                    <div  className="md:p-2 text-black">9</div>
                    <div  className="md:p-2 text-black">10</div>
                    <div  className="md:p-2 text-black">11</div>
                    <div  className="md:p-2 text-black">12</div>
                    <div  className="md:p-2 text-black">13</div>
                    <div  className="md:p-2 text-black">14</div>
                    <div  className="md:p-2 text-black">15</div>
                    <div  className="md:p-2 text-black">16</div>
                    <div  className="md:p-2 text-black">17</div>
                    <div  className="md:p-2 text-black">18</div>
                    <div  className="md:p-2 text-black">19</div>
                    <div  className="md:p-2 text-black">20</div>
                    <div  className="md:p-2 text-black">21</div>
                    <div  className="md:p-2 text-black">22</div>
                    <div  className="md:p-2 text-black">23</div>
                    <div  className="md:p-2 text-black">24</div>
                    <div  className="md:p-2 text-black">25</div>
                    <div  className="md:p-2 text-black">26</div>
                    <div  className="md:p-2 text-black">27</div>
                    <div  className="md:p-2 text-black">28</div>
                    <div  className="md:p-2 text-black"><div className="relative"><p className="z-1 text-white relative">29</p><svg className="absolute z-0 top-0 left-0 right-0 w-full top-[-0.5rem]" fill="#723b13" width="40" height="40" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg></div></div>
                    <div  className="md:p-2 text-black">30</div>
                </div>
            </div>
            </motion.div>
        </div>
        <div className="absolute bg-[url('./images/bg2.jpg')] bg-cover bg-center w-96 h-[34rem] left-0 hidden md:block"></div>
        <div className="absolute bg-[url('./images/weddingring.jpg')] bg-cover bg-center w-96 h-[34rem] right-0 hidden md:block"></div>
    </section>
    
</>
  );
}

