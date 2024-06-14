"use client";

import dynamic from 'next/dynamic'

export default function Home() {
    const WeddingMap = dynamic(() => import('../components/map'), {
        ssr: false,
      })
  return (
   <>
    <WeddingMap></WeddingMap>
</>
  );
}
