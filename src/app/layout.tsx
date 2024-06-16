import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Favicon from './images/favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Template 1",
  description: "Wedding Template of E-Invitation",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="https://johnermy.vercel.app/featuredimg.png" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </head>
      <body className="body">
      {/* <Header /> */}
      {children}
      
      </body>
    </html>
  );
}
