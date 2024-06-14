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
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      </head>
      <body className="body">
      {/* <Header /> */}
      {children}
      </body>
    </html>
  );
}
