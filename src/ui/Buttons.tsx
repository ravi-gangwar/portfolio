import React, { createContext, PropsWithChildren, useContext } from 'react'
import { GoArrowRight } from "react-icons/go";

type ButtonContext = {
    title: string,
    isArrow: boolean | undefined
}

const ButtonContext = createContext<ButtonContext | null>(null);

type ButtonProps = PropsWithChildren & {
    title: string,
    isArrow?: boolean,
    className?: string
}

function Button({ children, title = 'Click me!', isArrow, className }: ButtonProps) {
    return (
        <ButtonContext.Provider value={{ title, isArrow }}>
            <div className={`flex items-center gap-3 mt-5 ${className}`}>
                {children}
            </div>
        </ButtonContext.Provider>
    )
}

Button.Title = function ButtonTitle() {
    const context = useContext(ButtonContext);
    if (context == null) return null;
    return <button className='min-h-10 dark:bg-zinc-50 dark:text-zinc-900 px-16 py-5 rounded-full italic text-2xl'>{context.title}</button>
}

Button.RightCircle = function ButtonRightCircle() {
    const context = useContext(ButtonContext);
    if (context?.isArrow === false) return null;
    return <span className='min-h-10 dark:bg-zinc-50 dark:text-zinc-900 px-5 py-5 rounded-full'>
        <GoArrowRight className='dark:text-black text-white text-3xl' />
    </span>
}

export default Button;
