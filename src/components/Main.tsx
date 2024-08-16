"use client";

import { useEffect } from "react";
import { Header } from "./Header";
import { JSONEditor } from "./JSONEditor";
import { getZarazConfig } from "@/utils/api";

type MainProps = {};

const Main: React.FC<MainProps> = () => {
  useEffect(() => {
    getZarazConfig().then((res) => {
      console.log("res", res);
    });
  }, []);

  return (
    <>
      <Header />

      <JSONEditor />
    </>
  );
};

export { Main };
