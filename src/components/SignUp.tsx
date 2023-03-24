
import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import {
  Box,
  Flex,
  Heading,
  Button,
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

  const methods = useForm<IUser>();
  const submitSuccess = methods.formState.isSubmitSuccessful;
  
  const onSubmit: SubmitHandler<IUser> = (data:IUser) => {  
    context.handleCreateUser(data);
  }

  useEffect (() => {
    methods.reset()
  },[submitSuccess]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box>
          <Flex direction="column" alignItems="center">
            <Box alignSelf="flex-end">
              <ToggleColorMode />
            </Box>
            <Box pb="40px" position="relative" bottom="15px">
              <Heading as="h1" fontWeight={700} fontSize={["2xl", "2xl", "4xl"]}> React-Hook-Form </Heading>
              <Heading as="h2" fontWeight={500} fontSize={["xl", "xl", "2xl"]}> Integrated with Chakra-UI </Heading>
            </Box>
          </Flex>

          <Name />

          <Flex direction="column" pl="36px" pr="36px">
            <Email />
            <Password />
            <HandleCheckbox />         
            <Button
              fontSize={["sm", "md", "lg"]}
              colorScheme="linkedin"
              size={["sm", "md", "lg"]}
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