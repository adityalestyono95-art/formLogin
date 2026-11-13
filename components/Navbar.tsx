'use client'
import { useState } from 'react'

import Link from 'next/link'

function Navbar() {
    const [isOpen,setIsOpen] = useState<boolean>(false);

  return (
    <header className='mx-5 md:mx-20 my-5 '>
        <div className="container">
            <div className={`navbar-container flex flex-row items-center justify-between w-full bg-white text-black p-4 ${isOpen ? 'rounded-t-4xl' : 'rounded-4xl'}`}>
                <div className="navbar-box">
                    <h2 className='uppercase'>Iphone</h2>
                </div>
                <ul className='hidden md:flex gap-10 '>
                    <li>
                        <Link href={"#"}>Beranda</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Tentang Kami</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Produk</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Login</Link>
                    </li>
                </ul>
                
                <button  className='md:hidden' onClick={()=> setIsOpen(!isOpen)} aria-label='Toggle Menu'>
                    <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} ri-2x`}></i>
                </button>

            </div>

           {isOpen && (
                <ul className='md:hidden flex flex-col gap-4 px-4 pb-4 bg-white text-black rounded-b-4xl'>
                        <li>
                            <Link href={"#"}>Beranda</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Tentang Kami</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Produk</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Kontak</Link>
                        </li>
                </ul>
            )}
        </div>
    </header>
  )
}

export default Navbar