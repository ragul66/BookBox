import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate();


    const handlehome = () => {
        navigate('/home')
    }

    const handledata = () => {
        navigate('/data')
    }
    return (

        <>

            {/* Dashboard Menu Bar (25% width) */}
            <div className="w-1/6 bg-orange-200 text-white border-r-2 border-green-700">
                {/* Add your dashboard menu items here */}

                <div className="font-Admin  text-amber-900 ml-3 text-2xl mt-3">DASHBOARD</div>
                <div className="border-b-[1px] border-green-800" ></div>
                <div className="font-Admin hover:text-amber-900   ml-3 text-blue-700 mt-6 cursor-pointer" onClick={handlehome}>Home</div>
                <div className="font-Admin   hover:text-amber-900 mt-3 ml-3 text-blue-700 cursor-pointer" onClick={handledata}>DataBase</div>
                <div className="font-Admin  hover:text-amber-900  mt-3 ml-3 text-blue-700">UserDetails</div>
                <div className="font-Admin   hover:text-amber-900 mt-3 ml-3 text-blue-700">Add User</div>
                <div className="font-Admin  hover:text-amber-900  mt-3 ml-3 text-blue-700">Contact</div>

            </div>
        </>
    )
}
export default Dashboard;