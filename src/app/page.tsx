import { Hero } from "@/components/site/Hero";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Servicos } from "@/components/site/Servicos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Diferenciais />
      <Servicos />
    </main>
  );
}