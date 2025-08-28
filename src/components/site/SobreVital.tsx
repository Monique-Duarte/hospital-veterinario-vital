import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";

export function SobreVital() {
  return (
    <section id="sobre-vital" className="py-12 lg:py-24 bg-primary-light">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
              Emoção, razão e inovação ao cuidar do seu pet.
            </h2>

            <div className="hidden md:block space-y-4">
              <p className="text-lg text-muted-foreground">
                Somos o Hospital Veterinário Vital. Somos emoção, razão e inovação! Há mais de 10 anos buscamos a excelência no atendimento e tratamento aos animais. Somos pioneiros na infraestrutura, na tecnologia e na qualificação dos nossos serviços e profissionais para oferecer o melhor atendimento para pets de Santa Catarina. Levar carinho e atenção, trabalhar com a cabeça e o coração e buscar na ciência o alívio da dor e conforto.
              </p>
            </div>

          </div>

          <div className="space-y-4 flex flex-col items-center">

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

            {/* Botão (visível em todos os tamanhos) */}
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