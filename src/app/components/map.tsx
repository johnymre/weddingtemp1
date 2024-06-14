"use client";

import { useEffect, Component, useRef } from "react";
import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import "../globals.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Home() {
    const icon = L.icon({ iconUrl: "/leaflet/marker-icon.png" });
    const isBrowser = typeof window !== 'undefined';
  return (
   <>
    <section className="mt-44 mb-44 h-full flex items-center justify-center dark:bg-gray-900 bg-fixed bg-cover bg-center" >
       
        <div className="flex-col w-full">
        <div className="flex flex-col relative items-center justify-center w-full bg-[url('./images/reception.jpg')] bg-cover bg-center w-full h-96 mb-12"> <h2 className="text-center font-['Pinyon_Script'] text-6xl md:text-8xl text-white z-1">Wedding Reception</h2><div className="w-full h-full absolute z-0 bg-black opacity-50 top-0"></div> </div>
            
                <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
                    <div className="relative w-full md:w-2/4 m-10 p-6 md:pl-24 border-0">
                    <MapContainer
                        style={{
                        height: "50vh",
                        width: "100%",
                        }}
                        center={[14.0996427, 120.8796533]}
                        zoom={13}
                        className="border-0 border-solid rounded-lg shadow-lg"
                        
                    >
                        {/* add google map tile url  */}
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[14.0996427, 120.8796533]} icon={icon} >
                        <Popup className="!left-[-160px] !opacity-100">
                            <span className="font-bold text-lg">Hillcreek Gardens Tagaytay</span> <br /> 134 Tagaytay - Alfonso Road Brgy, Alfonso, 4123 Cavite
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                    <div className="relative md:w-2/4 h-full p-6 md:pr-24 text-center md:text-left">
                        <div className="relative md:w-full h-full p-12 md:pr-24 bg-white border-0 border-solid rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-yellow-800">Hillcreek Gardens Tagaytay</h2>
                        <p className="text-black">134 Tagaytay - Alfonso Road Brgy, Alfonso, 4123 Cavite</p>
                        <div className="h-8"></div>
                        <motion.a href="https://www.google.com/maps/place/Hillcreek+Gardens+Tagaytay/@14.0996375,120.8822282,15z/data=!4m9!3m8!1s0x33bd9d7ac7a80e05:0x8fa3203e4b197710!5m2!4m1!1i2!8m2!3d14.0996375!4d120.8822282!16s%2Fg%2F1tjgm3q2?entry=ttu" target="_blank" className="inline-flex w-full md:w-auto  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900  rounded-lg hover:text-white  bg-yellow-800  text-white dark:border-gray-700"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                        
                            See Google Maps
                            <span className="pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                            </span>
                        </motion.a> 
                        </div>
                    </div>
            </div>
        </div>
    </section>

</>
  );
}

