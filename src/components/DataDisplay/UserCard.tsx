import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserDataContext";

import {
  Box,
  Button,
  Flex,
  Text,
  flexbox,
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  ListItem
} from "@chakra-ui/react";

import { DeleteIcon } from '@chakra-ui/icons';

import { IUser } from "../../contexts/UserDataContext";

export function UserCard({ user }: { user: IUser }) {

  const context = useContext(UserContext);

  return (
      <Stat mt={5}>
        <Stack
          p={2}
          borderWidth="3px"
          borderRadius="md"
          direction="column"
          align="flex-start"
        >
          <Button variant={"outline"} size={"xs"} alignSelf={"flex-end"} onClick={() => context.deleteUser(user)}>
            <DeleteIcon fontSize={"sm"} color={"red.400"} />
          </Button>
          <HStack>
            <StatLabel fontStyle={"italic"} fontSize="15px">Name: </StatLabel>
            <StatHelpText fontSize={"15px"}>{user.firstname}</StatHelpText>
            <StatHelpText>{user.lastname}</StatHelpText>
          </HStack>
          <HStack>
            <StatLabel fontStyle={"italic"} fontSize="15px">Email: </StatLabel>
            <StatHelpText fontSize={"15px"}>{user.email}</StatHelpText>
          </HStack>
          <HStack>
            <StatLabel fontStyle={"italic"} fontSize="15px">Password: </StatLabel>
            <StatHelpText fontSize={"15px"}>{user.password}</StatHelpText>
          </HStack>
        </Stack>
      </Stat>
  )
}
