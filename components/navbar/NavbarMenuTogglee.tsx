"use client";

import { useEffect, useState } from 'react';

const Navbar1 = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Calcular o nível de zoom baseado na largura da janela
      const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);

      // Verificar se o dispositivo é um computador (excluindo dispositivos touch)
      const isComputer = window.matchMedia('(pointer: fine)').matches;

      // Esconder o texto se o zoom for 133% ou mais e o dispositivo for um computador
      setIsHidden(isComputer && zoomLevel >= 133);
    };

    // Adicionar evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Checar o zoom na primeira renderização
    handleResize();

    // Limpar evento de redimensionamento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-start">
      {!isHidden && (
        <p className="font-bold text-inherit text-xs sm:text-xs md:text-xs lg:text-sm whitespace-nowrap">
          VICKO SOLUÇÕES
        </p>
      )}
    </nav>
  );
};

export default Navbar1;
