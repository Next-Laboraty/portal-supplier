import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Settings from "./settings";
import Product from "./product";
export default function dahsboard() {

    return (
        <DashboardLayout>
            {/* <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="img/hero.png" alt="image" loading="lazy" width height />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Produk</h2>
                            <table classname="md:border-collapse border border-slate-400">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Gambar</th>
                                        <th>Deskripsi</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                            </table>

                            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* // page 2 */}
            <div className="py-16 bg-purple-50">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="img/barista2.png" alt="image" loading="lazy" width height />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-purple-900 font-bold md:text-4xl">Onglai Supplier Product</h2>
                            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}