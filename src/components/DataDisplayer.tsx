import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export function DataDisplayer() {
  return (
    <Box display="flex" justifyContent="center">
      <Heading as="h1" fontSize={["2xl", "2xl", "4xl"]} pt="44px"> Database </Heading>
    </Box>
  )  
}