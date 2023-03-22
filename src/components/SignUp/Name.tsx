import { useFormContext } from "react-hook-form";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Text,
  FormHelperText
} from "@chakra-ui/react";

import { IUser } from "../../contexts/UserDataContext";

export function Name() {
  const { register, formState: { errors } } = useFormContext<IUser>();

  return (
    <Stack direction={["column", "column", "row"]} spacing="36px" pl="36px" pr="36px">
      <FormControl isInvalid={!errors.firstname ? false : true}>
        <FormLabel fontSize={["sm", "md", "lg"]}>First name</FormLabel>
        <Input
          type="text"
          variant="outline"
          placeholder="Enter your first name."
          _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
          size={["sm", "sm", "md"]}
          {...register("firstname", { required: "Please, enter your first name." })}
        />
        {errors.firstname && <FormErrorMessage>{errors.firstname.message}</FormErrorMessage>}
      </FormControl>

      <FormControl isInvalid={!errors.lastname ? false : true}>
        <FormLabel fontSize={["sm", "md", "lg"]}>Last name</FormLabel>
        <Input
          type="text"
          variant="outline"
          placeholder="Enter your last name."
          _placeholder={{ opacity: 0.75, color: 'gray.500', fontSize: ["sm", "sm", "md"] }}
          size={["sm", "sm", "md"]}
          {...register("lastname", { required: "Please, enter your last name." })}
        />
        {errors.lastname && <FormErrorMessage>{errors.lastname.message}</FormErrorMessage>}
      </FormControl>
    </Stack>
  )
}
