import logo from '../assets/logo1.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';



const TopNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownItem, setdropdown] = useState([]);
    const navigate = useNavigate();

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };


    const handleCategoryClick = (category) => {
        navigate(`/book/${category.categories}`);
    };



    useEffect(() => {
        const getCategoriesFromServer = async () => {
            const categoriesFromServer = await fetchCategories();
            setdropdown(categoriesFromServer)
        }
        getCategoriesFromServer();
    }, [])


    const fetchCategories = async () => {
        const res = await fetch(`http://localhost:4000/category`)
        const data = await res.json();
        return data;
    }

    const handlecart = () => {
        navigate('/cart')
    }

    return (
        <>
            <div className="lg:border-b-2 lg:border-red-800 lg:bg-orange-100">
                <div className="lg:flex lg:flex-row">
                    <img src={logo} alt="BookBox-logo" className="lg:ml-12 lg:mt-3 lg:w-28 lg:h-16 lg:cursor-pointer" />
                    {/* Search placeholder starts */}
                    <input type="search" placeholder='Search for books,genres' className='lg:mt-6 lg:ml-60 lg:w-80 lg:h-8 lg:border-2 lg:border-gray-400 lg:rounded-lg lg:p-1 font-serif' />
                    <div className='lg:border-2 lg:border-gray-400 lg:w-8 lg:h-8 lg:p-1 lg:mt-6 lg:ml-3 lg:rounded-lg lg:cursor-pointer lg:hover:bg-red-800 lg:duration-500 lg:hover:text-white'>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div className='lg:border-2 lg:border-gray-400 lg:w-9 lg:h-9 lg:p-[6px]  lg:mt-6   lg:ml-[625px] lg:rounded-full lg:cursor-pointer lg:hover:bg-red-700 lg:duration-500 lg:hover:text-white'>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <div className='lg:text-3xl lg:mt-5'>|</div>
                    <div className='lg:border-2 lg:border-gray-400 lg:w-9 lg:h-9 lg:p-[6px]  lg:mt-6  lg:rounded-full lg:cursor-pointer lg:hover:bg-red-700 lg:duration-500 lg:hover:text-white'>
                        <ion-icon name="cart" onClick={handlecart}></ion-icon>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row lg:mt-4 lg:ml-6">
                    <div className='lg:flex lg:flex-row'>
                        <div className='lg:font-serif lg:text-md lg:cursor-pointer'>
                            <div className=' lg:w-9 lg:h-9 lg:p-[1px] lg:-mt-2 lg:ml-3 lg:cursor-pointer lg:hover:border-none'>
                                <Dropdown
                                    show={showDropdown}
                                    onToggle={handleDropdownToggle}
                                >
                                    <Dropdown.Toggle className='lg:-ml-6 '
                                        variant="none"
                                    >
                                        {/* <ion-icon name="book"></ion-icon> */}
                                        Book
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {/* {dropdownItem.map((val) => (
                                            <>
                                                <Dropdown.Item
                                                    key={val.id}
                                                    // onSelect={handleitems}
                                                    onClick={() => getcategories(val)}
                                                    // onClick={() => handleselect(val)}
                                                    className='lg:bg-gray-200'
                                                >
                                                    {val.categories}
                                                </Dropdown.Item>
                                            </>
                                        ))} */}

                                        {dropdownItem.map((category) => (
                                            <>
                                                <Dropdown.Item
                                                    key={category.id}
                                                    // onSelect={handleitems}
                                                    onClick={() => handleCategoryClick(category)}
                                                    // onClick={() => handleselect(val)}
                                                    className='lg:bg-gray-200'
                                                >
                                                    {category.categories}
                                                </Dropdown.Item>
                                            </>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800 '>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>New Arrivals</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800'>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Box Sets</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800'>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Betst Sellers</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800'>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Fiction Books</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800 lg:hover:text-red-800 lg:duration-500'>|</div>
                        <div className='lg:font-serif lg:text-lg lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Award Winners</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800'>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Featured Authors</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800'>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Today's Special</div>
                        <div className='lg:text-xl lg:ml-2 lg:-mt-1 lg:text-red-800'>|</div>
                        <div className='lg:font-serif lg:text-md lg:ml-2 lg:cursor-pointer lg:hover:text-red-800 lg:duration-500'>Request a Book</div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopNavbar;