// import React, { useEffect, useState } from 'react';

// const Ratings = () => {
//     const [fname, setName] = useState('');
//     const [rating, setRating] = useState('');
//     const [description, setdesc] = useState('');
//     const [rat, setrat] = useState([]);
//     const [average, setaverage] = useState(0);

//     const handlesubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const body = { fname, rating, description };
//             const response = await fetch(`http://localhost:4000/rating`, {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(body),
//             });
//             // Assuming you need to update the rating table after submission,
//             // you can call getrating again here to refresh the data.
//             getrating();
//         } catch (error) {
//             console.log(error);
//             res.status(500).send('Error inserting rating into database');
//         }
//     };

//     const getrating = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/getrating');
//             const jsondata = await response.json();

//             setrat(jsondata.rows);
//             let totalRating = 0;
//             jsondata.rows.forEach((row) => {
//                 totalRating += row.rating;
//             });
//             setaverage(totalRating / );
//         } catch (error) {
//             console.log(error.message);
//             res.status(500).send('Error in getting ratings');
//         }
//     };

//     useEffect(() => {
//         getrating();
//     }, []);

//     return (
//         <>
//             <div className='flex flex-col'>
//                 <form className='flex flex-col' onSubmit={handlesubmit}>
//                     <p>Enter the Ratings for the Image</p>
//                     <label>Name</label>
//                     <input type='text' className='w-28' placeholder='Enter the Name' value={fname} onChange={(e) => setName(e.target.value)} />
//                     <label>Ratings</label>
//                     <input type='text' className='border-1px w-28' placeholder='Enter the rating' value={rating} onChange={(e) => setRating(e.target.value)} />
//                     <label>Description</label>
//                     <input type='text' className='border-black w-48' placeholder='Enter the description' value={description} onChange={(e) => setdesc(e.target.value)} />
//                     <button type='submit' className=' border-2 text-white bg-blue-600 p-1 rounded-lg w-28'>
//                         Submit
//                     </button>
//                 </form>
//             </div>

//             <div>
//                 <table>
//                     <tbody>
//                         {rat.map((getrat) => (
//                             <tr key={getrat.id}>
//                                 <td>{getrat.id}</td>
//                                 <td>{getrat.fname}</td>
//                                 <td>{getrat.rating}</td>
//                                 <td>{getrat.description}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div>
//                 Average rating: {average}
//             </div>
//         </>
//     );
// };

// export default Ratings;
