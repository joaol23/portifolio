"use client";
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/socials";
import React from "react";

type ContactComponent = {
  color: string
}

export default function Contact({ color }: ContactComponent) {
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Vamos nos conhecer!</Heading>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              {EMAIL}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <Link href={LINKEDIN_URL} color={`${color}.400`} _hover={{ color: 'lightBlue' }} target="_blank">
                  <FaLinkedin size={28} />
                </Link>

                <Link href={GITHUB_URL} color={`${color}.400`} _hover={{ color: 'lightGray' }} target="_blank">
                  <FaGithub size={28} />
                </Link>

                <Link href={`mailto:${EMAIL}`} color={`${color}.400`} _hover={{ color: 'lightCoral' }} target="_blank">
                  <FaEnvelope size={28} />
                </Link>
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

