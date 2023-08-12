import { badgeProps } from "./badges"

export interface projectProps {
    name: string,
    description: string,
    image: string,
    badges: badgeProps[],
    buttons: buttonProjectProps[]
}

export interface buttonProjectProps {
    text: string,
    href: string
}

export interface OtherProjectsProps extends Omit<projectProps, 'image'> {
    tags: Array<string>
}