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
      question: "Does this work for any marketing agency?",
      answer:
        "Yes, as long as you have defined your target market, we can utilize outbound outreach as a marketing tool for your company. We have worked with many different types of marketing agencies, ranging from E-commerce agencies to Web Design and SEO agencies.",
    },
    {
      question: "What is the price?",
      answer:
        "The price depends entirely on how much you want done. Outbound outreach can act both as your main source of sales meetings, but also as a supplement to something like paid ads for your agency. We will tailor a solution that fits your needs and provide a price accordingly.",
    },
    {
      question: "What countries can you target?",
      answer:
        "We can target most countries. We have experience with both European markets and the US market.",
    },
    {
      question: "Can I get transparency and follow your work, so I know what emails and messages you send?",
      answer:
        "Absolutely, you will be able to confirm any campaigns that we launch, and we are open for questions and concerns any day of the week. Additionally, we provide weekly reports with results.",
    },
    {
      question: "How fast can I expect to see results?",
      answer:
        "You can expect the first meetings to start flowing after about 2 weeks, since there is a warm up period of 2 weeks for domains and email accounts.",
    },
    {
      question: "What do I have to do in the partnership?",
      answer:
        "Not much at all. We simply need some information about your company, your offer, your case studies and we can start. You will not have to do anything else besides checking your calendar for new meetings. If you would like to be involved in copywriting or inbox management, you are more than welcome to do so. Some of our clients prefer that.",
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
              <Reveal delayTime={0.3}>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-4 py-2 rounded-xl mb-[20px]"
                >
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
      </div>
    </section>
            </div>
        </section>
    )
}


