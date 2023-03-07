
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserDataContext";

import {
  Box,
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel
} from "@chakra-ui/react";

import { IUser } from "../contexts/UserDataContext"

export function DataDisplayer() {

  const context = useContext(UserContext);

  const usersArray: IUser[] = context.userList;
  

  return (
    <Box display="flex" flexDirection={"column"} alignItems="center">
      <Heading as="h1" fontSize={["2xl", "2xl", "4xl"]} pt="44px"> Database </Heading>
      
      {usersArray.map((user, index) =>
        <Stat mt={5}>
          <Stack
            p={2}
            borderWidth="3px"
            borderRadius="md"
            direction="column"
            align="flex-start"
            key={index}
          >
            <HStack>
              <StatLabel>Name: {user.firstname}</StatLabel>
              <StatLabel ml={"1px"}>{user.lastname}</StatLabel>
            </HStack>
            <StatLabel>Email: {user.email}</StatLabel>
            <StatLabel>Password: {user.password}</StatLabel>
          </Stack>
        </Stat>
      )}

    </Box>
  )
}