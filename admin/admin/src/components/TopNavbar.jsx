import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-modal';

const TopNavbar = () => {

    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const [admin_user, setUsername] = useState([])
    const [admin_pass, setPassword] = useState([])


    const handleAdminEdit = () => {
        navigate('/AdminEdit')
    }

    const handlemodal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const body = { admin_user, admin_pass };
            const response = await fetch("http://localhost:4000/admin", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            })
            // alert("Registered Successfully")
            window.location = "/AdminDb"
        } catch (err) {
            console.error(err.message);
        }
    }

    // const handlemodal = () => {
    //     navigate('/Adduser')
    // }

    return (
        <>
            <div className="p-1 border-2 bg-orange-200 font-Admin text--900 text-2xl ml-3">
                <div className="flex flex-row">
                    <h1 className="ml-2 text-amber-900">Admin DATABASE</h1>
                    <input type="text" className="border-2 border-gray-300 rounded-lg text-sm w-80 h-10 ml-[800px] p-1" placeholder="Search for Products" />
                    <h1 className="ml-3 -mt-1 text-3xl font-nunito text-red-800">|</h1>
                    <div className="border-2 p-1 ml-2 border-black rounded-full w-9 h-9 cursor-pointer hover:text-white hover:bg-amber-900" onClick={handleAdminEdit}>
                        <ion-icon name="logo-buffer"></ion-icon>
                    </div>
                    <h1 className="ml-3 -mt-1 text-3xl font-nunito text-red-800">|</h1>
                    <div className="border-2 p-1 ml-2 border-black rounded-full w-9 h-9 cursor-pointer hover:text-white hover:bg-amber-900" onClick={handlemodal}>
                        <ion-icon name="person-add-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add User Modal"
                className="w-[300px] h-[300px] ml-[600px] mt-12 border-2 border-amber-800 rounded-lg shadow-lg"
            >
                {/* Your modal content goes here */}

                <div className="text-red-500 ml-[275px] cursor-pointer" onClick={closeModal}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </div>
                <form onSubmit={handleRegister}>
                    <h1>Admin User Login</h1>
                    <div className="flex flex-col font-serif space-y-4 ">
                        <label>Admin</label>
                        <input type="text" className=" form-control border-2 border-gray-400 rounded-lg p-1 shadow-lg hover:border-blue-400" placeholder="AdName" value={admin_user} onChange={((e) => setUsername(e.target.value))} />
                        <label>Password</label>
                        <input type="password" className="form-control border-2 border-gray-400 w-48 rounded-lg p-1  shadow-lg hover:border-blue-400" placeholder="Password" value={admin_pass} onChange={((e) => setPassword(e.target.value))} />
                        <div>
                            <button className="cursor-pointer border-2 border-blue-500 bg-blue-500 text-white rounded-lg p-1 ml-16">Submit</button>
                        </div>
                    </div>
                    {/* ... (Add your form or any content for the modal) */}
                    {/* <button onClick={closeModal}>Close Modal</button> */}
                </form>
            </Modal>
        </>
    )
}

export default TopNavbar;