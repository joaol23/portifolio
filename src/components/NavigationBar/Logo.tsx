import { HStack, Link } from "@chakra-ui/react";
import React from "react";
import { TbLetterJ, TbLetterL } from "react-icons/tb";

export function Logo() {
    const scrollToHero = () => {
        const heroSection = document.querySelector("#hero");
        heroSection && heroSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Link onClick={scrollToHero}>
            <HStack>
                <TbLetterJ color={"#805AD5"} />
                <TbLetterL color={"#805AD5"} />
            </HStack>
        </Link>
    )
}