"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/../public/logo_vital_transparente_branco.webp";
import { Instagram, Phone, MapPin } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const contatos = {
  imbituba: {
    whatsapp: "5548998001111",
    emergencia: "48998000012",
    mapLink: "https://maps.app.goo.gl/H8f5D9L9qoX3JTTm7",
  },
  laguna: {
    whatsapp: "5548996663838",
    emergencia: "48996509743",
    mapLink: "https://maps.app.goo.gl/tsjzoGDKREnidFfj8",
  },
};

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-vital", "equipe", "diferenciais", "servicos", "unidades", "footer"];
      const offset = 150;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full bg-secondary text-secondary-foreground z-50 shadow-md transition-transform duration-300",
      isHidden ? "-translate-y-full" : "translate-y-0"
    )}>
      <div className="container mx-auto h-24 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center">
          <Image
            src={logo}
            alt="Logo Hospital Veterinário Vital"
            className="h-[80px] w-auto xl:h-[120px]"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 xl:text-lg">
          <Link href="#inicio" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "inicio" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Início</Link>
          <Link href="#sobre-vital" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "sobre-vital" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Sobre</Link>
          <Link href="#equipe" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "equipe" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Equipe</Link>
          <Link href="#servicos" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "servicos" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Serviços</Link>
          <Link href="#diferenciais" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "diferenciais" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Diferenciais</Link>
          <Link href="#unidades" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "unidades" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Unidades</Link>
          <Link href="#contato" className={cn("transition-colors hover:text-white hover:underline underline-offset-4", activeSection === "contato" ? "text-white font-semibold" : "text-secondary-foreground/80")}>Contato</Link>
        </nav>

        <div className="flex items-center gap-4 xl:gap-8">
          <a href="https://www.instagram.com/vital.hospitalveterinario/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-white transition-colors">
            <Instagram className="h-7 w-7" />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-secondary-foreground/80 hover:text-white transition-colors">
                <WhatsappIcon className="h-7 w-7" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-secondary border-none">
              <DialogHeader>
                <DialogTitle className="text-secondary-foreground">
                  Contato via WhatsApp
                </DialogTitle>
                <DialogDescription className="text-secondary-foreground/80">
                  Selecione a unidade com a qual você deseja falar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button asChild>
                  <a
                    href={`https://wa.me/${contatos.laguna.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappIcon className="mr-2 h-4 w-4" /> WhatsApp Laguna
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href={`https://wa.me/${contatos.imbituba.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappIcon className="mr-2 h-4 w-4" /> WhatsApp Imbituba
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                className="sm:flex shadow-lg hover:brightness-90 transition-all"
              >
                Emergência 24H
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-secondary border-none">
              <DialogHeader>
                <DialogTitle className="text-secondary-foreground">
                  Atendimento de Emergência
                </DialogTitle>
                <DialogDescription className="text-secondary-foreground/80">
                  Em caso de emergência, entre em contato com a unidade mais
                  próxima.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">


                <div className="space-y-2">
                  <h3 className="font-poppins font-semibold text-secondary-foreground">
                    Unidade Laguna
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full">
                      <a href={`tel:${contatos.laguna.emergencia}`}>
                        <Phone className="mr-2 h-4 w-4" /> Ligar Agora
                      </a>
                    </Button>
                    <Button asChild className="w-full">
                      <a
                        href={contatos.laguna.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" /> Ver no Mapa
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-poppins font-semibold text-secondary-foreground">
                    Unidade Imbituba / Garopaba
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full">
                      <a href={`tel:${contatos.imbituba.emergencia}`}>
                        <Phone className="mr-2 h-4 w-4" /> Ligar Agora
                      </a>
                    </Button>
                    <Button asChild className="w-full">
                      <a
                        href={contatos.imbituba.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" /> Ver no Mapa
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
