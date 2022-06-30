import DashboardLayout from "../../components/layout/DashboardLayout";

export default function deleteProduk() {

    return (
        <DashboardLayout>
            <div className="py-16 bg-purple-50">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="img/barista2.png" alt="image" loading="lazy" width height />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-purple-900 font-bold md:text-4xl">Delete Produk</h2>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout >
    )
}