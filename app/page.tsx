"use client";

import { Main } from "@/components/buttons/Main";
import { Text } from "@/components/inputs/Text";
import { Radio } from "@/components/inputs/Radio";
import { Big } from "@/components/texts/Big";
import { Small } from "@/components/texts/Small";

import { useState } from "react";
import { Decorate } from "@/components/texts/Decorate";
import { Square } from "@/components/buttons/Square";

export default function Home() {
  const [input, setInput] = useState("");
  const consoleFunc = () => {
    console.log("siema");
  };
  return (
    <main>
      <h1>Hello!👋</h1>
      <Main onClick={consoleFunc}>Hello!</Main>
      <Square onClick={consoleFunc}>O</Square>
      <div className="max-w-xl">
        <Text
          placeholder="Search"
          onChange={(e: any) => {
            setInput(e.target.value);
            console.log(input);
          }}
          value={input}
        />
      </div>
      <Radio
        label="Test"
        onChange={() => {
          console.log("aaa");
        }}
        value="test"
        checked={false}
      />
      <Big isBold={true}>Siema</Big>
      <Big isBold={false}>Siema</Big>
      <Small isBold={true}>Siema</Small>
      <Small isBold={false}>Siema</Small>
      <Decorate>Siema Notez</Decorate>
    </main>
  );
}
