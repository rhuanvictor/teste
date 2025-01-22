"use client";
import React from "react";
import {Chip} from "@nextui-org/react";

export default function App() {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-none border-white/50 shadow-pink-500/30 p-2",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      <span className="font-semibold text-[0.6rem] sm:text-xs">✨ Criação, inovação, automação e resolução de problemas.</span>
    </Chip>
  );
}
