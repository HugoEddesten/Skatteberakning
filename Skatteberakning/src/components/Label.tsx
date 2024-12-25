import { LabelHTMLAttributes } from "react"

export const Label = (props: LabelHTMLAttributes<any>) => {
    return (
        <label className="" {...props}>{props.children}</label>
    )
}