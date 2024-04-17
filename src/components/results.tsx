import CaseEffect from "./Animations/CaseEffect"
import { Reveal } from "./Animations/Reveal"
import Carousel from "./carousel"

export default function Results() {
    return (
        <section className="h-100 py-[140px] bg-[#0d0d0d]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-white">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Resultater der <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">vil noget</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center gap-10">
                        <Reveal delayTime={0.2}>
                            <div className="border-l-[2px] py-6 px-6 border-blue-500">
                                <p className="text-[22px] w-[80%] font-medium">I Danmark lever 95 % af virksomheder ikke op til deres potentiale. Ingen ild i sjælen til at drive salget fremad, umotiverede salgshold og ringe funneleksekvering.</p>
                            </div>
                        </Reveal>
                        <Reveal delayTime={0.3}>
                            <div className="border-l-[2px] py-6 px-6 border-blue-500">
                                <p className="text-[22px] w-[80%] font-medium">Salg er ikke bare en del af din virksomhed. Det er din virksomhed. Salg er den eneste grund til at virksomheder findes.</p>
                            </div>
                        </Reveal>
                        <Reveal delayTime={0.4}>
                            <div className="border-l-[2px] py-6 px-6 border-blue-500">
                                <p className="text-[22px] w-[80%] font-medium">Så hvad hvis man kunne få en partner, der arbejdede 24 timer i døgnet og weekenden for at eksplodere salget. Og hvad hvis denne partner var villig til at blive betalt baseret på resultaterne, der blev skabt?</p>
                            </div>
                        </Reveal>
                        <Reveal delayTime={0.5}>
                            <div className="border-l-[2px] py-6 px-6 border-blue-500">
                                <p className="text-[22px] w-[80%] font-medium">Hvis du søger en kompetent vækstpartner, der arbejder på din case alle døgnets timer og leverer utrolige resultater, der giver dig salg som aldrig før, så er Scalender svaret.</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flex items-center justify-center">
                        <Carousel />
                    </div>
                </div>
            </div>
        </section>
    )
}