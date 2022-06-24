import Link from "next/link"
import { useRouter } from "next/router"

export default function NavbarList(props) {
    const router = useRouter()
    return (
        <div className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${props.button ? 'hidden' : ''} `} id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                {props.listMenu.map(item => {
                    return (
                        <Link key={item.judul} href={item.go}>
                            <li >
                                <a className={`${router.asPath === item.go ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>
                                    {item.judul}
                                </a>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}