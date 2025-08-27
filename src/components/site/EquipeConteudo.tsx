"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Instagram, PlayCircle } from "lucide-react";

type MembroEquipe = {
  name: string;
  role: string;
  imageSrc: string;
};

type VideoEducativo = {
  title: string;
  description: string;
  posterSrc: string; // Manter posterSrc pois você tem as imagens agora
  videoSrc: string;
  instagramUrl: string;
};

const equipe: MembroEquipe[] = [
  { name: "Dr. Douglas Vincentin", role: "Sócio Proprietário, Oncologista, Cirurgião | CRMV-SC 1234", imageSrc: "/equipe-1.jpg" },
  { name: "Dr. Guilherme Pereira", role: "Anestesiologista, Responsável Técnico e Coordenador de equipe| CRMV-SC 5678", imageSrc: "/equipe-Gui.png" },
  { name: "Dra. Andressa", role: "Cirurgião | CRMV-SC 9101", imageSrc: "/equipe-3.jpg" },
  { name: "Dra. Bruna", role: "Clinico Geral | CRMV-SC 9101", imageSrc: "/equipe-3.jpg" },
  { name: "Dr. Ramon Santiago", role: "Clinico Geral, Clinica de Felinos | CRMV-SC 9101", imageSrc: "/equipe-3.jpg" },
  { name: "Dra. Caroline Tessmer", role: "Ultrassonografista | CRMV-SC 1121", imageSrc: "/equipe-4.jpg" },
  { name: "Dra. Marina", role: "Clinico Geral | CRMV-SC 9101", imageSrc: "/equipe-3.jpg" },
];

const videos: VideoEducativo[] = [
  { title: "Lidando com Casos Complexos", description: "Entenda como nossa equipe multidisciplinar atua.", posterSrc: "/poster-casos.jpg", videoSrc: "/video-casos.mp4", instagramUrl: "https://www.instagram.com/reel/DM8u8C_u2Rw/" },
  { title: "A Importância do Check-up", description: "Prevenção é o melhor caminho para uma vida longa e saudável.", posterSrc: "/poster-checkup.jpg", videoSrc: "/video-checkup.mp4", instagramUrl: "https://www.instagram.com/reel/C1rr4d9OY1Z/" },
  { title: "Obstrução uretral em Felinos", description: "Essa é uma complicação que costuma atingir mais os gatos machos e pode causar sérios riscos à vida do seu amigo de quatro patas.", posterSrc: "/poster-obstrucao.jpg", videoSrc: "/video-cuidado-felinos.mp4", instagramUrl: "https://www.instagram.com/reel/DBMCzMTO4v_/" },
  // Adicione os outros vídeos aqui
];
// ------------------------------------

export function EquipeConteudo() {
  const [selectedVideo, setSelectedVideo] = useState<VideoEducativo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Novo estado para controlar play do vídeo

  const handleOpenVideo = (video: VideoEducativo) => {
    setSelectedVideo(video);
    setIsPlaying(false); // Reseta o estado de play ao abrir o modal
  };

  return (
    <>
      <section id="equipe-conteudo" className="py-12 lg:py-24 bg-white">
        <div className="container px-4 md:px-6">

          {/* Parte 1: Nossa Equipe */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Nossa Equipe</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Profissionais apaixonados e dedicados ao bem-estar do seu pet.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {equipe.map((membro) => (
              <div key={membro.name} className="text-center space-y-2">
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-md mx-auto">
                  <Image src={membro.imageSrc} alt={`Foto de ${membro.name}`} fill className="object-cover" />
                </div>
                <h3 className="font-poppins font-semibold text-lg">{membro.name}</h3>
                <p className="text-sm text-muted-foreground">{membro.role}</p>
              </div>
            ))}
          </div>

          {/* Parte 2: Conteúdo Educativo */}
          <div className="text-center space-y-4 mt-16 lg:mt-24 mb-12">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Conteúdo Educativo</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Informação de qualidade para você cuidar ainda melhor do seu melhor amigo.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div 
                key={video.title} 
                onClick={() => handleOpenVideo(video)} // Usa a nova função
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
              >
                {/* MODIFICADO: aspect-square para imagens de capa */}
                <div className="relative w-full aspect-square">
                  <Image src={video.posterSrc} alt={`Capa do vídeo ${video.title}`} fill className="object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-poppins font-semibold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal para os vídeos educativos */}
      <Dialog open={!!selectedVideo} onOpenChange={() => {setSelectedVideo(null); setIsPlaying(false);}}> {/* Reseta isPlaying ao fechar */}
        <DialogContent className="max-w-fit p-0 sm:p-4 border-0 bg-transparent shadow-none">
          {selectedVideo?.videoSrc && (
            <div className="flex flex-col items-center gap-4">
              <div className="h-[90vh] sm:h-[80vh] aspect-[9/16] rounded-lg overflow-hidden shadow-lg"> 
                {/* Adicionando poster para o vídeo e onPlay para setIsPlaying */}
                <video 
                  key={selectedVideo.videoSrc} 
                  className="w-full h-full object-cover" 
                  src={selectedVideo.videoSrc} 
                  controls 
                  // Adicionado poster e removido autoplay direto para dar controle ao usuário
                  poster={selectedVideo.posterSrc} 
                  onPlay={() => setIsPlaying(true)}
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