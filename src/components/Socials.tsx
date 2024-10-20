import { socialAccounts } from '@/data/Socials'
import React from 'react'

function Socials() {
    return (
        <div className='mt-20'>
            {/* <p className='text-zinc-50 mt-8 mb-2 text-sm md:text-2xl'>.../ My socials ...</p> */}
            <div className='flex items-center flex-wrap gap-2 md:justify-center lg:flex-none'>
                {
                    socialAccounts.map((social, index) => {

                        const isEdgeElement = index === 0 || index === 1 || index === socialAccounts.length - 1 || index === socialAccounts.length - 2;

                        return (
                            <a
                                href={social.link}
                                key={index}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={`hover:cursor-pointer flex items-center px-2 py-1 md:px-5 md:py-2 border-2 border-zinc-50 rounded-3xl ${isEdgeElement ? 'xl:ml-3' : 'lg:ml-10 lg:mr-10'}`}
                            >
                                <social.icon className='mr-2 text-sm md:text-2xl text-zinc-50' />
                                <p className='dark:text-zinc-50 text-sm'>{social.name}</p>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Socials;
