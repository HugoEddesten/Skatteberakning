import { Control, Controller } from "react-hook-form"
import { Input } from "./Input"
import { InputHTMLAttributes } from "react"

interface FormFieldProps {
    input: InputHTMLAttributes<any>;
    control: Control<any>;
}

export const FormField = ({input, control}: FormFieldProps ) => {
    return (
        <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            
            placeholder={input.placeholder}
            onBlur={onBlur}
            onChange={(e) => {
                if (input.type === 'number') {
                    if (!isNaN(e.target.value) && e.target.value !== '') {
                        const float = parseFloat(e.target.value)
                        onChange(float)
                    } else {
                        onChange(undefined)
                    }

                } else {
                    onChange(e.target.value)
                }
                
                
                
            }}
            value={value ?? ''}
          />
        )}
        name={input.name ? input.name : ''}
      />
    )
}



