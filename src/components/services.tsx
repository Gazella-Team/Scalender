import { Reveal } from "./Animations/Reveal"

export default function Services() {
    return (
        <section style={{background: "radial-gradient(circle, rgba(17,35,83,1) 0%, rgba(11,18,55,1) 54%, rgba(11,10,40,1) 100%), url(/patterns/lines.svg)"}} className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-white">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Services we <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">provide</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
                    <Reveal delayTime={0.2}>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <img className="w-[50px]" src="/services/email.png"></img>
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Cold Email</h1>
                        <p className="text-gray-600">Utilizing cutting-edge AI, our agency specializes in transforming cold email outreach by meticulously analyzing data, crafting 1000’s of personalized messages, implementing iterative improvements based on real-time feedback, and ultimately delivering significant results, ensuring our clients stand out in the competitive landscape of cold email marketing.</p>
                    </div>
                    </Reveal>
                    <Reveal delayTime={0.2}>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <img className="w-[50px]" src="/services/linkedin.png"></img>
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">LinkedIn Outreach</h1>
                        <p className="text-gray-600">LinkedIn is still an amazing tool for prospecting. Utilizing the same AI-methods as we do with cold email, we deliver genuine and human messages to your ideal prospects on LinkedIn, securing a very high booking-rate despite the limitations of volume on LinkedIn’s platform. We set up complex automated messaging flows that take into account any potential situation that might occur in the prospects journey.</p>
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
