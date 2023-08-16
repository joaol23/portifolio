"use client";
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";

type AboutComponent = {
  color: string
}

export default function About({ color }: AboutComponent) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>Sobre</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Trabalho como Desenvolvedor FullStack, sou formado no Cotemig como Técnico de Informática, cursando atualmente Ciência da Computação na FUMEC.
          </Text>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Atualmente estou no foco de aprendizado em padrões de projeto, para que cada vez mais meu código possa ser um código limpo e de fácil manutenção.
          </Text>
        </Stack>
      </Container>
    </>
  );
}

