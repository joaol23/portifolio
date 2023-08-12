import { CardBody, CardBodyProps, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectContentRootProps extends CardBodyProps {
    children: ReactNode
}

export function ProjectContentRoot({ children, ...rest }: ProjectContentRootProps) {
    return (
        <Stack>
            <CardBody {...rest}>
                {children}
            </CardBody>
        </Stack>
    )
}