import { ColumnDef } from "@tanstack/react-table";
import { TaxTableRow } from "../types/Table";

export const taxColumns: ColumnDef<TaxTableRow>[] = [
    {
        header: "Inkomster",
        columns: [
            {
                accessorKey: "income.wage",
                header: "Arbetsinkomst",
                cell: ({ row }) => <span>{row.original.income.wage.toLocaleString()}</span>,
            },
            {
                accessorKey: "income.other",
                header: "Annan inkomst",
                cell: ({ row }) => <span>{row.original.income.other.toLocaleString()}</span>,
            },
            {
                accessorKey: "income.taxableEarnedIncome",
                header: "Taxförvärvsinkomst",
                cell: ({ row }) => <span>{row.original.income.taxableEarnedIncome.toLocaleString()}</span>,
            },
        ],
    },
    {
        header: "Avdrag och Reduktioner",
        columns: [
            {
                accessorKey: "basicAllowance",
                header: "Grundavdrag",
                cell: ({ row }) => <span>{row.original.basicAllowance.toLocaleString()}</span>,
            },
            {
                accessorKey: "employmentTaxCredit",
                header: "Jobbskatteavdrag",
                cell: ({ row }) => <span>{row.original.employmentTaxCredit.toLocaleString()}</span>,
            },
            {
                accessorKey: "aquisitionDeduction",
                header: "Förvärvsavdrag",
                cell: ({ row }) => <span>{row.original.aquisitionDeduction.toLocaleString()}</span>,
            },
        ],
    },
    {
        header: "Skatter",
        columns: [
            {
                accessorKey: "taxes.municipalIncomeTax",
                header: "Kommunalskatt",
                cell: ({ row }) => <span>{row.original.taxes.municipalIncomeTax.toLocaleString()}</span>,
            },
            {
                accessorKey: "taxes.stateIncomeTax",
                header: "Statlig inkomstskatt",
                cell: ({ row }) => <span>{row.original.taxes.stateIncomeTax.toLocaleString()}</span>,
            },
            {
                accessorKey: "taxes.total",
                header: "Total skatt",
                cell: ({ row }) => <span>{row.original.taxes.total.toLocaleString()}</span>,
            },
        ],
    },
    {
        header: "Resultat",
        columns: [
            {
                accessorKey: "taxableIncome",
                header: "Beskattningsbar inkomst",
                cell: ({ row }) => <span>{row.original.taxableIncome.toLocaleString()}</span>,
            },
            {
                accessorKey: "finalTax",
                header: "Slutlig skatt",
                cell: ({ row }) => <span>{row.original.finalTax.toLocaleString()}</span>,
            },
            {
                accessorKey: "netIncome",
                header: "Netto inkomst",
                cell: ({ row }) => <span>{row.original.netIncome.toLocaleString()}</span>,
            },
        ],
    },
]