import { Hero } from "@/components/site/Hero";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Servicos } from "@/components/site/Servicos";
import { SobreVital } from "@/components/site/SobreVital";
import { Unidades } from "@/components/site/Unidades";
import { Equipe } from "@/components/site/Equipe";
import { Educativo } from "@/components/site/Educativo";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreVital />
      <Equipe />
      <Educativo />
      <Servicos />
      <Diferenciais />
      <Unidades />
    </main>
  );
}