import React from "react";


export default function login() {
    return (
        <>

            <div className="py-16 bg-white-50">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12 border-1 border-white-100">
                            <img src="img/login.png" alt="image" loading="lazy" width height />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-purple-900 font-bold md:text-4xl">Happy a nice day !</h2>
                            <form action className="space-y-8 py-6">
                                <div>
                                    <input type="email" placeholder="Your Email" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <input type="password" placeholder="Password" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                                    <button type="reset" className="w-max p-3 -mr-3">
                                        <span className="text-sm tracking-wide text-sky-600">Forgot password ?</span>
                                    </button>
                                </div>
                                <div>
                                    <button className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                        <span className="font-semibold text-white text-lg">Login</span>
                                    </button>
                                    <button href="#" type="reset" className="w-max p-3 -ml-3">
                                        <span className="text-sm tracking-wide text-sky-600">Create new account</span>
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}