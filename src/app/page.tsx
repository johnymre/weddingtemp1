"use client";

import React, { useState, useEffect } from "react"
import Main from "./section/main"
import Calendar from "./section/calendar"
import Reception from "./section/reception"

import "./globals.css";


export default function Home() {
   return (
   <>
    <Main /> 
    <Calendar />  
    <Reception /> 
</>
  );
}

