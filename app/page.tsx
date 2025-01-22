"use client";  // Garantir que o componente seja tratado como Client Component

import { useTheme } from "next-themes";  // Importando useTheme
import { useEffect, useState } from "react";  // Importando hooks para gerenciamento de estado

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Badge from "@/components/chip/chip";
import ScrollingBanner from "@/components/scrolling-banners/scrolling-banners";
import Picture from "@/components/picture";
import FeaturesBento from "@/components/feature-bento";
import LightBg from "@/components/light-bg";
import Integrations from "@/components/integrations";
import { LastButNotLeast } from "@/components/last-but-not-least";


export default function Home() {
  const { theme, setTheme } = useTheme();  // Acessa o tema atual
  const [mounted, setMounted] = useState(false);  // Estado para verificar se o componente foi montado

  // Efeito para garantir que o componente foi montado e o tema foi carregado
  useEffect(() => {
    setMounted(true);
  }, []);

  // Condicional para renderizar apenas quando o componente foi montado
  if (!mounted) {
    return null;  // Ou outro conteúdo de carregamento
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <Picture />
      
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>Rhuan&nbsp;</h1>
        
        {/* Aplica cor condicionalmente com base no tema */}
        <h1 className={title({ color: theme === "dark" ? "foreground" : "black", size: "lg" })}>
          Victor Santos Lopes&nbsp;
        </h1>
        
        <br />
        <br />
        <Badge />
        
        
      </div>

      
      

      {/* Adiciona o componente de teste */}
      <div className="my-8">
        oiiiiiiiiiiiiiiii
      </div>
      
      
      
      <div className="mt-20 lg:mt-60 flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold flex- justify-center items-center mx-auto text-center">
          Features
        </h1>
        <FeaturesBento />
      </div>
      
      <LightBg />
      <Integrations />
      <ScrollingBanner />
      <br />
      <br />
      <br />
      <br />
      <LastButNotLeast />
    </section>
  );
}
