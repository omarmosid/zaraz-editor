"use client";

import { useFormStorage } from "@/hooks/useFormStorage";
import { useZarazConfig } from "@/hooks/useZarazConfig";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Editor, OnChange } from "@monaco-editor/react";
import { useEffect, useState } from "react";

type JSONEditorProps = {
  defaultValue?: string;
};

const JSONEditor: React.FC<JSONEditorProps> = ({}) => {
  const { config, loading, updateZarazConfig } = useZarazConfig();

  const { isInvalid } = useFormStorage();

  const [json, setJson] = useState<string>("");

  const handleEditorChange: OnChange = (value: string | undefined) => {
    if (value !== undefined) {
      setJson(value);
    }
  };

  useEffect(() => {
    if (!config) setJson(`{"data": "Please set your Zone Id and API token"}`);
    else setJson(JSON.stringify(config, null, 2));
  }, [loading]);

  return (
    <>
      <Flex justifyContent="center">
        <Box width="100%">
          <Editor
            defaultLanguage="json"
            defaultValue="// Please set a zoneId and API key"
            value={json}
            onChange={handleEditorChange}
            height="70vh"
            width="100%"
            theme="vs-dark"
            options={{
              fontSize: 14,
            }}
          />
        </Box>
      </Flex>

      <Flex p={4}>
        <Button
          colorScheme="blue"
          disabled={isInvalid}
          isLoading={loading}
          loadingText="Updating.."
          onClick={() => updateZarazConfig(JSON.parse(json))}
        >
          Update
        </Button>
      </Flex>
    </>
  );
};

export { JSONEditor };
