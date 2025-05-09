import { ReactNode } from "react";

interface ButtonProps {
    className?: string
    children: ReactNode
}



const Button = ({ children, className }: ButtonProps) => {
    return (<button className={`w-[163] h-[44] rounded px-[20px] py-[8px] border cursor-pointer border-[#61F8D5] text-[#61F8D5] font-semibold ${className}`}>
        {children}
    </button>);
}

export default Button;