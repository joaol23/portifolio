import { Badge, Button, HStack } from "@chakra-ui/react";
import { buttonProjectProps } from "data/@types/project";

type ProjectButtonsProps = { 
    color: string, 
    buttons: buttonProjectProps[]
}


export function ProjectButtons({ buttons, color }: ProjectButtonsProps) {
    return (
        <HStack py={2}>
            {buttons.map((button) => (
                <a key={button.text} href={button.href} target="_blank">
                    <Button color={`${color}.400`}>
                        {button.text}
                    </Button>
                </a>
            ))}
        </HStack>
    )
}
