import Link from "next/link"
import { Reveal } from "./Animations/Reveal"

export default function Cta() {
    return (
        <section className="h-100 py-[140px] border-b">
            <Reveal delayTime={0.4}>
            <div className="w-[90%] mx-auto max-w-[1200px] text-center">
                <h1 className="font-medium text-4xl mb-4">Ready to scale?</h1>
                <p className="text-gray-600 max-w-[500px] mx-auto mb-12">We Plug The Worlds Best CRO Experts & Protocols Into Your Brand To Increase Your Revenue, Scalability & Profitability.</p>
                <div className="inline-block items-center gap-2">
                    <Link target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full px-10 text-center from-blue-600 via-blue-500 to-indigo-700 text-white py-3 rounded-full font-medium text-sm">Get in touch</Link>
                </div>
            </div>
            </Reveal>
        </section>
    )
}