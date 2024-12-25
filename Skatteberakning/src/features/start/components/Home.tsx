import { useForm } from "react-hook-form"
import { FormField } from "../../../components/FormField"
import React, { useState } from "react"
import { TaxCalculator } from "../../../business/TaxCalculator"
import { Card } from "../../../components/Card"
import { TaxTableRow } from "../types/Table"

type InputFields = {
    wage: number
    interval: number
    amount: number
}

export const Home = () => {

    const form = useForm<InputFields>()

    const taxCalculator = React.useMemo(() => new TaxCalculator(), []);
    const [table, setTable] = useState<TaxTableRow[] | undefined>(undefined)

    

    function onSubmit(values: InputFields) {
        setTable(taxCalculator.calculateAga(values.wage, values.interval, values.amount))
        
        
    }

    return (
        <Card className="flex flex-col gap-4 shadow-md">
            <Card className="flex gap-2 bg-slate-300 shadow-md">
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)} >
                    <div className="flex flex-row gap-2">
                        <label>
                            <h5>Arbetsinkomst</h5>
                            <FormField input={{name: 'wage', type: 'number', placeholder: 'initiella arbetsinkomsten'}} control={form.control} />
                        </label>
                        
                        <label>
                            <h5>Intervall</h5>
                            <FormField input={{name: 'interval', type: 'number', placeholder: 'intervallet mellan resultat'}} control={form.control} />
                        </label>
                        <label>
                            <h5>Antal</h5>
                            <FormField input={{name: 'amount', type: 'number', placeholder: 'antal intervall'}} control={form.control} />
                        </label>
                    </div>
                    <button className="bg-blue-500 p-2 rounded-md pr-6 pl-6">Klar</button>
                </form>
            </Card>
            <Card className="shadow-inner shadow-slate-500 bg-slate-300 min-h-16">
                {!!table && ( 
                    <div>
                        <div className={`grid grid-cols-${Object.keys(table[0]).length}`}>
                            
                        </div>
                        {table.map((value, index) => {
                            return (
                                <div key={index} className={`grid grid-cols-${Object.keys(value).length}`}>
                                    {index === 0 && (
                                        <>
                                            <h5>
                                                Arbetsinkomst
                                            </h5>
                                            <h5>
                                                Annat
                                            </h5>
                                            <h5>
                                                Taxförvärvsinkomst
                                            </h5>
                                            <h5>
                                                Grundavdrag
                                            </h5>
                                        </>
                                    )}
                                    <h5>
                                        {value.income.wage}
                                    </h5>
                                    <h5>
                                        {value.income.other}
                                    </h5>
                                    <h5>
                                        {value.income.taxableEarnedIncome}
                                    </h5>
                                    <h5>
                                        {value.basicAllowance}
                                    </h5>
                                </div>
                            )
                        })}
                    </div>
                )}
            </Card>
        </Card>
    )
}