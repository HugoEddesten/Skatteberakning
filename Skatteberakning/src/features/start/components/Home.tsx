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

export type SettingsFields = {
    PBB: number

    XXGRUB2: number
    XXGRUA2: number
    XXGRUA3: number
    XXGRUB3: number
    XXGRUC3: number
    XXGRUA4: number
    XXGRUB4: number
    XXGRUA5: number
    XXGRUB5: number
    XXGRUC5: number
    XXGRUB6: number
}

export const Home = () => {

    const form = useForm<InputFields>()
    const [showSettings, setShowSettings] = useState(false)
    
    const [table, setTable] = useState<TaxTableRow[] | undefined>(undefined)

    const settingsform = useForm<SettingsFields>({defaultValues: {
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
    }})

    const settingsFormValues = settingsform.watch()

    const taxCalculator = new TaxCalculator(settingsFormValues);
    console.log(settingsform.getValues())

    function onSettingsSubmit(values: SettingsFields) {
        taxCalculator.PBB = values.PBB
        taxCalculator.XXGRUB2 = values.XXGRUB2
        taxCalculator.XXGRUA2 = values.XXGRUA2
        taxCalculator.XXGRUA3 = values.XXGRUA3
        taxCalculator.XXGRUB3 = values.XXGRUB3
        taxCalculator.XXGRUC3 = values.XXGRUC3
        taxCalculator.XXGRUA4 = values.XXGRUA4
        taxCalculator.XXGRUB4 = values.XXGRUB4
        taxCalculator.XXGRUA5 = values.XXGRUA5
        taxCalculator.XXGRUB5 = values.XXGRUB5
        taxCalculator.XXGRUC5 = values.XXGRUC5
        taxCalculator.XXGRUB6 = values.XXGRUB6

    }

    function onSubmit(values: InputFields) {
        setTable(taxCalculator.calculateAga(values.wage, values.interval, values.amount))
    }

    return (
        <Card className="flex flex-col gap-4 shadow-md">
            <Card className="flex flex-col gap-2 bg-slate-300 shadow-md">
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
                    <button className="bg-blue-500 h-12 self-end p-2 rounded-md pr-6 pl-6">Klar</button>
                </form>
                
                    <div className={`self-center ${showSettings == true ? 'bg-amber-500' : 'bg-amber-400'}   p-2 rounded-md`}>
                        <button onClick={() => setShowSettings(!showSettings)}>{showSettings == true ? 'Minimera' : 'Inställningar'}</button>
                    </div>
                    <Card className={`flex flex-col ${showSettings == true ? 'bg-slate-200' : 'bg-inherit'}`}>
                        <form hidden={!showSettings}>
                            <div className="flex flex-row gap-2">
                                <label>
                                    <h5>Prisbasbelopp</h5>
                                    <FormField input={{name: 'PBB', type: 'number'}} control={settingsform.control} />
                                </label>
                                
                                <label>
                                    <h5>XXGRUA2</h5>
                                    <FormField input={{name: 'XXGRUA2', type: 'number'}} control={settingsform.control} />
                                </label>
                                <label>
                                    <h5>XXGRUB2</h5>
                                    <FormField input={{name: 'XXGRUB2', type: 'number'}} control={settingsform.control} />
                                </label>
                            </div>
                        </form>
                    </Card>
                
            </Card>

            <Card className="shadow-inner p-0 bg-slate-200 min-h-16">
                {!!table && ( 
                    <div>
                        <div className="">
                            <div className={`grid rounded-t-md grid-cols-11 bg-slate-300 p-2 `}>
                                <h5>
                                    Arbetsinkomst
                                </h5>
                                <h5>
                                    Annan inkomst
                                </h5>
                                <h5>
                                    Taxförvärvsinkomst
                                </h5>
                                <h5>
                                    Grundavdrag
                                </h5>
                                <h5>
                                    Beskattningsbar inkomst
                                </h5>  
                                <h5>
                                    Komunal inkomstskatt
                                </h5>   
                                <h5>
                                    Statlig inkomstskatt
                                </h5>   
                                <h5>
                                    Jobbskatteavdrag
                                </h5>   
                                <h5>
                                    Förvärvsavdrag
                                </h5>   
                                <h5>
                                    Summa skatt
                                </h5>   
                                <h5>
                                    Nettoinkomst
                                </h5> 
                                 

                            </div>
                            {table.map((value, index) => {
                                return (
                                    <div key={index} className={`grid grid-cols-11 p-2`}>
                                        <h5>
                                            {value.income.wage.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.income.other.toLocaleString()}
                                        </h5>   
                                        <h5>
                                            {value.income.taxableEarnedIncome.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.basicAllowance.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.taxableIncome.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.taxes.municipalIncomeTax.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.taxes.stateIncomeTax.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.employmentTaxCredit.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.aquisitionDeduction.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.finalTax.toLocaleString()}
                                        </h5>
                                        <h5>
                                            {value.netIncome.toLocaleString()}
                                        </h5>
                                    </div>
                                   
                                )
                            })}
                        </div>
                    </div>
                )}
            </Card>
        </Card>
    )
}