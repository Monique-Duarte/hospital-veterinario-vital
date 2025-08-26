import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import logo from '@/assets/logoBranca_HV.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={logo} 
            alt="Logo Hospital Veterinário Vital" 
            height={40} 
            width={40} // É uma boa prática definir width e height
          />
          <span className="font-poppins text-2xl font-bold text-secondary hidden sm:block">
            Hospital Veterinário Vital
          </span>
        </Link>

        {/* Navegação para Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Especialidades</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Serviços</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Unidades</Link>
        </nav>

        <Button variant="destructive">
          Emergência 24H
        </Button>
        
      </div>
    </header>
  );
}