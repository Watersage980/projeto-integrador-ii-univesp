/*Este componente (Navbar.tsx) é a barra principal localizada na parte superior da página*/

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper' //componente de configuração geral da página
import Logo_Exemplo from '/public/logo-exemplo.svg'; //componente criado para logo (teste)
import Link from 'next/link' 

const Navbar = () => {
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-300'>
                        <div className='flex h-16 items-center'>
                            <Link href='/'>
                                <Logo_Exemplo className='h-10 w-10'/>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar