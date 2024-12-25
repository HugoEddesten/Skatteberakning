import { AllHTMLAttributes } from "react";


export const Card = (props: AllHTMLAttributes<any>) => {

    return (
        <div {...props} className={`bg-slate-400 p-2 rounded-md ${props.className}`} >
            {props.children}
        </div>
    )
}