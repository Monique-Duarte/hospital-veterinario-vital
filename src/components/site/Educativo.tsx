"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Instagram, PlayCircle, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type VideoEducativo = {
  title: string;
  description: string;
  posterSrc: string;
  videoSrc: string;
  instagramUrl: string;
};

const videos: VideoEducativo[] = [
  { title: "Lidando com Casos Complexos", description: "Entenda como nossa equipe multidisciplinar atua.", posterSrc: "/poster-casos.jpg", videoSrc: "/video-casos.mp4", instagramUrl: "https://www.instagram.com/reel/DM8u8C_u2Rw/" },
  { title: "A Importância do Check-up", description: "Prevenção é o melhor caminho para uma vida longa e saudável.", posterSrc: "/poster-checkup.jpg", videoSrc: "/video-checkup.mp4", instagramUrl: "https://www.instagram.com/reel/C1rr4d9OY1Z/" },
  { title: "Obstrução uretral em Felinos", description: "Essa é uma complicação que pode causar sérios riscos à vida do seu amigo.", posterSrc: "/poster-obstrucao.jpg", videoSrc: "/video-cuidado-felinos.mp4", instagramUrl: "https://www.instagram.com/reel/DBMCzMTO4v_/" },
  { title: "Como minimizar o estresse do paciente", description: "O nervosismo do pet pode interferir no exame e até no diagnóstico.", posterSrc: "/poster-comportamento.jpg", videoSrc: "/video-comportamento.mp4", instagramUrl: "https://www.instagram.com/p/DNYUlNhuN7J/" },
];

export function Educativo() {
  const [selectedVideo, setSelectedVideo] = useState<VideoEducativo | null>(null);

  return (
    <>
      <section id="educativo" className="py-12 bg-primary-light">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
              Conteúdo Educativo
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Informação de qualidade para você cuidar ainda melhor do seu
              melhor amigo.
            </p>
            <Button asChild variant="outline">
              <a
                href="https://www.instagram.com/vital.hospitalveterinario/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Acessar Instagram para mais dicas
              </a>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div
                key={video.title}
                onClick={() => setSelectedVideo(video)}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative w-full aspect-[9/16]">
                  <Image
                    src={video.posterSrc}
                    alt={`Capa do vídeo ${video.title}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-poppins font-semibold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="max-w-fit p-0 sm:p-4 border-0 bg-transparent shadow-none">
          {selectedVideo?.videoSrc && (
            <div className="relative flex flex-col items-center gap-4">
              <DialogPrimitive.Close className="absolute right-2 top-2 rounded-sm opacity-80 ring-offset-background transition-opacity hover:opacity-100 z-50 bg-white/80 p-1">
                <X className="h-6 w-6 text-secondary" />
                <span className="sr-only">Fechar</span>
              </DialogPrimitive.Close>
              
              <DialogHeader className="sr-only">
                <DialogTitle>{`Vídeo sobre ${selectedVideo?.title}`}</DialogTitle>
                <DialogDescription>{selectedVideo?.description}</DialogDescription>
              </DialogHeader>

              <div className="h-[90vh] sm:h-[80vh] aspect-[9/16] rounded-lg overflow-hidden shadow-lg"> 
                <video 
                  key={selectedVideo.videoSrc} 
                  className="w-full h-full object-cover" 
                  src={selectedVideo.videoSrc} 
                  controls 
                  autoPlay
                  poster={selectedVideo.posterSrc}
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