"use client";

import { useZarazConfig } from "@/hooks/useZarazConfig";
import { Header } from "./Header";
import { JSONEditor } from "./JSONEditor";

type MainProps = {};

const Main: React.FC<MainProps> = () => {
  const { config, error, loading } = useZarazConfig();

  return (
    <>
      <Header />
      <JSONEditor defaultValue={JSON.stringify(config, null, 2)} />
    </>
  );
};

export { Main };
