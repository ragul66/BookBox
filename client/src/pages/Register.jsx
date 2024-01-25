import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {

    const [user_name, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [e_mail, setE_mail] = useState([])
    const [phone_no, setPhone_no] = useState([])
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const body = { user_name, password, e_mail, phone_no };
            const response = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            })
            // alert("Registered Successfully")
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }

    const handleLogin = () => {
        navigate("/")
    }
    return (
        <>
            <div>
                <div className="lg:ml-[625px] lg:mt-36 border-2 border-gray-600 w-fit p-10 rounded-lg shadow-lg bg-gray-100 font-serif">
                    <h1 className="ml-16 text-xl font-serif font-semibold">Register</h1>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col w-52 space-y-3">
                            <label>UserName</label>
                            <input className="form-control border-2 border-gray-400 rounded-lg p-1" type="text" placeholder="Username" value={user_name} onChange={(e) => setUsername(e.target.value)} />
                            <label>Password</label>
                            <input className="form-control border-2 border-gray-400 rounded-lg p-1" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>E-mail</label>
                            <input className="form-control border-2 border-gray-400 rounded-lg p-1" type="text" placeholder="e-mail" value={e_mail} onChange={(e) => setE_mail(e.target.value)} />
                            <label>Phone.No</label>
                            <input className="form-control border-2 border-gray-400 rounded-lg p-1" type="text" placeholder="Ph.no" value={phone_no} onChange={(e) => setPhone_no(e.target.value)} />
                            <div>
                                <button className="border-2 border-gray-400 bg-green-500 p-2 text-white rounded-lg mt-3 ml-16">Submit</button>
                            </div>
                            <button className="cursor-pointer mt-12 text-white border-2 bg-blue-700 rounded-lg w-fit p-2" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;