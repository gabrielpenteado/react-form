
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Checkbox,
  useToast
} from "@chakra-ui/react";

import { EmailIcon, CheckIcon, LockIcon } from '@chakra-ui/icons'

import { ToggleColorMode } from './ToggleColorMode';

type tUserData = {
  firstname: string,
  lastname: string,
  email: string,
  password: string | number
}


export function SignUp() {
  const [userData, setUserData] = useState<tUserData>(); 
  
  const { register, handleSubmit, formState: {errors} } = useForm<tUserData>();
  
  
  const createUser = (userData: tUserData) => {
    setUserData(userData)
  };
  
  console.log(userData);


  return (
    <form onSubmit={handleSubmit(createUser)}>
      <Box>
        <Flex direction="column" alignItems="center" pb="48px" gap="8px">
          <Box alignSelf="flex-end">
            <ToggleColorMode />
          </Box>
          <Heading as="h1" fontWeight={700} fontSize={["2xl", "2xl", "4xl"]}> React-Hook-Form </Heading>
          <Heading as="h2" fontWeight={500} fontSize={["xl", "xl", "2xl"]}> Integrated with Chakra-UI </Heading>
        </Flex>

        <Stack direction={["column", "column", "row"]} spacing="36px" pl="36px" pr="36px" pt="24x">
          <FormControl>
            <FormLabel fontSize={["sm", "md", "lg"]}>First name</FormLabel>
            <Input
              type="text"
              variant="flushed"
              placeholder="Enter your first name."
              _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
              size={["sm", "sm", "md"]}
              {...register("firstname")}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={["sm", "md", "lg"]}>Last name</FormLabel>
            <Input
              type="text"
              variant="flushed"
              placeholder="Enter your last name."
              _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
              size={["sm", "sm", "md"]}
              {...register("lastname")}
            />
          </FormControl>
        </Stack>

        <Flex direction="column" pl="36px" pr="36px">
          <FormControl pt="30px">
            <FormLabel fontSize={["sm", "md", "lg"]}>Email</FormLabel>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<EmailIcon color='gray.300' />}
              />
              <Input
                type="text"
                variant="flushed"
                placeholder="Enter your email."
                _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
                size={["sm", "sm", "md"]}
                {...register("email")}
              />
            </InputGroup>
          </FormControl>

          <FormControl pt="30px" pb="40px">
            <FormLabel fontSize={["sm", "md", "lg"]}>Password</FormLabel>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<LockIcon color='gray.300' />}
              />
              <Input
                type="text"
                variant="flushed"
                placeholder="Password."
                _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
                size={["sm", "sm", "md"]}
                {...register("password")}
              />
            </InputGroup>
          </FormControl>

          <Checkbox pb="20px">I agree to the Terms and Conditions.</Checkbox>
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
  )
}