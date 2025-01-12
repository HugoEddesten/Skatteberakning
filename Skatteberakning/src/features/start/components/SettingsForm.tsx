import { Card } from "@/components/Card";
import { DynamicForm } from "@/components/DynamicForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FileSliders } from "lucide-react";
import { useMemo, useState } from "react";
import { settingsFields } from "./SettingsFields";

export const SettingsForm = (form: any) => {
  const [showSettings, setShowSettings] = useState(false);

  const memoizedFields = useMemo(() => settingsFields, [])

  return (
    <Card
      className={`flex flex-col border-2 border-slate-400 absolute top-0 z-10 right-0 gap-2 ${
        showSettings == true ? "bg-slate-300" : "bg-inherit"
      }`}
    >
      <div className="self-end">
        <Button type="button" onClick={() => setShowSettings(!showSettings)}>
          <FileSliders /> Inställningar
        </Button>
      </div>
      
      {showSettings && <DynamicForm form={form} fields={memoizedFields} />}
    </Card>
  );
};
