"use client";

import Image from "next/image";

type MembroEquipe = {
  name: string;
  role: string;
  imageSrc: string;
  alt: string;
  unit: "Imbituba" | "Laguna";
};

const equipe: MembroEquipe[] = [
  { name: "Dr. Douglas Vicentin", role: "Sócio Fundador, Diretor Geral | CRMV-SC 5003", imageSrc: "/equipe-Douglas.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"},
  { name: "Dra. Ana Lívia Vicentin", role: "Sócia Fundadora, Anestesiologia e Medicina Felina | CRMV-SC 04952", imageSrc: "/equipe-1.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"},
  { name: "Dr. Guilherme Pereira", role: "Anestesiologia, Responsável Técnico e Coordenador de equipe | CRMV-SC 11054", imageSrc: "/equipe-Gui.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba"},
  { name: "Dra. Andressa Spengler", role: "Cirurgia de Tecidos Moles e Oncologia | CRMV-SC 14192", imageSrc: "/equipe-Andressa.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba"},
  { name: "Dr. Ramon Santiago", role: "Clínica Geral, Medicina Felina | CRMV-SC 12456 ", imageSrc: "/equipe-Ramon.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba" },
  { name: "Dra. Marina Noronha", role: "Clínica Geral | CRMV-SC 14205", imageSrc: "/equipe-Mari.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba"},
  { name: "Dra. Bruna Oliveira", role: "Clínica Geral, Medicina Felina e Cirurgia de Tecidos Moles | CRMV-SC 9959", imageSrc: "/equipe-Bruna.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba"},
  { name: "Dra. Caroline Tessmer", role: "Ultrassonografia - Diagnóstico por Imagem | CRMV-SC 12602", imageSrc: "/equipe-Carol.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba"}, 
  { name: "Dra. Letícia de Oliveira", role: "Anestesiologia e Clínica Geral | CRMV-SC 12405", imageSrc: "/equipe-LeticiaOliveira.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"},
  { name: "Dra. Letícia Laureano", role: "Clínica Geral | CRMV-SC 13580", imageSrc: "/equipe-LeticiaL.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"}, 
  { name: "Dra. Bruna Micheleto", role: "Clínica Geral | CRMV-SC 15204", imageSrc: "/equipe-1.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"},
  { name: "Dr. Vitor Anacleto", role: "Clínica Geral | CRMV-SC 14491", imageSrc: "/equipe-Vitor.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"},
  { name: "Dra. Eduarda Sproesser", role: "Clínica Geral | CRMV-SC 15381", imageSrc: "/equipe-Duda.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Imbituba"},
  // { name: "Dr. ", role: "Cirurgião | CRMV-SC 0000", imageSrc: "/equipe-1.webp", alt: "Foto do médico(a) Veterinário(a)", unit: "Laguna"},
];

const equipeLaguna = equipe.filter(membro => membro.unit === "Laguna");
const equipeImbituba = equipe.filter(membro => membro.unit === "Imbituba");

export function Equipe() {

  return (
    <>
      <section id="equipe" className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
              Nossa Equipe
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Profissionais apaixonados e dedicados ao bem-estar do seu pet.
            </p>
          </div>

          {equipeLaguna.length > 0 && (
            <div className="mb-16">
              <h3 className="font-poppins text-2xl font-bold text-secondary mb-8 text-center">
                Unidade Laguna
              </h3>
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                {equipeLaguna.map((membro) => (
                  <div key={membro.name} className="flex flex-col items-center text-center space-y-2 max-w-[120px]">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md">
                      <Image src={membro.imageSrc} alt={`Foto de ${membro.name}`} fill className="object-cover" />
                    </div>
                    <h4 className="font-poppins font-semibold text-base leading-tight">{membro.name}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{membro.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {equipeImbituba.length > 0 && (
            <div className="mb-16">
              <h3 className="font-poppins text-2xl font-bold text-secondary mb-8 text-center">
                Unidade Imbituba
              </h3>
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                {equipeImbituba.map((membro) => (
                  <div key={membro.name} className="flex flex-col items-center text-center space-y-2 max-w-[120px]">
                    <div className="relative w-32 h-32 overflow-hidden shadow-md object-cover rounded-full">
                      <Image src={membro.imageSrc} alt={`Foto de ${membro.name}`} fill className="object-cover rounded-full" />
                    </div>
                    <h4 className="font-poppins font-semibold text-base leading-tight">{membro.name}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{membro.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}