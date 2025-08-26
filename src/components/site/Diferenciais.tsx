import { Beaker, Stethoscope, Cat, Microscope, Home, Clock, Plane } from "lucide-react"; // Adicionado 'Plane'

const diferenciais = [
  {
    icon: <Microscope className="w-8 h-8 text-primary" />,
    title: "Laboratório Próprio",
    description: "Resultados de exames mais rápidos e precisos, agilizando o diagnóstico e o tratamento."
  },
  {
    icon: <Plane className="w-8 h-8 text-primary" />,
    title: "Viagens Internacionais",
    description: "Realizamos todos os exames e a preparação documental necessária para a viagem do seu cão."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Centro Cirúrgico Completo",
    description: "Equipado com tecnologia de ponta para cirurgias seguras, incluindo anestesia inalatória e monitoramento."
  },
  {
    icon: <Cat className="w-8 h-8 text-primary" />,
    title: "Ambientes Exclusivos",
    description: "Entrada, consultório e internação exclusivos para felinos, reduzindo o estresse e promovendo o bem-estar."
  },
  {
    icon: <Beaker className="w-8 h-8 text-primary" />,
    title: "Diversas Especialidades",
    description: "Equipe qualificada em áreas como oncologia, cirurgia, anestesiologia e medicina felina."
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Internação Segura",
    description: "Monitoramento constante e estrutura completa para garantir a melhor recuperação para o seu pet."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Atendimento 24h",
    description: "Estamos sempre prontos para qualquer emergência, a qualquer hora do dia ou da noite."
  }
];

export function Diferenciais() {
  // O resto do código permanece o mesmo
  return (
    <section id="diferenciais" className="py-12 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
            Nossos Diferenciais
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Tecnologia e cuidado que fazem a diferença na vida do seu pet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {item.icon}
              <h3 className="mt-4 mb-2 font-poppins text-xl font-bold text-secondary">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}