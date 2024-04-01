import { Phone } from "lucide-react"
import { Reveal } from "./Animations/Reveal"

export default function Services() {
    return (
        <section className="h-100 py-[140px] bg-[#0d0d0d]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-white">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Services we <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">provide</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <img className="w-[50px]" src="/services/email.png"></img>
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Cold Email</h1>
                        <p className="text-gray-600">Utilizing cutting-edge AI, our agency specializes in transforming cold email outreach by meticulously analyzing data, crafting 1000’s of personalized messages, implementing iterative improvements based on real-time feedback, and ultimately delivering significant results, ensuring our clients stand out in the competitive landscape of cold email marketing.</p>
                    </div>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <img className="w-[50px]" src="/services/linkedin.png"></img>
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">LinkedIn Outreach</h1>
                        <p className="text-gray-600">LinkedIn is still an amazing tool for prospecting. Utilizing the same AI-methods as we do with cold email, we deliver genuine and human messages to your ideal prospects on LinkedIn, securing a very high booking-rate despite the limitations of volume on LinkedIn’s platform. We set up complex automated messaging flows that take into account any potential situation that might occur in the prospects journey.</p>
                    </div>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <Phone size={45} />
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Cold Calling</h1>
                        <p className="text-gray-600">Our approach to cold calling is both strategic and personalized. We take the time to understand your target audience, crafting compelling scripts that resonate with their needs and interests. Our skilled team of cold callers is trained to engage prospects effectively, overcoming objections and generating qualified leads. By outsourcing your cold calling needs to us, you get a dedicated team that's going to learn everything about your company and audience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
