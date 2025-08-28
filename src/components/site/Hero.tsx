"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/hero-imbituba.png", 
    alt: "Fachada do Hospital Veterinário Vital em Imbituba",
    title: "Cuidando de quem você ama",
    subtitle: "Hospitais Veterinários 24h em Imbituba e Laguna com centro cirúrgico e especialistas em oncologia e felinos.",
    buttonText: "Encontre a Unidade Mais Próxima",
    buttonLink: "#unidades",
    textPositionClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full",
  },
  {
    id: 2,
    image: "/hero-laguna.png",    
    alt: "Fachada do Hospital Veterinário Vital em Laguna",
    title: "Cuidando de quem você ama",
    subtitle: "Hospitais Veterinários 24h em Imbituba e Laguna com centro cirúrgico e especialistas em oncologia e felinos.",
    buttonText: "Encontre a Unidade Mais Próxima",
    buttonLink: "#unidades",
    textPositionClass: "bottom-5 md:bottom-5 left-1/2 -translate-x-1/2 text-center w-full",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" /> 
          
          <div className={`absolute z-10 ${slide.textPositionClass} p-4 max-w-3xl`}>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              {slide.subtitle}
            </p>
            <Button asChild className="mt-8 px-8 py-6 text-lg">
              <Link href={slide.buttonLink}>{slide.buttonText}</Link>
            </Button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
