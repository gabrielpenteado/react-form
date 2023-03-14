
import React, { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";

import {
  Box,
  Flex,
  Heading,
  Button,
  useToast
} from "@chakra-ui/react";

import { ToggleColorMode } from './ToggleColorMode';

import { UserContext } from "../contexts/UserDataContext";

import { IUser } from "../contexts/UserDataContext";

import { Name } from "../components/SignUp/Name";
import { Password } from "../components/SignUp/Password";
import { Email } from "../components/SignUp/Email";
import { HandleCheckbox } from "../components/SignUp/Checkbox";



export function SignUp() {

  const context = useContext(UserContext);

  const methods = useForm();

  const toast = useToast();

  function onSubmit(data: IUser, e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    context.handleCreateUser(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box>
          <Flex direction="column" alignItems="center" pb="48px" gap="8px">
            <Box alignSelf="flex-end">
              <ToggleColorMode />
            </Box>
            <Heading as="h1" fontWeight={700} fontSize={["2xl", "2xl", "4xl"]}> React-Hook-Form </Heading>
            <Heading as="h2" fontWeight={500} fontSize={["xl", "xl", "2xl"]}> Integrated with Chakra-UI </Heading>
          </Flex>

          <Name />

          <Flex direction="column" pl="36px" pr="36px">
            <Email />
            <Password />            
            <HandleCheckbox />
            <Button
              fontSize={["md", "md", "lg"]}
              colorScheme="linkedin"
              size={["md", "md", "lg"]}
              type="submit"
            >
              CREATE ACCOUNT
            </Button>
          </Flex>
        </Box>
      </form>
    </FormProvider>
  )
}