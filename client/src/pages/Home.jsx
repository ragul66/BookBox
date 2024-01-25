import React from "react"
import TopNavbar from "../components/TopNavbar"
import Card1 from "../components/Card"
import Card2 from "../components/CategoryCarousel"
import Carousel1 from "../components/Carousel1"
import IconCategory from "../components/IconCategory"
import Announcement from "../components/announcement"

const Home = () => {
    return (
        <>
            <TopNavbar />
            <img src="/src/assets/top.jpg" alt="image" className="mt-1 mb-1" />
            <Announcement />
            <Carousel1 />
            <div className="border-t-2 border-black mt-3 w-[1100px] ml-72"></div>
            <IconCategory />
            <div className="border-b-2 border-black w-[1100px] ml-72"></div>
            <h1 className="lg:text-2xl lg:text-black lg:font-serif p-3 text-center font-serief">Now Trending</h1>
            <Card2 />
            <h1 className="lg:text-2xl lg:text-black lg:font-serif p-3 text-center mt-3">Categories of Books</h1>
            <Card1 />
        </>
    )
}

export default Home