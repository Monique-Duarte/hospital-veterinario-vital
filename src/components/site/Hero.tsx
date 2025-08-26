"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const images = [
    '/hero-imbituba.png',
    '/hero-laguna.png'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-poppins text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Cuidado completo para quem você mais ama.
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              Hospitais Veterinários 24h em Imbituba e Laguna com centro cirúrgico e especialistas em oncologia e felinos.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="#unidades">
                Encontre a Unidade Mais Próxima
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}