import { Badge, Button, ButtonGroup, Card, CardBody, Center, HStack, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { others } from "../../data/projects";
import { useState } from "react";
import { tags } from "../../data/projects/tags";
import React from "react";
import { tagProps } from "../../data/@types/tag";
import { Project } from "./Project";

type OtherProjectsComponent = {
    color: string
}

export function OtherProjects({ color }: OtherProjectsComponent) {
    const [selected, setSelected] = useState<tagProps | undefined>();

    const handleSelected = (value: tagProps | undefined) => {
        setSelected(value);
    };

    return (
        <>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
                Other Projects
            </Text>
            <Center px={4}>
                <ButtonGroup variant="outline">
                    <SimpleGrid columns={[2, 3, 4]} spacing={4} >
                        <Button
                            colorScheme={selected ? "gray" : `${color}`}
                            onClick={() => handleSelected(undefined)}
                        >
                            All
                        </Button>
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
            <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
                {others.filter((other) => selected ? other.tags.includes(selected?.id) : true)
                    .map((other) => (
                        <Project.Root key={other.name}>
                            <Project.ContentRoot h={[null, "40vh"]} >
                                <Project.Content
                                    name={other.name}
                                    description={other.description}
                                    size="sm"
                                />
                                <Project.Buttons buttons={other.buttons} color={color} />
                                <Project.Badges badges={other.badges} flexWrap={'wrap'} />
                            </Project.ContentRoot>
                        </Project.Root>
                    ))}
            </SimpleGrid>
        </>
    )
}