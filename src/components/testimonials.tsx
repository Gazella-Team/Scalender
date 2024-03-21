const testimonialsData = [
    {heading:"Phenomenal Service", description: "Great collaboration. I have now worked with Gustav for about 10 months, and we are fully satisfied with him, things are done well and efficiently, and you are never in doubt that he is ready to help.", name:"Bill Gates", image:"/people/two.jpg", position:"CEO & Founder"},
    {heading:"Phenomenal Service", description: "Great collaboration. I have now worked with Gustav for about 10 months, and we are fully satisfied with him, things are done well and efficiently, and you are never in doubt that he is ready to help.", name:"Bill Gates", image:"/people/two.jpg", position:"CEO & Founder"},
    {heading:"Phenomenal Service", description: "Great collaboration. I have now worked with Gustav for about 10 months, and we are fully satisfied with him, things are done well and efficiently, and you are never in doubt that he is ready to help.", name:"Bill Gates", image:"/people/two.jpg", position:"CEO & Founder"},
]

export default function Testimonials() {
    return (
        <section className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px]">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">What clients have <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">to say</span></h1>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {testimonialsData.map(v => <TestimonialCard key={v} Obj={v} />)}
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = (props:any) => {
    return (
        <div style={{background:"linear-gradient(338deg, rgba(6,96,255,0.19233630952380953) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="p-10 border-[1px] rounded-xl">
            <img className="w-[100px] mb-[20px]" src="/sliderlogos/meta.png"></img>
            <h1 className="text-xl font-semibold mb-[14px]">{props.Obj.heading}</h1>
            <p className="text-gray-600 font-regular mb-12">{props.Obj.description}</p>
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