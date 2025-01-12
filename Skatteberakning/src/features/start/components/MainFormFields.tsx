import { Label } from "@/components/ui/label";
import { FieldDef } from "../types/Form";
import { InputFields } from "./Home";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";

export const MainFormFields: FieldDef<InputFields>[] = [
  {
    accessorKey: "wage",
    label: <Label>ArbetsInkomst</Label>,
    field: ({control}) => <FormField key={'wage'} control={control} input={{ name: 'wage', type: 'number', placeholder: 'Arbetsinkomst'}}></FormField>
  },
  {
    accessorKey: "interval",
    label: <Label>Intervall</Label>,
    field: ({control}) => <FormField key={'interval'} control={control} input={{ name: 'interval', type: 'number', placeholder: 'Interavllet mellan resultat'}}></FormField>
  },
  {
    accessorKey: "amount",
    label: <Label>Antal</Label>,
    field: ({control}) => <FormField key={'amount'} control={control} input={{ name: 'amount', type: 'number', placeholder: 'Antal Resultat'}}></FormField>
  },
]