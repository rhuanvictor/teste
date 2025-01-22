"use client";
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="w-[400px] h-auto p-6"> {/* Aumenta largura e espaçamento */}
      <CardHeader className="pb-2 pt-4 px-6 flex-col items-start">
        <p className="text-base uppercase font-bold">Oferecemos:</p> {/* Aumenta o texto */}
        <small className="text-lg text-default-500">Soluções Avançadas e Softwares Inteligentes.</small>
      </CardHeader>
      <CardBody className="overflow-visible py-4">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="software_development.jpg"
          width={360} // Aumenta largura da imagem
        />
      </CardBody>
    </Card>
  );
}
