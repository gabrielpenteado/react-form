import React, { useState } from "react";

import { Checkbox } from "@chakra-ui/react";

export function HandleCheckbox() {
  const [Check, setCheck] = useState<boolean>();

  return (
    <div>
      <Checkbox
        pb="20px"
        isChecked={Check}
        isInvalid={Check ? true : false}
        onChange={
          (e) => setCheck(e.target.checked)
        }
      >I agree to the Terms and Conditions.</Checkbox>
    </div >
  )
}
