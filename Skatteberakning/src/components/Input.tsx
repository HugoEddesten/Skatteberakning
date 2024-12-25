import { InputHTMLAttributes } from "react"



export const Input = (props: InputHTMLAttributes<any>) => {
    return (
        <input {...props} style={{borderWidth: '1px', padding: '0.5rem'}} className="border-gray-800 rounded-md "/>
    )
}