
import { useFormContext } from "react-hook-form";
import React, { useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Progress
} from "@chakra-ui/react";

import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function Password() {
  const { register, formState: { errors } } = useFormContext();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl pt="30px" pb="40px" isInvalid={!errors.password ? false : true}>
      <FormLabel fontSize={["sm", "md", "lg"]}>Password</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color='gray.300'
          />}
          position="relative"
        />
        <Flex direction={"column"} flexGrow="1">
          <Input
            type={show ? 'text' : 'password'}
            variant="outline"
            placeholder="Enter your password."
            _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
            size={["sm", "sm", "md"]}
            {...register("password", {
              required: "Please enter a Password",
              minLength: { value: 8, message: "The password must be a minimum of 8 characters and should contain at least one upper- and lower-case letter, a number, and a symbol." }
            })}
          />
          {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
        </Flex>
        <InputRightElement width='4.5rem'>
          <Button bg={"transparent"} variant={"link"} ml="26px" onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Progress height={"4px"} mt="8px" value={33.3} ml="36px" colorScheme="red" />
    </FormControl >
  )
}