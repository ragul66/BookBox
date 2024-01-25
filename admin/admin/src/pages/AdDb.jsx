import Dashboard from "../components/Dashboard";
import TopNavbar from "../components/TopNavbar"

const AdDb = () => {
    return (
        <>
            <div className="flex  h-screen">
                <Dashboard />

                {/* Main Content Area (75% width) */}
                <div className="w-[1250px]">
                    <TopNavbar />
                    <div className=" p-1 mt-3 ml-1 w-full h-[500px]">
                        <div className="flex flex-row -ml-12 mt-12">
                            <div className="border-2 h-60 w-96 ml-12 mt-12 border-amber-900 rounded-lg bg-gray-100 hover:bg-green-400 duration-1000 font-Admin text-center text-2xl">
                                Yup Profit!!
                            </div>

                            <div className="border-2 h-60 w-96 ml-12 mt-12 border-amber-900 rounded-lg bg-gray-100 hover:bg-green-400 duration-1000 font-Admin text-center text-2xl">
                                Sales!!
                            </div>

                            <div className="border-2 h-60 w-96 ml-12 mt-12 border-amber-900 rounded-lg bg-gray-100 hover:bg-green-400 duration-1000 font-Admin text-center text-2xl">
                                Pending!!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdDb;
