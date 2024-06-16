"use client";

import React, { useState, useEffect } from "react"
import Main from "./section/main"
import Calendar from "./section/calendar"
import Reception from "./section/reception"
import Dresscode from "./section/dresscode"
import RSVP from "./section/rsvp"
import "./globals.css";



export default function Home() {

   return (
   <>
    <Main /> 
    <Calendar />  
    <Reception /> 
    <Dresscode />
    <RSVP />
    <audio className="absolute bottom-[20px] right-[20px] sticky z-[9999] ml-auto" id="audio" loop controls autoPlay={true}> 
        <source src="/bgmusic.mp3" type="audio/mpeg" />
    </audio>
</>
  );
}

