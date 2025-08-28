import { Check } from "lucide-react";

const servicos = [
  "Consultas de Rotina",
  "Vacinação",
  "Diagnóstico por Imagem",
  "Cirurgias Gerais",
  "Cirurgias Complexas",
  "Exames Laboratoriais",
  "Internação 24h",
  "Odontologia Veterinária",
  "Farmácia Pet",
  "Microchipagem",
];

export function Servicos() {
  return (
    <section id="servicos" className="py-12 lg:py-16 bg-[#fff] w-[90%] mx-auto">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
            Nossos Serviços
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Oferecemos uma gama completa de serviços para garantir a saúde e o bem-estar do seu melhor amigo.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {servicos.map((servico, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{servico}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}