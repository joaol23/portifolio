import { Badge, Button, Card, CardBody, Divider, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { projects } from "../../data/projects";
import { Fade } from "react-reveal";
import React from "react";
import { Project } from "./Project";

type MainComponent = {
    color: string
}

export function Main({ color }: MainComponent) {
    return (
        <>
            <Stack align="center" direction="row" p={4}>
                <HStack mx={4}>
                    <Text color={`${color}.400`} fontWeight={800}>
                        03
                    </Text>
                    <Text fontWeight={800}>Projects</Text>
                </HStack>
                <Divider orientation="horizontal" />
            </Stack>
            <Stack px={4} spacing={4}>
                {projects.map((project) => (
                    <Project.Root key={project.name}>
                        <Project.Image image={project.image} />
                        <Project.ContentRoot>
                            <Project.Content name={project.name} description={project.description} />
                            <Project.Buttons buttons={project.buttons} color={color} />
                            <Project.Badges badges={project.badges} />
                        </Project.ContentRoot>
                    </Project.Root>
                ))}
            </Stack>
        </>
    )
}