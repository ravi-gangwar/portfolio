"use client"
import React from 'react'
import Button from '../ui/Buttons'

type HeadingProps = {
    text: string,
    align?: 'left' | 'right',
    className?: string
}
function Header() {
    return (
        <div className='mt-10 select-none'>
            <div className='flex justify-between'>
                <Heading text='Full-stack' align='left' className='lg:flex lg:justify-between lg:items-center' />
                <Button className='hidden lg:flex' title='Projects' isArrow >
                    <Button.Title className='dark:bg-zinc-50 p-5 px-20 lg:rounded-full' />
                    <Button.RightCircle classNameParent='dark:bg-zinc-50 p-5 rounded-full ml-3' classNameArrow='text-3xl' />
                </Button>
            </div>
            <Heading text='Developer' align='right' />
            <p className='text-gray-400 mt-5 pr-20 text-1xl'>
                My goal is to
                <span className='text-zinc-50'> write maintainable, clean </span>
                and
                <span className='text-zinc-50'> understandable code </span>
                so the development process is enjoyable.
            </p>
            <Button className='lg:hidden' title='Projects' isArrow >
                <Button.Title className='dark:bg-zinc-50 p-5 px-20 rounded-full lg:text-3xl' />
                <Button.RightCircle classNameParent='dark:bg-zinc-50 p-5 rounded-full ml-3' classNameArrow='text-3xl' />
            </Button>
        </div>
    )
}



function Heading({ text, align = 'left', className }: HeadingProps) {
    return (
        <h1 className={`dark:text-zinc-50 text-6xl mt-2 font-semibold sm:text-8xl lg:text-7xl xl:text-9xl 2xl:text-9xl 2xl:tracking-widest ${align === 'right' ? 'text-right' : 'text-left'} ${className}`}>
            {text}
        </h1>
    )
}



export default Header;
