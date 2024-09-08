import React from "react";
import { FormInputLabel, Input, Group } from "./form-input-styles";

const FormInputComponent = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink htmlFor={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInputComponent;
