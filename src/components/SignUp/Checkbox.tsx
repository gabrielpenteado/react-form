
import { useFormContext, Controller } from "react-hook-form";

import { Checkbox, FormControl, FormErrorMessage } from "@chakra-ui/react";

// import { IUser } from "../../contexts/UserDataContext";

export function HandleCheckbox() {
  const {register, control, formState: { errors } } = useFormContext();

  return (
    <FormControl
      fontSize={["sm", "md", "lg"]}
      isInvalid={!errors.agreements ? false : true}
      display="flex"
      pt="16px"
      >
      
      <Controller
        name="agreements"
        defaultValue={false}
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            pb="20px"
          >
            I agree to the Terms and Conditions.
          </Checkbox>
        )}
        rules={{
          required: { value: true, message: "Required." }
        }}
      />
      {errors.agreements && <FormErrorMessage pl="16px" mb="28px">{errors.agreements.message}</FormErrorMessage>}
    </FormControl>
  )
}
