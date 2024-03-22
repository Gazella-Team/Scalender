import { Reveal } from "./Animations/Reveal";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const questions = [
    {
      question: "Hvad er jeres garanti?",
      answer:
        "Vi garanterer dig en indkomst på 20.000,- / måned efter 180 dage, ellers sender vi hver eneste krone tilbage + 12.000 kroner fra vores egen pung",
    },
    {
      question: "Kan jeg gøre dette, mens jeg går i skole/arbejder?",
      answer:
        "Ja, selvfølgelig. Det er ikke noget problem at gå i skole, mens du driver denne virksomhed. Da vi startede med forretning, gik vi begge i gymnasiet, men nu er vi fuldtidsbeskæftigede med vores virksomheder.",
    },
    {
      question: "Hvordan får jeg support?",
      answer:
        "Du kan altid sende os en besked, eller opsætte et 1:1 opkald med os  og vi vil hjælpe, for som vores motto siger: din succes er vores succes.",
    },
    {
      question: "Hvad kommer jeg til at lære?",
      answer:
        "Du vil lære præcis, hvordan man bygger en forretning. Alt sammen på samme måde som vi gjorde, for du får alle vores frameworks og en klar forretningsplan der forklarer dig præcis hvad du skal gøre hver dag. Dette er en helt ny forretningsmodel, som alle virksomheder har brug for, så det er et perfekt tidspunkt at komme i gang. Vi driver selv et agency ud fra denne forretningsmodel, OCMA. Du vil altid være et skridt foran andre, fordi du netop har vores frameworks, som opdateres løbende. Så hvad venter du på? Ansøg i dag og start din rejse.",
    },
    {
      question:
        "Hvad sker der, efter jeg er blevet accepteret til at købe OCMA Masterclass?",
      answer:
        "Som du måske har set på hjemmesiden er der ingen “køb nu” knap, og det er der ikke grundet den garanti vi har. Vi skal tale med alle får nogen får adgang. Vi vil gerne vide hvem vi better vores egne penge på. Du bliver tilføjet til vores egen software med alle moduler. Vores undervisningsmateriale er både i tekst og video. Derudover kommer du med i en gruppe for udelukkende medlemmer af OCMA Masterclass,, for at spare med hinanden og os.",
    },
    {
      question: "Hvor meget kan jeg forvente at tjene?",
      answer:
        "Der er ingen maximum på, hvor meget du kan tjene; det er fordelene ved denne forretningsmodel. Som regel vokser dit agency og netværk med tiden, hvilket giver mulighed for større vækst, samtidig med at tidsforbruget mindskes. Du har derfor selv muligheden for at bestemme, afhængigt af dine målsætninger, hvor du ønsker at bevæge dig hen. Vi har dog set flere af de første elever lukke aftaler på 8-30.000,- efter blot en uge og derefter opsige deres job, da de nu * Men husk det er eksempler og ikke nødvendigvis hvad der er gældende for dig.",
    },
    {
      question: "Kan man ikke bare lære dette på youtube?",
      answer:
        "Ofte vil du kunne finde den information du får i kurser på youtube eller lign. men sådan er det ikke her, eftersom vores forretningsmodel er helt ny. Og for at bevise dette vil jeg gerne tage dig med på en test, gå ind på youtube > søg på “OCMA” Det ville overraske mig hvis du fandt noget! og det ville det netop eftersom vi er de første som oplærer dig netop dette. Det skal dog nævnes at der er andre forretningsmodeller der læner sig op ad denne. ",
    },
];

export default function FAQ() {
    const router = useRouter();
    const currentPath = router.pathname.slice(0, 3);
    return (
        <section style={{background: "radial-gradient(circle, rgba(17,35,83,1) 0%, rgba(11,18,55,1) 54%, rgba(11,10,40,1) 100%), url(/patterns/lines.svg)"}} className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-white">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">Questions</span></h1>
                </div>
     <section>
      <div className="w-[90%] mx-auto max-w-[1000px] heroOne:w-sectionMain">
          <Accordion
            type="single"
            collapsible
            className="mt-8rounded-lg"
          >
            {questions.map((question, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-4 py-2 rounded-xl mb-[20px]"
                >
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
      </div>
    </section>
            </div>
        </section>
    )
}


