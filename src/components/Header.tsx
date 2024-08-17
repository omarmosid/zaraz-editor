import { Box, Flex, Heading } from "@chakra-ui/react";
import { ApiTokenModal } from "./ApiTokenModal";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Flex justifyContent="space-between" p={10}>
        <Heading>Zaraz Editor</Heading>
        <ApiTokenModal />
      </Flex>
    </>
  );
};

export { Header };
