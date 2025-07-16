import { ReactNode } from "react";

interface ButtonProps {
    className?: string
    children: ReactNode
    onClick?: () => void
}



const Button = ({ children, className, onClick }: ButtonProps) => {
    return (<button onClick={onClick} className={`rounded px-[20px] py-[8px] border cursor-pointer border-[#61F8D5] text-[#61F8D5] font-semibold ${className}`}>
        {children}
    </button>);
}

export default Button;