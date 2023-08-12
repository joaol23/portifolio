"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "theme";

type ClientComponentRootProps = {
    children: ReactNode
}

export function ClientComponentRoot({ children }: ClientComponentRootProps) {
    return (

        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {children}
        </ChakraProvider>
    )
}