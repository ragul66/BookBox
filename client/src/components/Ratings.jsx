import React, { useState } from 'react'


const Ratings = () => {

    const [name, setName] = useState([])
    const [rating, setRating] = useState([])
    const [desc, setdesc] = useState([])

    return (
        <>
            <div className='flex flex-col'>
                <form className='flex flex-col' >
                    <p>Enter the Ratings for the Image</p>
                    <label>Name</label>
                    <input type='text' className='w-28' placeholder='Enter the Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Ratings</label>
                    <input type='text' className='border-1px w-28' placeholder='Enter the rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                    <label>Description</label>
                    <input type='text' className='border-black w-48' placeholder='Enter the description' />
                    <button className=' border-2 text-white bg-blue-600 p-1 rounded-lg w-28'>Submit</button>
                </form>
            </div>

            <div>

            </div>
        </>
    )
}

export default Ratings