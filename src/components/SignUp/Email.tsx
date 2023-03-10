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

} from "@chakra-ui/react";

import { EmailIcon } from '@chakra-ui/icons';

export function Email() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <FormControl pt="30px">
      <FormLabel fontSize={["sm", "md", "lg"]}>Email</FormLabel>     
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color='gray.300' />}
            position="relative"
          />
          <Input
            type="email"
            variant="flushed"
            placeholder="Enter your email."
            _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
            size={["sm", "sm", "md"]}
            {...register("email")}
          />
        </InputGroup>   
    </FormControl >
  )
}
