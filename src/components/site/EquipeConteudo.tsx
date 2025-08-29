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
  unit: "Imbituba" | "Laguna";
};

type VideoEducativo = {
  title: string;
  description: string;
  posterSrc: string;
  videoSrc: string;
  instagramUrl: string;
};


const equipe: MembroEquipe[] = [
  { name: "Dr. Douglas Vicentin", role: "Sócio Proprietário, Oncologista, Cirurgião | CRMV-SC 1234", imageSrc: "/equipe-Douglas.jpg", unit: "Imbituba"},
  { name: "Dra. Ana Lívia Vicentin", role: "Anestesiologista e Clínica de Felinos | CRMV-SC 4952", imageSrc: "/equipe-1.jpg", unit: "Laguna"},
  { name: "Dr. Guilherme Pereira", role: "Anestesiologista, Responsável Técnico e Coordenador de equipe | CRMV-SC 11054", imageSrc: "/equipe-Gui.png", unit: "Imbituba"},
  { name: "Dra. Andressa Spengler", role: "Cirurgia Geral e Oncologista | CRMV-SC 9101", imageSrc: "/equipe-Andressa.jpg", unit: "Imbituba"},
  { name: "Dr. Ramon Santiago", role: "Clínico Geral, Responsável pelo Setor de Felinos | CRMV-SC 9101", imageSrc: "/equipe-Ramon.jpg", unit: "Imbituba" },
  { name: "Dra. Marina Noronha", role: "Clínica Geral | CRMV-SC 9101", imageSrc: "/equipe-Mari.jpg", unit: "Imbituba"},
  { name: "Dra. Bruna Oliveira", role: "Clínica e Cirurgia Geral, e Felinos | CRMV-SC 9101", imageSrc: "/equipe-Bruna.jpg", unit: "Imbituba"},
  { name: "Dra. Caroline Tessmer", role: "Ultrassonografista | CRMV-SC 1121", imageSrc: "/equipe-Carol.jpg", unit: "Imbituba"}, 
];


const equipeImbituba = equipe.filter(membro => membro.unit === "Imbituba");
const equipeLaguna = equipe.filter(membro => membro.unit === "Laguna");


const videos: VideoEducativo[] = [
  { title: "Lidando com Casos Complexos", description: "Entenda como nossa equipe multidisciplinar atua.", posterSrc: "/poster-casos.jpg", videoSrc: "/video-casos.mp4", instagramUrl: "https://www.instagram.com/reel/DM8u8C_u2Rw/" },
  { title: "A Importância do Check-up", description: "Prevenção é o melhor caminho para uma vida longa e saudável.", posterSrc: "/poster-checkup.jpg", videoSrc: "/video-checkup.mp4", instagramUrl: "https://www.instagram.com/reel/C1rr4d9OY1Z/" },
  { title: "Obstrução uretral em Felinos", description: "Essa é uma complicação que pode causar sérios riscos à vida do seu amigo.", posterSrc: "/poster-obstrucao.jpg", videoSrc: "/video-cuidado-felinos.mp4", instagramUrl: "https://www.instagram.com/reel/DBMCzMTO4v_/" },
  { title: "Como minimizar o estresse do paciente", description: "O nervosismo do pet pode interferir no exame e até no diagnóstico.", posterSrc: "/poster-comportamento.jpg", videoSrc: "/video-comportamento.mp4", instagramUrl: "https://www.instagram.com/p/DNYUlNhuN7J/" },
  // Adicione os outros vídeos aqui
];


export function EquipeConteudo() {
  const [selectedVideo, setSelectedVideo] = useState<VideoEducativo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenVideo = (video: VideoEducativo) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  return (
    <>
      <section id="equipe-conteudo" className="py-12 lg:py-12 bg-white">
        <div className="container px-4 md:px-6">

          <div className="text-center space-y-4 mb-12">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Nossa Equipe</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Profissionais apaixonados e dedicados ao bem-estar do seu pet, em cada unidade.
            </p>
          </div>

          {/* Seção Equipe Imbituba */}
          {equipeImbituba.length > 0 && (
            <div className="mb-16">
              <h3 className="font-poppins text-2xl font-bold text-secondary mb-8 text-center">Unidade Imbituba</h3>
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center"> 
                {equipeImbituba.map((membro) => (
                  <div key={membro.name} className="flex flex-col items-center text-center space-y-2 max-w-[120px]">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md"> 
                      <Image src={membro.imageSrc} alt={`Foto de ${membro.name}`} fill className="object-cover" />
                    </div>
                    <h4 className="font-poppins font-semibold text-base leading-tight">{membro.name}</h4> 
                    <p className="text-xs text-muted-foreground leading-tight">{membro.role}</p> 
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seção Equipe Laguna */}
          {equipeLaguna.length > 0 && (
            <div>
              <h3 className="font-poppins text-2xl font-bold text-secondary mb-8 text-center">Unidade Laguna</h3>
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                {equipeLaguna.map((membro) => (
                  <div key={membro.name} className="flex flex-col items-center text-center space-y-2 max-w-[120px]">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
                      <Image src={membro.imageSrc} alt={`Foto de ${membro.name}`} fill className="object-cover" />
                    </div>
                    <h4 className="font-poppins font-semibold text-base leading-tight">{membro.name}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{membro.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Parte 2: Conteúdo Educativo */}
          <div className="text-center space-y-4 mt-16 lg:mt-24 mb-16">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Conteúdo Educativo</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Informação de qualidade para você cuidar ainda melhor do seu melhor amigo.
            </p>            
            <Button asChild variant="outline">
              <a href="https://www.instagram.com/vital.hospitalveterinario/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Acessar Instagram para mais dicas
              </a>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div 
                key={video.title} 
                onClick={() => handleOpenVideo(video)}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative w-full aspect-[9/16]">
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
      <Dialog open={!!selectedVideo} onOpenChange={() => {setSelectedVideo(null); setIsPlaying(false);}}>
        <DialogContent className="max-w-fit p-0 sm:p-4 border-0 bg-transparent shadow-none">
          {selectedVideo?.videoSrc && (
            <div className="flex flex-col items-center gap-4">
              <div className="h-[90vh] sm:h-[80vh] aspect-[9/16] rounded-lg overflow-hidden shadow-lg"> 
                <video 
                  key={selectedVideo.videoSrc} 
                  className="w-full h-full object-cover" 
                  src={selectedVideo.videoSrc} 
                  controls 
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