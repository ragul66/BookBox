import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card2 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="container bg-orange-50 p-4 font-serif">
                <div className="w-3/4  m-auto space-x-4">
                    <div className="mt-8">
                        <Slider className="lg:w-[1300px] lg:-mt-6 lg:-ml-20 " {...settings}>
                            {data.map((d) => (
                                <div className="border-2 border-black  text-black rounded-lg">

                                    <div className="h-24 rounded-t-xl flex flex-row justify-center items-center">
                                        <img src={d.img} alt="" className="h-28 w-28 rounded-full mt-12" />
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-4 p-4 mt-6">
                                        <p className="text-xl font-semibold">{d.name}</p>
                                        <p className="items-center justify-center ml-8">{d.review}</p>
                                        <h1>₹{d.price}</h1>
                                        {/* <button className="border-3 bg-blue-400 rounded-xl p-2 text-white ">Read More</button> */}
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card2;

const data = [
    {
        name: `Peotry`,
        img: `/src/assets/book.jpg`,
        review: `A major class will be furthur held`,
        price: `706`
    },
    {
        name: `Loving`,
        img: `/src/assets/book.jpg`,
        review: `A major class will be furthur held`,
        price: `706`
    },
    {
        name: `Ragul Vasanth`,
        img: `/src/assets/book.jpg`,
        review: `A major class will be furthur held`,
        price: `706`
    },
    {
        name: `Ragul Vasanth`,
        img: `/src/assets/book.jpg`,
        review: `A major class will be furthur held`,
        price: `706`
    },
    {
        name: `Ragul Vasanth`,
        img: `/src/assets/book.jpg`,
        review: `A major class will be furthur held`,
        price: `706`
    },
    {
        name: `Ragul Vasanth`,
        img: `/src/assets/book.jpg`,
        review: `A major class will be furthur held`,
        price: `706`
    }
];