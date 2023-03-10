
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
    <FormControl pt="30px" pb="40px">
      <FormLabel fontSize={["sm", "md", "lg"]}>Password</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color='gray.300'
          />}
          position="relative"
        />
        <Input
          type={show ? 'text' : 'password'}
          variant="unstyled"
          placeholder="Enter your password."
          _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
          size={["sm", "sm", "md"]}
          {...register("password")}
        />
        <InputRightElement width='4.5rem'>
          <Button bg={"transparent"} variant={"link"} ml="26px" onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Progress height={"3px"} value={33.3} ml="40px" colorScheme="red" />
    </FormControl>
  )
}