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

Button.Title = function ButtonTitle({className}: {className: string}) {
    const context = useContext(ButtonContext);
    if (context == null) return null;
    return <button className={className}>{context.title}</button>
}

Button.RightCircle = function ButtonRightCircle({classNameParent, classNameArrow}: {classNameParent: string, classNameArrow: string}) {
    const context = useContext(ButtonContext);
    if (context?.isArrow === false) return null;
    return <span className={classNameParent}>
        <GoArrowRight className={classNameArrow} />
    </span>
}

export default Button;
