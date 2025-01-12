import { Label } from "@/components/ui/label";
import { FieldDef } from "../types/Form";
import { FormField } from "@/components/FormField";
import { SettingsFields } from "./Home";


export const settingsFields: FieldDef<SettingsFields>[] = [
  {
    accessorKey: "PBB",
    label: <Label>PBB</Label>,
    field: (form) => <FormField key={'PBB'} control={form.control} input={{name: 'PBB', type: 'number'}}/>,
    isValid: (value) => {
      return value !== "" && !isNaN(parseFloat(value));
    },
  },
  {
    accessorKey: "XXGRUB2",
    label: <Label>XXGRUB2</Label>,
    field: (form) => <FormField key={'XXGRUB2'} control={form.control} input={{name: 'XXGRUB2', type: 'number'}}/>,
    isValid: (value) => {
      return value !== "" && !isNaN(parseFloat(value));
    },
    errorMessage: 'Fältet får inte lämnas tomt'
  },
  {
    accessorKey: "XXGRUA2",
    label: <Label>XXGRUA2</Label>,
    field: (form) => <FormField key={'XXGRUA2'} control={form.control} input={{name: 'XXGRUA2', type: 'number'}}/>,
    isValid: (value) => {
      return value !== "" && !isNaN(parseFloat(value));
    },
  },
];
