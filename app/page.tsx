"use client";

import { ButtonMain } from "@/components/ui/buttons/ButtonMain";
import { InputText } from "@/components/ui/inputs/InputText";
import { InputRadio } from "@/components/ui/inputs/InputRadio";
import { BigTextBold } from "@/components/ui/texts/BigTextBold";
import { Paragraph } from "@/components/ui/texts/Paragraph";
import { BigTextNormal } from "@/components/ui/texts/BigTextNormal";

import { useState } from "react";
import { LandingPageBigText } from "@/components/ui/texts/landing_page/LandingPageBigText";
import { ButtonSquare } from "@/components/ui/buttons/ButtonSquare";

export default function Home() {
  const [input, setInput] = useState("");
  const consoleFunc = () => {
    console.log("siema");
  };
  return (
    <main>
      <h1>Hello!👋</h1>
    </main>
  );
}
