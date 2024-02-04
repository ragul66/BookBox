import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';

const Card1 = () => {

    const [category, setCategory] = useState([]);
    const [book, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    // const navigate = useNavigate();


    const getbook = async (category) => {
        try {
            const response = await fetch(`http://localhost:4000/book/${category}`);
            const data = await response.json();
            setBooks(data)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getbook(category);
    }, [category])


    const addtocart = async (data) => {
        try {
            const id = data.book_id;
            console.log(id)
            const response = await fetch(`http://localhost:4000/cart/${id}`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
            toast.success("Yup Added to Cart👍!!", {
                // position: toast.POSITION.TOP_RIGHT,
            });
            const newitem = await response.json();
            setCart([cart, newitem])
        } catch (err) {
            console.error(err.message)
            toast.error('Cart Not added', {

            })
        }
    }




    return (
        <div>
            <ToastContainer />
            <div className='lg:mt-3 lg:mb-3 lg:ml-6 lg:font-serif  lg:flex-row space-x-12 lg:grid lg:grid-cols-4 lg:gap-4'>
                {book.map((val) => (
                    <>
                        <Card key={val.book_id}
                            style={{ width: '18rem' }} className='lg:p-2 text-lg lg:bg-gray-50'>
                            <Card.Img className='lg:rounded-full lg:w-fit ' variant="top" src="./src/assets/pikachu.png" />
                            <Card.Body>
                                <Card.Title>{val.book_name}</Card.Title>
                                <Card.Text>Category:{val.category}</Card.Text>
                                <Card.Text>Author:{val.author}</Card.Text>
                                <Card.Text>{val.description}</Card.Text>
                                <Card.Text>Published@:{val.released_year}</Card.Text>
                                <Card.Text>₹{val.price}</Card.Text>
                                <button className='lg:border-2 lg:border-gray-600 lg:bg-orange-100 lg:text-black lg:rounded-lg lg:p-1 lg:hover:bg-blue-600 lg:duration-500 lg:hover:text-white w-16'>Buy</button>
                                <button className='lg:border-2 lg:border-gray-600 lg:bg-orange-100 lg:text-black lg:rounded-lg lg:p-1 lg:ml-2 lg:hover:bg-blue-600 lg:duration-500 lg:hover:text-white ' onClick={() => addtocart(val)}>Add to Cart</button>
                            </Card.Body>
                        </Card>
                    </>
                ))}

            </div>
        </div>
    )
}
export default Card1;