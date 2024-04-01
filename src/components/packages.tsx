import { Check, X } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

export default function Packages() {
    return (
        <section className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px]">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Choose your <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">package</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
                    <Reveal delayTime={0.2}>
                    <div className="rounded-xl border p-10 h-[560px] flex flex-col justify-between" style={{background:"linear-gradient(16deg, rgba(101,126,255,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}}>
                        <h1 className="text-[22px] font-medium mb-2">Done-for-you</h1>
                        <p className="text-gray-600 mb-10">“I want this completely outsourced”</p>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We find and verify leads</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We enrich the data</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We carefully craft an split-test multiple campaigns</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We nurture and pre-qualify leads</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We book them into your calendar</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full text-center from-blue-600 via-blue-500 to-indigo-700 text-white px-4 py-3 rounded-full font-medium text-sm">Get in touch</Link>
                        </div>
                    </div>
                    </Reveal>
                    <Reveal delayTime={0.2}>
                    <div className="rounded-xl border p-10 h-[560px] flex flex-col justify-between" style={{background:"linear-gradient(338deg, rgba(6,96,255,0.19233630952380953) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}}>
                        <h1 className="text-[22px] font-medium mb-2">Done-with-you</h1>
                        <p className="text-gray-600 mb-10">“I want this completely outsourced”</p>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We set up the entire system for you</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We provide the best software stack for you to use</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We give you an extensive whitepaper and how to execute your campaigns</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>We have 24/7 support on Slack</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={18} />
                                <h1>You pay once the first meeting is booked through the system</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full text-center from-blue-600 via-blue-500 to-indigo-700 text-white px-4 py-3 rounded-full font-medium text-sm">Get in touch</Link>
                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}