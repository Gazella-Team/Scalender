import { Reveal } from "./Animations/Reveal"

const testimonialsData = [
    {heading:"Amazing Service!", description: "I've been working with Kasper and Niclas for a couple of months. In our first month we averaged about 5-7 sales calls per week which was amazing ‍ So far we've spent about £3,000 and made £18,000 with them ‍ They are two genuine young guys trying to look after their clients. I would highly recommmed giving them a shot", name:"CEO", image:"/people/Ventur CEO.jpg", position:"of Brand Strategy Agency"},
    {heading:"Impressive results", description: "Before partnering with Client Complex I had worked with and heard of many outreach agencies, non of whom were able to deliver results like Kasper & Niclas. So far it's been very impressive what the guys have been able to do - also communications has been super - they're simply professionals. Overall I couldn't recommend them more!", name:"CEO", image:"/people/Gustav CEO.jpg", position:"of E-commerce Agency"},
    {heading:"Big recommendation!", description: "If you know anything about ecom outreach, you know how difficult it is to get quality webshop owners on sales calls - Scalender has somehow cracked the code. Big recommendation from me and & the team", name:"CEO", image:"/people/Gizeno CEO.jpg", position:"of E-commerce Agency"},
]

export default function Testimonials() {
    return (
        <section className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px]">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">What clients have <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">to say</span></h1>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {testimonialsData.map((v, index) => <TestimonialCard count={index} key={v} Obj={v} />)}
                </div>
            </div>
        </section>
    )//
}

const TestimonialCard = (props:any) => {
    return (
        <div  className="p-10 border-[1px] rounded-xl flex flex-col justify-between">
            <img className="w-[100px] mb-[20px]" src="/5-star.webp"></img>
            <div className="flex-1">
                <h1 className="text-xl font-semibold mb-[14px]">{props.Obj.heading}</h1>
                <p className="text-gray-600 font-regular mb-12">{props.Obj.description}</p>
            </div>
            <div className="flex items-center gap-3">
                <img className="w-[50px] h-[50px] object-cover rounded-full" src={props.Obj.image}></img>
                <div>
                    <h3 className="font-semibold text-sm">{props.Obj.name}</h3>
                    <p className="text-gray-600 text-sm">{props.Obj.position}</p>
                </div>
            </div>
        </div>

    )
}