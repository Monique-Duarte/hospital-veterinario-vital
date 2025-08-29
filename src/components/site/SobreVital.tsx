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
    <section id="sobre-vital" className="py-12 lg:py-24 bg-primary-light">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
              Cuidando de quem você ama!
            </h2>
            <div className="hidden md:block space-y-4">
              <p className="text-lg text-muted-foreground">
                Há mais de 10 anos buscamos a excelência no atendimento e tratamento aos animais. Entender a diferença entre uma clínica e um hospital 24h é fundamental para garantir o melhor cuidado.
              </p>
              <p className="text-lg text-muted-foreground">
                Assista ao nosso vídeo e conheça a estrutura completa que oferecemos para levar carinho, atenção e buscar na ciência o alívio da dor e o conforto.
              </p>
            </div>
            <div className="block md:hidden space-y-4">
              <p className="text-lg text-muted-foreground">
                Somos pioneiros na infraestrutura, na tecnologia e na qualificação de nossos profissionais para oferecer o melhor atendimento para pets de Santa Catarina.
              </p>
              <p className="text-lg text-muted-foreground">
                Nossa equipe de especialistas trabalha com tecnologia de ponta e um compromisso inabalável com a ética, o amor e o respeito pela vida.
              </p>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            {/* O vídeo e a imagem agora só renderizam se isClient for true */}
            {isClient && (
              <>
                {/* Bloco do Vídeo: Visível em telas médias (md) para cima */}
                <div className="hidden md:block w-auto max-h-[560px] rounded-lg overflow-hidden shadow-lg aspect-[9/16]">
                  <video 
                    className="w-full h-full object-cover"
                    src="/video-hospital.mp4" 
                    controls
                    poster="/video-hospital-poster.jpg"
                  />
                </div>

                {/* Bloco da Imagem: Visível APENAS em telas pequenas (abaixo de md) */}
                <div className="block md:hidden w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/equipe-imbituba.png"
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