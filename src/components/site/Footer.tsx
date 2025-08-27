import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logoBranca.png';
import { Instagram, Facebook, Phone, MapPin, Briefcase } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground pt-12 lg:pt-24 pb-8">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto w-full">
        {/* MUDANÇA: Usando um grid de 5 colunas para melhor proporção */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Coluna 1: Logo e Social (ocupa 2 de 5 colunas) */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src={logo} 
                className="brightness-0 invert" 
                alt="Logo Hospital Veterinário Vital" 
                width={180}
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm max-w-xs">
              Cuidado completo e inovador para o seu melhor amigo. Atendimento 24h em Imbituba/Garopaba e Laguna.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/vital.hospitalveterinario/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/vitalhospitalveterinario" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook />
              </a>
            </div>
          </div>

          {/* Coluna 2: Unidades (ocupa 3 de 5 colunas) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-6">

            <h3 className="font-poppins text-lg font-semibold w-full text-center">Nossas Unidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full">

              <div className="space-y-2">
                <p className="font-semibold">Unidade Imbituba / Garopaba</p>
                <a href="https://maps.app.goo.gl/H8f5D9L9qoX3JTTm7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-white">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Rodovia SC 434, km 14, Araçatuba, Imbituba - SC</span>
                </a>
                <a href="https://app.pipefy.com/public/form/mrVar9Vi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:underline pt-2">
                  <Briefcase size={16} /> Trabalhe na Unidade Imbituba
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold">Unidade Laguna</p>
                <a href="https://maps.app.goo.gl/tsjzoGDKREnidFfj8" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-white">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Av. João Pinho, 586 - Mar Grosso, Laguna - SC</span>
                </a>
                <a href="https://app.pipefy.com/public/form/mrVar9Vi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:underline pt-2">
                  <Briefcase size={16} /> Trabalhe na Unidade Laguna
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Hospital Veterinário Vital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}