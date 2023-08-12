import { Heading, Text } from "@chakra-ui/react";

type ProjectContentProps = {
    name: string,
    description: string,
    size?: string
}

export function ProjectContent({ name, description, size = "sm" }: ProjectContentProps) {
    return (
        <>
            <Heading size={size}>{name}</Heading>
            <Text size={size} py={2}>{description}</Text>
        </>
    )
}