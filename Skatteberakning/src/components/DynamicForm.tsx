import { FieldDef } from "@/features/start/types/Form";
import { useEffect } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Form, FormMessage } from "./ui/form";

interface DynamicFormProps<TData extends FieldValues> {
  fields: FieldDef<TData>[];
  form: UseFormReturn<TData>; 
  SubmitButton: JSX.Element;
  onSubmit: (values: TData) => void
}

export const DynamicForm = <TData extends FieldValues>({ 
  fields, 
  form,
  SubmitButton,
  onSubmit,
}: DynamicFormProps<TData>) => {
  const { watch, setError, clearErrors } = form;

  const fieldValues = watch();

  useEffect(() => {
    fields.forEach((field) => {
      const value = fieldValues[field.accessorKey];
      if (field.isValid && !field.isValid(value)) {
        setError(field.accessorKey, {
          type: "manual",
          message: field.errorMessage,
        });
      } else {
        clearErrors(field.accessorKey);
      }
    });
  }, [fieldValues, fields, setError, clearErrors]);

  return (
    <Form {...form}>
      <form
        className="grid gap-2 "
        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {fields.map((field) => {
          return (
            <div key={field.accessorKey}>
              {field.label}
              {field.field(form)}
            </div>
          );
        })}
        {SubmitButton}
      </form>
    </Form>
  );
};
