export type TaxTable = {
    rows: TaxTableRow[]
}

export class TaxTableRow {
    income: Income
    basicAllowance: number
    taxableIncome: number
    taxes: Tax
    employmentTaxCredit: number
    aquisitionDeduction: number
    finalTax: number
    netIncome: number

    constructor(wage: number, other: number, basicAllowance: number, municipalIncomeTax: number, stateIncomeTax: number, employmentTaxCredit: number, aquisitionDeduction: number) {
        this.income = new Income(wage, other)
        this.basicAllowance = basicAllowance
        this.taxableIncome = this.income.taxableEarnedIncome-basicAllowance
        this.taxes = new Tax(municipalIncomeTax, stateIncomeTax)
        this.employmentTaxCredit = employmentTaxCredit
        this.aquisitionDeduction = aquisitionDeduction
        this.finalTax = this.taxes.total - employmentTaxCredit - aquisitionDeduction
        this.netIncome = this.income.taxableEarnedIncome - this.finalTax
    }
}

class Income {
    wage: number
    other: number
    taxableEarnedIncome: number

    constructor(wage: number, other: number) {
        this.wage = wage
        this.other = other
        this.taxableEarnedIncome = wage + other
    }
}

class Tax {
    municipalIncomeTax: number
    stateIncomeTax: number
    total: number

    constructor(municipalIncomeTax: number, stateIncomeTax: number,) {
        this.municipalIncomeTax = municipalIncomeTax
        this.stateIncomeTax = stateIncomeTax
        this.total = municipalIncomeTax + stateIncomeTax
    }
}