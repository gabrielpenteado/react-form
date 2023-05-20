
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserDataContext";

import {
  Box,
  Heading,
} from "@chakra-ui/react";

import { IUser } from "../contexts/UserDataContext"
import { UserCard } from "./DataDisplay/UserCard";

export function DataDisplay() {

  const context = useContext(UserContext);

  const users: IUser[] | undefined = context.userList;

  return (
    <Box display="flex" flexDirection={"column"} alignItems="center">
      <Box pb="40px" position="relative" display="flex" flexDirection="column">
        <Heading as="h1" fontSize={["2xl", "2xl", "4xl"]} pt="29px" alignSelf="center"> Firebase </Heading>
        <Heading as="h2" fontWeight={500} fontSize={["xl", "xl", "2xl"]}> Realtime database </Heading>
      </Box>
      {users && users.map((user) =>
        <ul key={user.uuid}>
          <li>
            <UserCard user={user} />
          </li>
        </ul>
      )}

    </Box>
  )
}