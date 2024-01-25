import "../announcement.css"
import Marquee from "react-fast-marquee"
const Announcement = () => {
    return (
        <>
            <div>
                <Marquee speed={100} gradient={false} className="-mt-1 font-semibold">
                    <div className="announcement">
                        <div className="announcement-text text1">
                            <span>A Book is a gift you can open again and again</span>
                            <span>Special Offers going on all books @₹150</span>
                            <span>Welcome to Admin Panel!!</span>
                        </div>
                        <div className="announcement-text text2">
                            <span>A Book is a gift you can open again and again</span>
                            <span>Special Offers going on all books @₹150</span>
                            <span>Welcome to BookBox!!</span>
                        </div>
                    </div>
                </Marquee>
            </div>
        </>
    )

}
export default Announcement;