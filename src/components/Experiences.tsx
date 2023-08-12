"use client"
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { experiences } from "../data/experience";
import { tags } from "../data/experience/tags";
import React from "react";
import { tagProps } from "../data/@types/tag";
import { Experience } from "./Experiences/Experience";

type ExperienceComponentProps = {
  color: string
}

export default function Experiences({ color }: ExperienceComponentProps) {
  const [selected, setSelected] = useState<tagProps>();

  useEffect(() => {
    if (tags.length > 0) {
      setSelected(tags[0]);
    }
  }, [tags]);

  const handleSelected = (value: tagProps) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experiências</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <SimpleGrid columns={[2, 3, 4]} spacing={4} >
                {tags.map((option) => (
                  <Button
                    key={option.id}
                    colorScheme={selected?.id === option.id ? `${color}` : "gray"}
                    onClick={() => handleSelected(option)}
                  >
                    {option.name}
                  </Button>
                ))}
              </SimpleGrid>
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {experiences
              .filter((exp) => selected && exp.tags.includes(selected.id))
              .map((exp, index) => (
                <Experience experience={exp} color={color} key={index} />
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
