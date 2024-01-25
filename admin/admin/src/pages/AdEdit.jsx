// import TopNavbar from "../components/TopNavbar";

import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";

const AdEdit = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await fetch("http://localhost:4000/book");
            const jsonData = await response.json();
            setBooks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    const handledelete = async (bookid) => {
        try {
            await fetch(`http://localhost:4000/admin/${bookid}`, {
                method: "DELETE"
            })
            setBooks((prevbook) => prevbook.filter((item) => item.book_id !== bookid));
        } catch (err) {
            console.error(err.message)
        }
    }



    return (
        <>
            <div className="flex  h-screen">
                <Dashboard />

                <div className="ml-3">
                    <table>
                        <thead className=" space-x-12 space-y-12">
                            <th className="border-2">Book_id</th>
                            <th className="border-2">Category</th>
                            <th className="border-2">Book Name</th>
                            <th className="border-2">Author</th>
                            <th className="border-2">Description</th>
                            <th className="border-2">Price</th>
                            <th className="border-2">Edit</th>
                            <th className="border-2">Remove</th>
                        </thead>
                        <tbody className="border-2 space-x-0">
                            {books.map((val) => (
                                <tr key={val.book_id} className="border-2">
                                    <td className="border-2">{val.book_id}</td>
                                    <td className="border-2">{val.category}</td>
                                    <td className="border-2">{val.book_name}</td>
                                    <td className="border-2">{val.author}</td>
                                    <td className="border-2">{val.description}</td>
                                    <td className="border-2">{val.price}</td>
                                    <button className="border-2 bg-orange-400 text-white rounded-lg p-1" >Edit</button>
                                    <button className="border-2 bg-red-600 text-white rounded-lg p-1" onClick={() => handledelete(val.book_id)}>Delete</button>

                                    {/* <div className="flex">
                                        <div className="">
                                            <button className="border-2 bg-orange-400 text-white rounded-lg p-1">Edit</button>
                                        </div>

                                        <div className="">
                                            <button className="border-2 bg-red-600 text-white rounded-lg p-1" onClick={() => handledelete(val.book_id)}>Delete</button>
                                            Add more columns as needed
                                        </div>
                                    </div> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdEdit;
