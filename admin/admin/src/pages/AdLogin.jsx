import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AdLogin = () => {
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate()

    const handlesubmission = async (e) => {
        e.preventDefault(e)
        try {
            const getadmin = await fetch(`http://localhost:4000/admin/${name}`);
            const jsondata = await getadmin.json();

            if (jsondata[0]) {
                const tablename = jsondata[0].admin_user;
                const tablepassword = jsondata[0].admin_pass;
                if (tablename == name && tablepassword == password) {
                    const res = await fetch(`http://localhost:4000/token`);
                    if (res.ok) {
                        const { token } = await res.json();
                        sessionStorage.setItem("token", token);
                        console.log("Login successful...");
                        navigate('/AdminDb');
                    }

                }
                else {
                    alert("Login failed")
                }
            }
            else {
                alert("Invalid");
            }
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <>
            <div>
                <div className="text-amber-900 text-2xl font-serif text-center mt-8">ADMIN PANEL LOGIN</div>
                <div className="border-2 border-amber-900  w-fit p-10 rounded-md space-y-3 shadow-lg font-serif lg:ml-[625px] mt-48 bg-gray-100">
                    <h1 className="items-center ml-12 text-xl">Admin Login</h1>
                    <form onSubmit={handlesubmission}>
                        <div className="flex flex-col font-serif space-y-4 ">
                            <label>Admin</label>
                            <input type="text" className=" form-control border-2 border-gray-400 rounded-lg p-1 shadow-lg hover:border-blue-400" value={name} onChange={(e) => setName(e.target.value)} placeholder="AdName" />
                            <label>Password</label>
                            <input type="password" className="form-control border-2 border-gray-400 w-48 rounded-lg p-1  shadow-lg hover:border-blue-400" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <div>
                                <button className="cursor-pointer border-2 border-blue-500 bg-blue-500 text-white rounded-lg p-1 ml-16">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdLogin