"use client"
import React from 'react'
import Button from '../ui/Buttons'

type HeadingProps = {
    text: string,
    align?: 'left' | 'right', // Optionally align text
    className?: string // Allow additional classes
}
function Header() {
    return (
        <div className='mt-10 select-none'>
            <div>
                <Heading text='Full-stack' align='left' className='lg:flex lg:justify-between lg:items-center' />
                <Button className='hidden lg:flex 2xl:mr-20' title='Projects' isArrow >
                    <Button.Title />
                    <Button.RightCircle />
                </Button>
                <Heading text='Developer' align='right' />
            </div>
            <p className='text-gray-400 mt-5 pr-20 text-1xl'>
                My goal is to
                <span className='text-zinc-50'> write maintainable, clean </span>
                and
                <span className='text-zinc-50'> understandable code </span>
                so the development process is enjoyable.
            </p>
            <Button className='lg:hidden' title='Projects' isArrow >
                <Button.Title />
                <Button.RightCircle />
            </Button>
        </div>
    )
}



function Heading({ text, align = 'left', className }: HeadingProps) {
    return (
        <h1 className={`dark:text-zinc-50 text-6xl mt-2 font-semibold sm:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl 2xl:tracking-widest ${align === 'right' ? 'text-right' : 'text-left'} ${className}`}>
            {text}
        </h1>
    )
}



export default Header;
