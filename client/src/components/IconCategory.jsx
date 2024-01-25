import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IconCategory = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

    const image = [
        {
            img: `/src/assets/icons/bestseller.png`,
            logo: `Best Seller`
        },
        {
            img: `/src/assets/icons/awardwinners.png`,
            logo: `Award Winners`
        },
        {
            img: `/src/assets/icons/boxsets.png`,
            logo: `BoxSets`
        },
        {
            img: `/src/assets/icons/ficbooks.png`,
            logo: `Fiction Books`
        },
        {
            img: `/src/assets/icons/iseller.png`,
            logo: `International Seller`
        },
        {
            img: `/src/assets/icons/tarotcards.png`,
            logo: `Tarot Cards`
        },
        {
            img: `/src/assets/icons/tspecial.png`,
            logo: `Today Special`
        }
    ];

    return (
        <>
            <div >
                <div className="w-3/4  m-auto space-x-12">
                    <div>
                        <Slider className="lg:w-[500px] lg:-mt-6  " {...settings}>

                            {image.map((d) => (
                                <div>
                                    <img src={d.img} alt="icon" className="space-x-32 mt-6 " />
                                    <p>{d.logo}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IconCategory;