import { Hero } from "@/components/site/Hero";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Servicos } from "@/components/site/Servicos";
import { SobreVital } from "@/components/site/SobreVital";
import { Unidades } from "@/components/site/Unidades";
import { EquipeConteudo } from "@/components/site/EquipeConteudo";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreVital />
      <EquipeConteudo />
      <Servicos />
      <Diferenciais />
      <Unidades />
    </main>
  );
}