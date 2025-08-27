import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import logo from '@/assets/logoBranca.png';
import { Instagram, Phone, MapPin, Facebook } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary text-primary-foreground z-50 shadow-md">
      <div className="container mx-auto h-20 flex items-center justify-between">
        
        <Link href="#inicio" className="flex items-center gap-3">
          <Image 
            src={logo} 
            alt="Logo Hospital Veterinário Vital" 
            className="brightness-0 invert" 
            height={50} 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#inicio" className="text-primary-foreground/80 hover:text-white transition-colors">Início</Link>
          <Link href="#sobre-vital" className="text-primary-foreground/80 hover:text-white transition-colors">Sobre a Vital</Link>
          <Link href="#equipe-conteudo" className="text-primary-foreground/80 hover:text-white transition-colors">Equipe</Link>
          <Link href="#diferenciais" className="text-primary-foreground/80 hover:text-white transition-colors">Diferenciais</Link>
          <Link href="#servicos" className="text-primary-foreground/80 hover:text-white transition-colors">Serviços</Link>
          <Link href="#unidades" className="text-primary-foreground/80 hover:text-white transition-colors">Unidades</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/vital.hospitalveterinario/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/vitalhospitalveterinario" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
            <Facebook />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-primary-foreground/80 hover:text-white transition-colors">
                <WhatsappIcon />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-secondary border-none">
              <DialogHeader>
                <DialogTitle className="text-secondary-foreground">Contato via WhatsApp</DialogTitle>
                <DialogDescription className="text-secondary-foreground/80">
                  Selecione a unidade com a qual você deseja falar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button asChild>
                  <a href="https://wa.me/554898000012" target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon className='mr-2 h-4 w-4'/> WhatsApp Imbituba
                  </a>
                </Button>
                <Button asChild>
                   <a href="https://wa.me/554896509743" target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon className='mr-2 h-4 w-4'/> WhatsApp Laguna
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="destructive" 
                className="hidden sm:flex shadow-lg hover:brightness-90 transition-all"
              >
                Emergência 24H
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Atendimento de Emergência</DialogTitle>
                <DialogDescription>
                  Em caso de emergência, entre em contato com a unidade mais próxima.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className='space-y-2'>
                  <h3 className='font-poppins font-semibold'>Unidade Imbituba / Garopaba</h3>
                  <div className='flex items-center gap-4'>
                    <Button asChild className='w-full'>
                      <a href="tel:4898000012"><Phone className='mr-2 h-4 w-4'/> Ligar Agora</a>
                    </Button>
                    <Button asChild variant="outline" className='w-full'>
                      <a href="https://maps.app.goo.gl/H8f5D9L9qoX3JTTm7" target='_blank' rel="noopener noreferrer"><MapPin className='mr-2 h-4 w-4'/> Ver no Mapa</a>
                    </Button>
                  </div>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-poppins font-semibold'>Unidade Laguna</h3>
                   <div className='flex items-center gap-4'>
                    <Button asChild className='w-full'>
                      <a href="tel:4896509743"><Phone className='mr-2 h-4 w-4'/> Ligar Agora</a>
                    </Button>
                    <Button asChild variant="outline" className='w-full'>
                      <a href="https://maps.app.goo.gl/tsjzoGDKREnidFfj8" target='_blank' rel="noopener noreferrer"><MapPin className='mr-2 h-4 w-4'/> Ver no Mapa</a>
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