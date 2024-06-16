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
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
    <Main /> 
    <Calendar />  
    <Reception /> 
    <Dresscode />
    <RSVP />
    <audio id="audio" loop autoPlay> 
        <source src="/bgmusic.mp3" type="audio/mpeg" />
    </audio>
</>
  );
}

