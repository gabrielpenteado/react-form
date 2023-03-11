import {
  Box,
  Flex,
  flexbox,
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel
} from "@chakra-ui/react";

import { DeleteIcon } from '@chakra-ui/icons';

import { IUser } from "../../contexts/UserDataContext";

export function UserCard({ user }: { user: IUser }, index: number) {
  return (
    <Stat mt={5} key={index}>
      <Stack
        p={2}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="flex-start"
      >
        <DeleteIcon alignSelf={"flex-end"} cursor="pointer" color={"red.300"} />
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
