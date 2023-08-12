import { Badge, Box, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Image, List, ListIcon, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { experienceProps } from "data/@types/experience";
import { FaChevronRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import { ItemsList } from "./ItemsList";

type ExperienceComponentProps = {
    experience: experienceProps,
    color: string
}

export function Experience({ experience, color }: ExperienceComponentProps) {
    return (
        <Fade bottom>
            <Card size="sm">
                <CardHeader>
                    <Flex justifyContent="space-between">
                        <HStack flexDirection={["column", null, null, null, "row"]}>
                            <Image src={experience.image} h={35} />
                            <Box px={2}>
                                <Text>{experience.role}</Text>
                            </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                            {experience.period.begin} - {experience.period.end || 'Atualmente'}
                        </Text>
                    </Flex>
                </CardHeader>
                <ItemsList items={experience.items} color={color} />
                <CardFooter>
                    <HStack spacing={2}>
                        <SimpleGrid columns={[3, 4, 6]} spacing={4} >
                            {experience.badges.map((badge) => (
                                <Badge
                                    key={badge.text}
                                    colorScheme={badge.colorScheme}
                                >
                                    {badge.text}
                                </Badge>
                            ))}
                        </SimpleGrid>
                    </HStack>
                </CardFooter>
            </Card>
        </Fade>
    );
}