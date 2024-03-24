import { Opc } from "./Animations/Opc"
import { Reveal } from "./Animations/Reveal"
import ImageSlider from "./ImageSlider"
import Navbar from "./Layout/Navbar"
import Link from "next/link"

export default function Hero() {
    return (
        <section style={{background: "radial-gradient(circle, rgba(17,35,83,1) 0%, rgba(11,18,55,1) 54%, rgba(11,10,40,1) 100%), url(/patterns/lines.svg)"}} className="bg-center bg-cover">
            <Navbar />
            <div className="text-center text-white h-[80vh] flex flex-col justify-center">
                <div className="mb-[30px]">
                    <h1 className="text-[42px] leading-[56px] font-medium w-[90%] mb-[20px] mx-auto max-w-[1150px]">Marketing agencies, if you don’t close at least 3 new clients in 90 days, we work for free until you do.</h1>
                    <p className="text-[20px] font-light text-gray-200">We Plug The Worlds Best CRO Experts & Protocols Into Your Brand To Increase Your Revenue, Scalability & Profitability.</p>
                </div>
                <div className="text-white mb-0 bg-[url(/thumbnails/video.webp)] bg-cover bg-center w-[800px] h-[400px] rounded-xl flex items-center justify-center mx-auto">
                    <div className="bg-blue-500 h-[80px] w-[80px] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>         
             </div>
        </section>
    )
}