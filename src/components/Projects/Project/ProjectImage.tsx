import { Image } from "@chakra-ui/react";

type ProjectImageComponentProps = {
    image: string
}

export function ProjectImage({ image }: ProjectImageComponentProps) {
    return (
        <Image objectFit="cover" src={image} />
    )
}