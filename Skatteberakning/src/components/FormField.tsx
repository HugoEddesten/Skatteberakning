import { Control, Controller, useController } from "react-hook-form";

import { InputHTMLAttributes, useMemo, useState } from "react";
import { Input } from "./ui/input";
import React from "react";

interface FormFieldProps {
  input: InputHTMLAttributes<any>;
  control: Control<any>;
}

export const FormField = ({ input, control }: FormFieldProps) => {
  const { field, fieldState, formState } = useController({
    control: control,
    name: input.name ?? "unnamed",
  });
  
  return (
    <Controller
      control={control}
      rules={{
        maxLength: 100,
      }}
      render={({ field: { onChange, onBlur } }) => (
        <Input
          type={input.type ?? 'text'}
          placeholder={input.placeholder ?? ''}
          className={fieldState.error ? 'ring-1 ring-red-500' : 'ring-0'}
          onChange={(e) => {
            if (input.type === "number") {

              
              if (!isNaN(parseFloat(e.target.value)) && e.target.value) {
      
                const float = parseFloat(e.target.value);
                onChange(float);
              } else {
                onChange(e.target.value);
              }
            } else {
              onChange(e.target.value);
            }
          }}
          value={field.value ?? ""}
          
        />
      )}
      name={input.name ? input.name : ""}
    />
  );
}
