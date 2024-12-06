// Header.tsx
"use client";
import React from 'react';
import Button from '../ui/Buttons';
import { cn } from '@/utils/cn';

type HeadingProps = {
  text: string;
  align?: 'left' | 'right';
  className?: string;
};

function Header() {
  return (
    <div className="mt-10 select-none">
      <div className="flex justify-between">
        <Heading
          text="Full-stack"
          align="left"
          className="lg:flex lg:justify-between lg:items-center"
        />
        <Button className="hidden lg:flex" title="Projects" isArrow>
          <Button.Title className="dark:bg-zinc-50 py-5 px-32 text-3xl lg:rounded-full" />
          <Button.RightCircle
            classNameParent="dark:bg-zinc-50 p-5 rounded-full ml-3"
            classNameArrow="text-3xl"
          />
        </Button>
      </div>
      <div className="flex w-full justify-end">
        {/* <p className="hidden text-gray-400 mt-5 pr-20 text-xl lg:flex lg:flex-wrap max-w-xl leading-relaxed">
          My goal is to
          <span className="text-zinc-50">&nbsp;write maintainable, clean &nbsp;</span>
          and
          <span className="text-zinc-50">&nbsp;understandable code &nbsp;</span>
          so the development process is enjoyable.
        </p> */}
        <Heading text="Developer" align="right" />
      </div>
      <p className="text-gray-400 mt-5 pr-20 text-xl lg:hidden">
        My goal is to
        <span className="text-zinc-50"> write maintainable, clean </span>
        and
        <span className="text-zinc-50"> understandable code </span>
        so the development process is enjoyable.
      </p>
      <Button className="lg:hidden" title="Projects" isArrow>
        <Button.Title className="dark:bg-zinc-50 p-5 px-20 rounded-full lg:text-3xl" />
        <Button.RightCircle
          classNameParent="dark:bg-zinc-50 p-5 rounded-full ml-3"
          classNameArrow="text-3xl"
        />
      </Button>
    </div>
  );
}

function Heading({ text, align = 'left', className }: HeadingProps) {
  return (
    <h1
      className={cn(
        `dark:text-zinc-50 text-6xl mt-2 font-semibold sm:text-8xl lg:text-7xl xl:text-9xl 2xl:text-[200px] 2xl:tracking-widest`,
        align === 'right' ? 'text-right' : 'text-left',
        className
      )}
    >
      {text}
    </h1>
  );
}

export default Header;
