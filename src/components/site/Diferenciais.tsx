"use client";

import { useState } from "react";
import Image from "next/image";
import { Beaker, Stethoscope, Cat, Microscope, Home, Clock, Plane, Video, Camera, HeartPulse } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type Diferencial = {
  icon: JSX.Element;
  title: string;
  description: string;
  videoSrc?: string;
  instagramUrl?: string;
  imageSrc?: string;
};

const diferenciais: Diferencial[] = [
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Atendimento 24h",
    description: "Nossa equipe está sempre a postos para emergências, a qualquer hora do dia ou da noite.",
    imageSrc: "/diferencial-24h.jpg"
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: "Laboratório Próprio",
    description: "Resultados de exames mais rápidos e precisos, agilizando o diagnóstico e o tratamento.",
    imageSrc: "/diferencial-lab.jpg"
  },
  {
    icon: <Cat className="w-10 h-10 text-primary" />,
    title: "Ambientes Exclusivos",
    description: "Entrada, consultório e internação exclusivos para felinos, reduzindo o estresse.",
    videoSrc: "/video-felinos.mp4",
    instagramUrl: "https://www.instagram.com/reel/DCXYHAmSY97/"
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Centro Cirúrgico Completo",
    description: "Equipado com tecnologia de ponta para cirurgias seguras e monitoramento avançado.",
    videoSrc: "/video-cirurgia.mp4",
    instagramUrl: "https://www.instagram.com/reel/DJek_frNq0M/"
  },
  {
    icon: <Beaker className="w-10 h-10 text-primary" />,
    title: "ESPECIALIDADES ",
    description: "Equipe qualificada em áreas como  Oncologia, Cirurgia, Anestesiologia, Diagnóstico por Imagem, Felinos e muito mais.",
    videoSrc: "/video-oncologia.mp4",
    instagramUrl: "https://www.instagram.com/reel/DNWgkdjOG8v/"
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: "Anestesia Segura",
    description: "Técnicas modernas e monitoramento avançado para a tranquilidade e segurança do seu pet.",
    videoSrc: "/video-anestesia.mp4",
    instagramUrl: "https://www.instagram.com/reel/CzWSD_nu2tH/"
  },
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: "Internação Segura",
    description: "Monitoramento constante e estrutura completa para garantir a melhor recuperação.",
    videoSrc: "/video-ambiente.mp4",
    instagramUrl: "https://www.instagram.com/reel/C2dRrHpuf4C/"
  },
  {
    icon: <Plane className="w-10 h-10 text-primary" />,
    title: "Viagens Internacionais",
    description: "Realizamos todos os exames e a preparação documental necessária para a viagem do seu cão.",
    imageSrc: "/diferencial-viagem.png"
  },
];

export function Diferenciais() {
  const [selectedVideo, setSelectedVideo] = useState<Diferencial | null>(null);

  return (
    <>
      <section id="diferenciais" className="py-12 lg:py-24 bg-primary-light">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
              Nossos Diferenciais
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Tecnologia e cuidado que fazem a diferença na vida do seu pet.
              Interaja com os cards para saber mais.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {diferenciais.map((item, index) => {
                if (item.videoSrc) {
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedVideo(item)}
                      className="relative flex flex-col items-center text-center p-6 border rounded-lg shadow-sm transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1 bg-[#fff]"
                    >
                      <div className="absolute top-3 right-3 text-primary/70">
                        <Video size={24} />
                      </div>
                      {item.icon}
                      <div className="flex flex-col flex-grow justify-center">
                        <h3 className="mt-4 mb-2 font-poppins text-xl font-bold text-secondary">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                if (item.imageSrc) {
                  return (
                    <div
                      key={index}
                      className="group h-64 [perspective:1000px] bg-[#fff]"
                    >
                      <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0 border rounded-lg [backface-visibility:hidden]">
                          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                            <Camera size={12} />
                            <span>Ver foto</span>
                          </div>
                          <div className="flex flex-col items-center justify-center h-full text-center p-6">
                            {item.icon}
                            <h3 className="mt-4 mb-2 font-poppins text-xl font-bold text-secondary">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 h-full w-full rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                          <Image
                            src={item.imageSrc}
                            alt={`Imagem para ${item.title}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm bg-[#fff]"
                  >
                    {item.icon}
                    <div className="flex flex-col flex-grow justify-center">
                      <h3 className="mt-4 mb-2 font-poppins text-xl font-bold text-secondary">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-fit p-0 sm:p-4 border-0 bg-transparent shadow-none relative">
          <DialogPrimitive.Close className="absolute right-0 -top-2 sm:right-2 sm:top-2 rounded-sm opacity-80 ring-offset-background transition-opacity hover:opacity-100 z-50 bg-white/80 p-1">
            <X className="h-6 w-6 text-secondary" />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>
          
          <DialogHeader className="sr-only">
            <DialogPrimitive.DialogTitle>{`Vídeo sobre ${selectedVideo?.title}`}</DialogPrimitive.DialogTitle>
            <DialogPrimitive.DialogDescription>{selectedVideo?.description}</DialogPrimitive.DialogDescription>
          </DialogHeader>

          {selectedVideo?.videoSrc && (
            <div className="flex flex-col items-center gap-4">
              <div className="h-[90vh] sm:h-[80vh] aspect-[9/16] rounded-lg overflow-hidden shadow-lg"> 
                <video 
                  key={selectedVideo.videoSrc} 
                  className="w-full h-full object-cover" 
                  src={selectedVideo.videoSrc} 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                />
              </div>
              <div className="text-center">
                <Button asChild variant="outline" className="bg-white">
                  <a href={selectedVideo.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Ver no Instagram
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}