"use client";

import { useFormStorage } from "@/hooks/useFormStorage";
import { ExternalLinkIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type ApiTokenModalProps = {};

const ApiTokenModal: React.FC<ApiTokenModalProps> = () => {
  const { zoneId, apiKey, setValue } = useFormStorage();
  const { isOpen, onClose, onOpen } = useDisclosure({
    defaultIsOpen: false,
  });
  const [form, setForm] = useState({
    zoneId,
    apiKey,
  });

  useEffect(() => {
    setForm({
      zoneId,
      apiKey,
    });
  }, [isOpen, zoneId, apiKey]);

  const onSave = () => {
    setValue("zoneId", form.zoneId);
    setValue("apiKey", form.apiKey);
    onClose();
  };

  return (
    <>
      <Box>
        <IconButton
          aria-label="Settings"
          size="lg"
          icon={<SettingsIcon />}
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Set token</ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody display="grid" gap={4}>
              <FormControl>
                <FormLabel>Zone ID</FormLabel>
                <Input
                  name="zoneId"
                  value={form.zoneId}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <FormHelperText>
                  A Zone ID in Cloudflare is a unique identifier for each domain
                  or website.{" "}
                  <Link
                    href="https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/"
                    isExternal
                  >
                    Learn More <ExternalLinkIcon mx="2px" />
                  </Link>
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>API Token</FormLabel>
                <Input
                  name="apiKey"
                  value={form.apiKey}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <FormHelperText>
                  An API token in Cloudflare is a secure key that grants access
                  to specific services or settings within your account. Your
                  token should have edit permission for Zaraz.{" "}
                  <Link
                    href="https://developers.cloudflare.com/fundamentals/api/get-started/create-token/"
                    isExternal
                  >
                    Learn More <ExternalLinkIcon mx="2px" />
                  </Link>
                </FormHelperText>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={onSave} mr={3}>
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export { ApiTokenModal };
