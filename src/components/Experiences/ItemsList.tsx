"use client";
import { CardBody, Flex, Link, List, ListIcon, ListItem } from "@chakra-ui/react"
import { itemProps } from "data/@types/experience"
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

type ItemsListProps = {
    items: itemProps[],
    color: string
}

export function ItemsList({ items, color }: ItemsListProps) {
    const [selectedItemId, setSelectedItemId] = useState<string | null>();

    const handleClick = (id: string) => selectedItemId == id ? setSelectedItemId(null) : setSelectedItemId(id);

    return (
        <CardBody>
            <Flex>
                <List spacing={3}>
                    {items.map((item, index) => (
                        <Flex key={index} flexDirection="column" alignItems={"start"}>                            
                            <ListItem>
                                <Link onClick={() => handleClick(item.id)}>
                                    <ListIcon
                                        boxSize={5}
                                        as={selectedItemId === item.id ? FaChevronDown : FaChevronRight}
                                        color={`${color}.500`}
                                    />
                                    {item.text}
                                </Link>
                            </ListItem>
                            {
                                selectedItemId == item.id &&
                                <CardBody>
                                    {item.description}
                                </CardBody>
                            }
                        </Flex>
                    ))}
                </List>
            </Flex>
        </CardBody>
    )
}