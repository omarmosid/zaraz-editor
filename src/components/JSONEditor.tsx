"use client";

import { Box, Flex } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

type JSONEditorProps = {};

const JSONEditor: React.FC<JSONEditorProps> = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box
          width="100%"
          maxWidth={{
            base: "100%",
            lg: "60%",
          }}
        >
          <Editor
            defaultLanguage="json"
            defaultValue="{}"
            height="90vh"
            width="100%"
            theme="vs-dark"
            options={{
              fontSize: 18,
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export { JSONEditor };
