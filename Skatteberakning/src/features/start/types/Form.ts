import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type FieldDef<TData extends FieldValues> = {
  accessorKey: Path<TData>;
  label: JSX.Element;
  field: (form: UseFormReturn<TData>) => JSX.Element,
  isValid?: (value: string ) => boolean;
  errorMessage?: string
};

export type { FieldDef };
