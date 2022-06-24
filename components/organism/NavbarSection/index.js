import Link from "next/link";
import React, { useState } from "react";
import {
    MenuOutlined
} from '@ant-design/icons';
import NavbarList from "../../molecule/NavbarList";


export default function NavbarSection() {
    const [buttonMenu, setButtonMenu] = useState(false)
    const listMenu = [
        { go: '/', judul: 'Home' },
        { go: '/contact', judul: 'Contact' },
        { go: '/about', judul: 'About' },
        { go: '/dashboard', judul: 'Dahsboard' },
        { go: '/table', judul: 'Judul' },
    ]
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">

            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href={'/'}>
                    <a className="flex items-center">
                        <img src="img/hero.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Onglai Supplier</span>
                    </a>
                </Link>
                <div className="flex md:order-2">
                    <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
                        <Link href={'/login'}>
                            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login</button>
                        </Link>
                    </div>
                </div>
                <button className="md:hidden" onClick={() => {
                    if (buttonMenu) {
                        setButtonMenu(false)
                    }
                    else {
                        setButtonMenu(true)
                    }
                }}>
                    <MenuOutlined />
                </button>
                <NavbarList button={buttonMenu} listMenu={listMenu} />
            </div>
        </nav >

    )
}