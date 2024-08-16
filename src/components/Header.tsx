import { Box, Heading } from "@chakra-ui/react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Box p={10}>
        <Heading>Zaraz Editor</Heading>
      </Box>
    </>
  );
};

export { Header };
