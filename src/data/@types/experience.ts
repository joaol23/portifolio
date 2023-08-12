import { badgeProps } from "./badges"

export interface experienceProps  {
    role: string,
    image: string,
    tags: Array<string>,
    period: {
        begin: string,
        end?: string
    },
    badges: badgeProps[],
    items: itemProps[]
}

export interface itemProps {
    id: string,
    text: string,
    description: string
}