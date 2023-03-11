
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

  const usersArray: IUser[] | undefined = context.userList;
  

  return (
    <Box display="flex" flexDirection={"column"} alignItems="center">
      <Heading as="h1" fontSize={["2xl", "2xl", "4xl"]} pt="44px"> Database </Heading>
      
      {usersArray && usersArray.map((user, index) =>
        <UserCard user={user} index={index} />
      )}

    </Box>
  )
}