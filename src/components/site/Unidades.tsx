import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin, Phone } from "lucide-react";
import { WhatsappIcon } from "../icons/WhatsappIcon";

const unidades = [
  {
    name: "Unidade Imbituba / Garopaba",
    address: "Rodovia SC 434, Araçatuba, Imbituba - SC, 88780-000",
    imageSrc: "/hero-imbituba.png",
    mapLink: "https://maps.app.goo.gl/H8f5D9L9qoX3JTTm7",
    phone: "4898000012",
    whatsapp: "554898000012",
  },
  {
    name: "Unidade Laguna",
    address: "Av. João Pinho, 586 - Mar Grosso, Laguna - SC, 88790-000",
    imageSrc: "/hero-laguna.png",
    mapLink: "https://maps.app.goo.gl/tsjzoGDKREnidFfj8",
    phone: "4896509743",
    whatsapp: "554896509743",
  },
];

export function Unidades() {
  return (
    <section id="unidades" className="py-12 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
            Encontre a Unidade Mais Próxima
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Estamos em dois endereços para oferecer o melhor atendimento, com a mesma qualidade e dedicação.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {unidades.map((unidade) => (
            <div key={unidade.name} className="border rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
              <div className="relative w-full h-64">
                <Image
                  src={unidade.imageSrc}
                  alt={`Fachada da ${unidade.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-poppins text-2xl font-bold">{unidade.name}</h3>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                  <span>{unidade.address}</span>
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <a href={`tel:${unidade.phone}`}><Phone className="mr-2 h-4 w-4" /> Ligar Agora</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`https://wa.me/${unidade.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <WhatsappIcon className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}