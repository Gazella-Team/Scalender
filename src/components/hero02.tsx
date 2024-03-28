import { Opc } from "./Animations/Opc"
import { Reveal } from "./Animations/Reveal"
import ImageSlider from "./ImageSlider"
import Navbar from "./Layout/Navbar"
import Link from "next/link"

export default function Hero02() {
    return (
        <section style={{background: "radial-gradient(circle, rgba(17,35,83,1) 0%, rgba(11,18,55,1) 54%, rgba(11,10,40,1) 100%), url(/patterns/lines.svg)"}} className="bg-center bg-cover">
            <Navbar />
            <div className="text-center text-white py-[140px] pt-[70px] flex flex-col justify-center">
                <Reveal delayTime={0.2}>
                    <div className="mb-[30px]">
                        <h1 className="text-[44px] leading-[54px] font-medium w-[90%] mb-[20px] mx-auto max-w-[1050px]">We book you 6-12 qualified sales meetings a month at a performance basis with the newest AI marketing-technology</h1>
                        <p className="text-[18px] font-light w-[90%] mx-auto text-gray-200">Increase your sales pipeline with the newest and best practices in cold email outreach</p>
                    </div>
                </Reveal>
                <Reveal delayTime={0.3}>
                <div className="mx-auto items-center justify-center mb-20 border flex w-[200px] gap-2 rounded-full py-1 mt-6">
                        <div className="flex items-center">
                            <img className="w-[40px] h-[40px] rounded-full object-cover" src="/people/Gizeno CEO.jpg"></img>
                            <img className="w-[40px] h-[40px] rounded-full object-cover ml-[-14px]" src="/people/Gustav CEO.jpg"></img>
                            <img className="w-[40px] h-[40px] rounded-full object-cover ml-[-14px]" src="/people/Ventur CEO.jpg"></img>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-200">10+ clients</p>
                            <img className="w-[50px]" src="/5-star.webp"></img>
                        </div>
    
                    </div>
                </Reveal>
                <div className="text-white mb-0 bg-[url(/thumbnails/video.webp)] bg-cover bg-center w-[900px] h-[540px] rounded-xl flex items-center justify-center mx-auto">
                    <div className="bg-blue-500 h-[80px] w-[80px] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div> 
                <div className="inline-block mt-20">
                    <Link target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full px-10 text-center from-blue-600 via-blue-500 to-indigo-700 text-white py-3 rounded-full font-medium text-sm">Get in touch</Link>        
                </div>
            </div>
        </section>
    )
}