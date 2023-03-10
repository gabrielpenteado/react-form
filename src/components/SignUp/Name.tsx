import { useFormContext } from "react-hook-form";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack
} from "@chakra-ui/react";


export function Name() {
  const { register, formState: { errors } } = useFormContext();

  
  return (
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
  )
}
