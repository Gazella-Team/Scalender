import ImageSlider from "./ImageSlider"
import Navbar from "./Layout/Navbar"

export default function Hero() {
    return (
        <section style={{background: "linear-gradient(0deg, rgba(19,17,45,1) 0%, rgba(16,15,80,1) 49%, rgba(25,25,110,1) 100%)"}} className="pb-[60px] bg-blue-900">
            <Navbar />
            <div className="py-[200px] text-center text-white">
                <h1 className="text-[50px] font-medium w-[90%] mx-auto max-w-[1150px]">Marketing agencies, if you don’t close at least 3 new clients in 90 days, we work for free until you do.</h1>
            </div>
            <ImageSlider />
        </section>
    )
}