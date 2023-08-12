import { Badge, HStack, StackProps } from "@chakra-ui/react";
import { badgeProps } from "data/@types/badges";

interface ProjectBadgesProps extends StackProps {
    badges: badgeProps[],
}

export function ProjectBadges({ badges, ...rest }: ProjectBadgesProps) {
    return (
        <HStack {...rest} pt={4} spacing={2}>
            {badges.map((badge) => (
                <Badge
                    key={badge.text}
                    colorScheme={badge.colorScheme}
                >
                    {badge.text}
                </Badge>
            ))}
        </HStack>
    )
}