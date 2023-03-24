import { useFormContext } from "react-hook-form";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  flexbox,

} from "@chakra-ui/react";

import { IUser } from "../../contexts/UserDataContext";

import { EmailIcon } from '@chakra-ui/icons';

export function Email() {
  const { register, formState: { errors } } = useFormContext<IUser>();

  return (
    <FormControl pt="30px" isInvalid={!errors.email ? false : true}  >
      <FormLabel fontSize={["sm", "md", "lg"]}>Email</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color='gray.300' />}
          position="relative"
        />
        <Flex direction={"column"} flexGrow="1">
          <Input
            type="text"
            variant="outline"
            placeholder="Enter your email."
            _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
            size={["sm", "sm", "md"]}
            {...register("email", {
              required: "Please, enter your email.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,               
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
        </Flex>
      </InputGroup>
    </FormControl >
  )
}
