"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";

export function SobreVital() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="sobre-vital" className="py-12 bg-primary-light">
      <div className="container  max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">
          
          <div className="text-center space-y-6 mt-6 w-full">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
              Emoção, razão e inovação
            </h2>
            <div className="block space-y-4">
              <p className="text-xl text-muted-foreground w-full">
                Somos emoção, razão e inovação! Há quase 15 anos buscamos a excelência no atendimento e tratamento aos animais. <br></br> 
                <br></br>
                Somos pioneiros na infraestrutura, na tecnologia e na qualificação dos nossos serviços e profissionais para oferecer o melhor atendimento para pets de Santa Catarina. <br></br> <br></br> 
                Levar carinho e atenção, trabalhar com a cabeça e o coração e buscar na ciência o alívio da dor e conforto.
              </p>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            {isClient && (
              <>
                <div className="hidden md:block w-auto max-h-[560px] rounded-lg overflow-hidden shadow-lg aspect-[9/16]">
                  <video 
                    className="w-full h-full object-cover"
                    src="/video-hospital.mp4" 
                    controls
                    poster="/video-hospital-poster.webp"
                  />
                </div>
                <div className="block md:hidden w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/equipe-imbituba.webp"
                    alt="Equipe do Hospital Veterinário Vital"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </>
            )}
            
            <div className="hidden md:block text-center">
              <Button asChild variant="outline">
                <a href="https://www.instagram.com/reel/DN1XRIzXNvO/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Ver publicação original
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}