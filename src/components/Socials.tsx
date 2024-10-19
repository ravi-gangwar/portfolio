import { socialAccounts } from '@/data/Socials'
import React from 'react'

function Socials() {
    return (
        <div className='flex items-center flex-wrap mt-8 xl:flex xl:items-center xl:justify-evenly'>
            {
                socialAccounts.map((social, index) => {

                    const isEdgeElement = index === 0 || index === 1 || index === socialAccounts.length - 1 || index === socialAccounts.length - 2;

                    return (
                        <a 
                            href={social.link} 
                            key={index} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className={`hover:cursor-pointer flex items-center px-5 py-2 border-2 border-gray-500 rounded-3xl ${isEdgeElement ? 'xl:ml-2' : 'ml-5'}`}
                        >
                            <social.icon className='mr-2 text-xl text-zinc-50' />
                            <p className='dark:text-zinc-50 text-1xl'>{social.name}</p>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Socials;
