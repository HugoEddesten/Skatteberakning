import { useForm } from "react-hook-form";
import { FormField } from "../../../components/FormField";
import React, { memo, useMemo, useState } from "react";
import { TaxCalculator } from "../../../business/TaxCalculator";
import { Card } from "../../../components/Card";
import { TaxTableRow } from "../types/Table";
import { Label } from "@/components/ui/label";
import { Form, FormDescription, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SettingsForm } from "./SettingsForm";
import { DataTable } from "@/components/DataTable";
import { taxColumns } from "./TaxColumns";
import { DynamicForm } from "@/components/DynamicForm";
import { MainFormFields } from "./MainFormFields";

export type InputFields = {
  wage: number;
  interval: number;
  amount: number;
};

export type SettingsFields = {
  PBB: number;

  XXGRUB2: number;
  XXGRUA2: number;
  XXGRUA3: number;
  XXGRUB3: number;
  XXGRUC3: number;
  XXGRUA4: number;
  XXGRUB4: number;
  XXGRUA5: number;
  XXGRUB5: number;
  XXGRUC5: number;
  XXGRUB6: number;
};

export const Home = () => {
  const form = useForm<InputFields>();

  const [table, setTable] = useState<TaxTableRow[] | undefined>([]);

  const settingsForm = useForm<SettingsFields>({
    defaultValues: {
      PBB: 58800,
      XXGRUB2: 0.423,
      XXGRUA2: 0.99,
      XXGRUA3: 2.72,
      XXGRUB3: 0.225,
      XXGRUC3: 0.2,
      XXGRUA4: 3.11,
      XXGRUB4: 0.77,
      XXGRUA5: 7.88,
      XXGRUB5: 1.081,
      XXGRUC5: -0.1,
      XXGRUB6: 0.293,
    },
  });

  //const settingsFormValues = settingsForm.watch();

  function onSubmit(values: InputFields) {
    const taxCalculator = new TaxCalculator(settingsForm.getValues());

    setTable(
      taxCalculator.calculateAga(values.wage, values.interval, values.amount)
    );
  }

  return (
    <Card className="flex flex-col gap-4 shadow-md relative">
      <div className="flex justify-between">
        <DynamicForm fields={MainFormFields} form={form} SubmitButton={<Button>Klar</Button>} onSubmit={onSubmit}/>
      
        <SettingsForm {...settingsForm} />
      </div>
      <DataTable data={table ?? []} columns={taxColumns} />
    </Card>
  );
};



{/* <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}>
  <div className="flex flex-row gap-2">
    <div>
      <FormLabel>Arbetsinkomst</FormLabel>
      <FormField
        input={{
          name: "wage",
          type: "number",
          placeholder: "initiella arbetsinkomsten",
        }}
        control={form.control}
      />
    </div>

    <div>
      <FormLabel>Intervall</FormLabel>
      <FormField
        input={{
          name: "interval",
          type: "number",
          placeholder: "intervallet mellan resultat",
        }}
        control={form.control}
      />
    </div>
    <div>
      <FormLabel>Antal</FormLabel>
      <FormField
        input={{
          name: "amount",
          type: "number",
          placeholder: "antal resultat",
        }}
        control={form.control}
      />
    </div>
    <Button className="self-end">Klar</Button>
  </div>

  
</form>
</Form> */}
