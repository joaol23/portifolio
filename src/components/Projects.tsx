"use client";
import {
  Stack,
  Container,
  Box,
} from "@chakra-ui/react";
import { Main } from "./Projects/Main";
import { OtherProjects } from "./Projects/OtherProjects";
import React from "react";

type ProjectsComponent = {
  color: string
}

export default function Projects({ color }: ProjectsComponent) {
  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Main color={color} />
          <OtherProjects color={color} />
        </Stack>
      </Container>
    </>
  );
}
