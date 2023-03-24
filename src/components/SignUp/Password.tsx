
import { useFormContext } from "react-hook-form";
import React, { useState, useEffect } from "react";

import PasswordStrengthBar from 'react-password-strength-bar';

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
  const { register, formState: { errors, isSubmitSuccessful } } = useFormContext();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [inputPassword, setInputPassword] = useState<string>("")

  // const [passwordLength, setPasswordLength] = useState("");

  // const passwordStrenght = (password: string) => {
  //   if (password.length > 12) {
  //     return (
  //       <Progress height={"4px"} mt="8px" value={100} ml="36px" colorScheme="green" />
  //     )
  //   } else if (password.length >= 6) {
  //     return (
  //       <Progress height={"4px"} mt="8px" value={66.7} ml="36px" colorScheme="yellow" />
  //     )
  //   } else if (password.length > 0) {
  //     return (
  //       <Progress height={"4px"} mt="8px" value={33.3} ml="36px" colorScheme="red" />
  //     )
  //   }
  // }

  const submitSuccess = isSubmitSuccessful;

  useEffect(() => {
    setInputPassword("");
  }, [submitSuccess]);


  return (
    <FormControl pt="30px" pb="40px" isInvalid={!errors.password ? false : true}>
      <>
        <FormLabel fontSize={["sm", "md", "lg"]}>Password</FormLabel>
        <InputGroup pb="4px">
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
                // onChange: e => { setPasswordLength(e.target.value) },
                onChange: e => { setInputPassword(e.target.value) },
                required: "Please enter a Password",
                validate: {
                  checkLength: (value) => value.length >= 6,
                  matchPattern: (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
                }
              })}
            />
            {errors.password?.type === "required" &&
              <FormErrorMessage>Password is required.</FormErrorMessage>}
            {errors.password?.type === "checkLength" &&
              <FormErrorMessage>Password should be at-least 6 characters.</FormErrorMessage>}
            {errors.password?.type === "matchPattern" &&
              <FormErrorMessage>Password should contain at least one: uppercase letter, lowercase
                letter, number and symbol.</FormErrorMessage>}
          </Flex>
          <InputRightElement width='4.5rem'>
            <Button bg={"transparent"} variant={"link"} ml="26px" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* {console.log(inputPassword)} */}
        <PasswordStrengthBar password={inputPassword} minLength={6} />

        {/* {passwordStrenght(passwordLength)} */}

      </>
    </FormControl >
  )
}
