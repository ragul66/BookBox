import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmission = async (e) => {
        e.preventDefault();
        try {
            const req = await fetch(`http://localhost:4000/register/${name}`)
            const jsondata = await req.json();
            // console.log(jsondata);

            if (jsondata[0]) {
                const tname = jsondata[0].user_name;
                const tpassword = jsondata[0].password;
                if (tname == name && tpassword == password) {
                    const res = await fetch(`http://localhost:4000/token`);
                    if (res.ok) {
                        const { token } = await res.json();
                        sessionStorage.setItem("token", token);
                        console.log("Login successful...");
                        navigate('/home');
                    }
                    else {
                        toast.error("login Failed🥲🥲!!", {
                            // position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                }
                else {
                    toast.error("login Failed🥲🥲!!", {
                        // position: toast.POSITION.TOP_RIGHT,
                    });
                }

            }
            else {
                alert("Login Failed to fetch")
            }
        } catch (err) {
            console.error(err.message);
            toast.error("Login Failed🥲🥲!!", {
                // position: toast.POSITION.TOP_RIGHT,
            });
        }
    };


    const handleRegister = () => {
        navigate("/Register")
    }

    return (
        <>
            <div>
                <div className="lg:ml-[625px] lg:mt-56 border-2 border-gray-600 w-fit p-10 rounded-lg shadow-lg bg-gray-100 font-serif">
                    <ToastContainer />
                    <h1 className="ml-16 text-xl font-semibold">Login</h1>
                    <form onSubmit={handleSubmission}>
                        <div className="flex flex-col w-48 space-y-3">
                            <label>Name</label>
                            <input className=" form-control border-2 border-gray-400 rounded-lg p-1" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label>Password</label>
                            <input className="form-control border-2 border-gray-400 rounded-lg p-1" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div>
                                <button className="border-2 border-gray-400 bg-green-500 p-2 text-white rounded-lg mt-3 ml-16">Submit</button>
                            </div>
                            <button className="cursor-pointer mt-12 text-white border-2 bg-blue-700 rounded-lg w-fit p-2 -ml-6" onClick={handleRegister}>Register here!?</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login