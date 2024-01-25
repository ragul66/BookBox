import { useEffect, useState } from "react"
import TopNavbar from "../components/TopNavbar";


const Cart = () => {
    const [cart, setCart] = useState([])

    const getcart = async () => {
        try {
            const response = await fetch("http://localhost:4000/cart");
            const jsondata = await response.json();

            setCart(jsondata);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getcart();
    }, [])


    const deletecart = async (cartID) => {
        try {
            await fetch(`http://localhost:4000/cart/${cartID}`, {
                method: "DELETE"
            });
            // console.log("deleted")
            setCart((prevCart) => prevCart.filter((item) => item.cart_id !== cartID));
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <>
            <TopNavbar />
            <div>
                <table className="border-2">
                    <thead>
                        <th>S.No</th>
                        <th>BooK Name</th>
                        <th>price</th>
                        <th>Year</th>
                        <th>image</th>
                    </thead>

                    <tbody>
                        {cart.map((data) => (
                            <tr key={data.cart_id}>
                                <td>{data.book_name}</td>
                                <td>₹{data.price}</td>
                                <td>{data.released_year}</td>
                                <td>{data.image}</td>
                                <button className="border-2 border-red-600 rounded-lg bg-red-600 text-white" onClick={() => deletecart(data.cart_id)}>Delete</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Cart