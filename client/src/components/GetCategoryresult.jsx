// CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CategoryPage = () => {
    const { category } = useParams();
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getBooksByCategory = async () => {
            const booksFromServer = await fetchBooksByCategory(category);
            setBooks(booksFromServer);
        };
        getBooksByCategory();
    }, [category]);

    const fetchBooksByCategory = async (category) => {
        const res = await fetch(`http://localhost:4000/book/${category}`);
        const data = await res.json();
        return data;
    };

    const addtocart = async (data) => {
        try {
            const id = data.book_id;
            console.log(id)
            const response = await fetch(`http://localhost:4000/cart/${id}`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
            alert("Added to cart")
            const newitem = await response.json();
            setCart([cart, newitem])
        } catch (err) {
            console.error(err.message)
        }
    }


    return (

        <div className='lg:mt-3 lg:mb-3 lg:ml-6 lg:font-serif  lg:flex-row space-x-12 lg:grid lg:grid-cols-4 lg:gap-4 '>

            {books.map((val) => (
                <>
                    <Card key={val.book_id}
                        style={{ width: '18rem' }} className='lg:p-2 text-lg lg:bg-gray-50'>
                        <Card.Img className='lg:rounded-full lg:w-fit ' variant="top" src="../src/assets/pikachu.png" />
                        <Card.Body>
                            <Card.Title>{val.book_name}</Card.Title>
                            <Card.Text>Category:{val.category}</Card.Text>
                            <Card.Text>Author:{val.author}</Card.Text>
                            <Card.Text>{val.description}</Card.Text>
                            <Card.Text>Published@:{val.released_year}</Card.Text>
                            <Card.Text>₹{val.price}</Card.Text>
                            <button className='lg:border-2 lg:border-gray-600 lg:bg-orange-100 lg:text-black lg:rounded-lg lg:p-1 w-16 lg:hover:bg-blue-600 lg:duration-500 lg:hover:text-white'>Buy</button>
                            <button className='lg:border-2 lg:border-gray-600 lg:bg-orange-100 lg:text-black lg:rounded-lg lg:p-1 lg:ml-2 lg:hover:bg-blue-600 lg:duration-500 lg:hover:text-white' onClick={() => addtocart(val)}>Add to Cart</button>
                        </Card.Body>
                    </Card>
                </>
            ))}

        </div>

    );
};

export default CategoryPage;
