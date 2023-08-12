"use client"
import React from "react";
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { Links } from "./NavigationBar/Links";
import { Logo } from "./NavigationBar/Logo";
import { FaGripLines } from "react-icons/fa";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={"base"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Logo />
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <Links />
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<FaGripLines />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Links />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <TbMoonFilled /> : <TbSunFilled />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
