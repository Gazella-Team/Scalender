import { Facebook, Filter, Globe, PanelTop, Phone } from "lucide-react"
import { Reveal } from "./Animations/Reveal"

export default function Services() {
    return (
        <section className="h-100 py-[140px] bg-gray-100">
            <div className="w-[90%] mx-auto max-w-[1600px] text-black">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Services vi <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">leverer</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-8 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <Facebook size={45} />
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Facebook Ads</h1>
                        <p className="text-gray-600 text-left">Facebook-annoncering er afgørende for både B2B og B2C leadgenerering. Med Google og SEO kan kæmpe med andre lignende virksomheder om de 5 % der aktivt er på jagt efter en specifik løsning i jeres marked, men hvad med de 95 %, der er tilbage? Det er her guldet ligger gemt. Ved at målrette specifikke demografier og interesser kan virksomheder nå præcis de kundegrupper, der mest sandsynligt vil drage fordel af deres tjenester.<br></br><br></br>Hos Scalender er vi eksperter i at udnytte Facebooks dynamiske annonceringsværktøjer til at drive leadgenerering for servicevirksomheder. Vi har en dybdegående forståelse af både de tekniske aspekter af Facebook-annoncering og de strategiske tilgange, der kræves for at engagere og konvertere dit ønskede publikum. Vores tilgang er datastyret og skræddersyet til hver kundes unikke behov, hvilket sikrer maksimal effektivitet og afkast af investeringen.<br></br><br></br>Med Scalender ved roret kan du forvente ikke kun at drastisk øge dit antal af leads, men også at forbedre kvaliteten af de leads, der genereres, hvilket fører til højere konverteringsrater og øget kundeloyalitet. Lad os hjælpe dig med at udnytte kraften i Facebook-annoncering til at transformere din virksomhed og skabe forudsigelig mærkbar vækst.</p>
                    </div>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-8 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <Globe size={45} />
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Hjemmeside</h1>
                        <p className="text-gray-600 text-left">Hjemmesidebygning er afgørende for både B2B og B2C servicevirksomheder, fungerende som deres primære digitale platform. En velkonstrueret hjemmeside opbygger brandautoritet og er det første sted, potentielle kunder interagerer med din virksomhed. Den præsenterer dine tjenester, styrker kundetillid og faciliterer kundeengagement gennem lettilgængelig information og interaktive elementer.<br></br><br></br>Hos Scalender specialiserer vi os i at udvikle skræddersyede hjemmesider, der er både æstetisk tiltalende og funktionsdygtige. Vi fokuserer på brugervenlighed og responsivt design, sikrende at hjemmesiden er optimeret for alle enheder, hvilket forbedrer brugeroplevelsen og øger sandsynligheden for konverteringer.<br></br><br></br>Vores team bruger de nyeste teknologier og følger branchens bedste praksisser for SEO, så din hjemmeside ikke kun ser flot og professionel ud, men også rangerer højt på Google. Dette øger din online synlighed og tiltrækker flere kvalificerede leads. Lad Scalender hjælpe med at transformere din online tilstedeværelse og drive din virksomheds vækst.</p>
                    </div>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-8 rounded-xl text-center">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <Filter size={45} />
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Funnel eksekvering</h1>
                        <p className="text-gray-600 text-left">Funneleksekvering er essentiel for både B2B og B2C service-virksomheder, da det er afgørende for at konvertere interesse til faktiske kundehandlinger. En velfungerende salgsfunnel guider potentielle kunder gennem købsrejsen, fra den første opmærksomhed til det endelige køb, og øger dermed chancerne for salg og kundeloyalitet.<br></br><br></br>Hos Scalender har vi specialiseret os i at udvikle og implementere effektive salgsfunnels, der er skræddersyede til hver enkelt kundes specifikke behov. Vi fokuserer på at skabe en sømløs brugeroplevelse ved at sikre, at alle trin i funnele&apos;n er optimeret for at fremme brugerengagement og lette overgangen til næste fase.<br></br><br></br>Vores ekspertise omfatter alt fra indholdsudvikling, der fanger og fastholder kundens interesse, til teknisk opsætning, der sikrer, at funnels fungerer fejlfrit på tværs af alle digitale platforme. Ved at anvende dataanalyse og A/B-testning finjusterer vi løbende funnels for at maksimere konverteringsraterne.<br></br><br></br>Lad Scalender hjælpe med at styrke din virksomheds salgsstrategi gennem effektiv funneleksekvering, der ikke blot tiltrækker leads, men også omdanner dem til loyale kunder.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
