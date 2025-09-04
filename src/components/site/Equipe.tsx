"use client";

import Image from "next/image";

type MembroEquipe = {
  name: string;
  role: string;
  imageSrc: string;
  unit: "Imbituba" | "Laguna";
};

const equipe: MembroEquipe[] = [
  { name: "Dr. Douglas Vicentin", role: "Sócio Fundador, Oncologia, Cirurgia de Tecidos Moles | CRMV-SC 5003", imageSrc: "/equipe-Douglas.jpg", unit: "Laguna"},
  { name: "Dra. Ana Lívia Vicentin", role: "Sócia Fundadora, Anestesista e Clínica de Felinos | CRMV-SC 0000", imageSrc: "/equipe-1.jpg", unit: "Laguna"},
  { name: "Dr. Guilherme Pereira", role: "Anestesista, Responsável Técnico e Coordenador de equipe | CRMV-SC 11054", imageSrc: "/equipe-Gui.png", unit: "Imbituba"},
  { name: "Dra. Andressa Spengler", role: "Sócia-proprietária, Cirurgia de Tecidos Moles e Oncologista | CRMV-SC 14192", imageSrc: "/equipe-Andressa.jpg", unit: "Imbituba"},
  { name: "Dr. Ramon Santiago", role: "Clínico Geral, Responsável pelo Setor de Felinos | CRMV-SC 12456 ", imageSrc: "/equipe-Ramon.jpg", unit: "Imbituba" },
  { name: "Dra. Marina Noronha", role: "Clínica Geral | CRMV-SC 14205", imageSrc: "/equipe-Mari.jpg", unit: "Imbituba"},
  { name: "Dra. Bruna Oliveira", role: "Clínica de Felinos e Cirurgia de Tecidos Moles | CRMV-SC 9959", imageSrc: "/equipe-Bruna.jpg", unit: "Imbituba"},
  { name: "Dra. Caroline Tessmer", role: "Ultrassonografista | CRMV-SC 12602", imageSrc: "/equipe-Carol.png", unit: "Imbituba"}, 
  { name: "Dra. Letícia de Oliveira", role: "Anestesista | CRMV-SC 12405", imageSrc: "/equipe-LeticiaOliveira.jpg", unit: "Laguna"},
  { name: "Dra. Letícia Laureano", role: "Clínica Geral | CRMV-SC 13580", imageSrc: "/equipe-LeticiaLaureano.jpg", unit: "Laguna"},
  { name: "Dra. Bruna Micheleto", role: "Clínica Geral | CRMV-SC 15204", imageSrc: "/equipe-1.jpg", unit: "Laguna"},
  { name: "Dr. Vitor Anacleto", role: "Clínica Geral | CRMV-SC 14491", imageSrc: "/equipe-Vitor.jpg", unit: "Laguna"},
  { name: "Dra. Eduarda Sproesser", role: "Clínica Geral e Anestesista | CRMV-SC 00000", imageSrc: "/equipe-Duda.jpg", unit: "Imbituba"},
  // { name: "Dr. ", role: "Cirurgião | CRMV-SC 0000", imageSrc: "/equipe-1.jpg", unit: "Laguna"},
];

const equipeLaguna = equipe.filter(membro => membro.unit === "Laguna");
const equipeImbituba = equipe.filter(membro => membro.unit === "Imbituba");

export function Equipe() {

  return (
    <>
      <section id="equipe" className="py-12 bg-white">
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