import { Card } from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { ReactNode } from "react";

type ProjectRootProps = {
    children: ReactNode
}

export function ProjectRoot({ children }: ProjectRootProps) {
    return (
        <Fade bottom>
            <Card
                direction={{
                    base: "column",
                }}
                overflow="hidden"
            >
                {children}
            </Card>
        </Fade>
    )
}