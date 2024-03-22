export default function Packages() {
    return (
        <section className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px]">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Choose your <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">package</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] text-black">
                    <div>
                        <h1 className="text-[22px] font-medium mb-2">Done-for-you</h1>
                        <p className="text-gray-600">“I want this completely outsourced”</p>
                    </div>
                    <div>
                        <h1 className="text-[22px] font-medium mb-2">Done-with-you</h1>
                        <p className="text-gray-600">“I want to make my own copies and talk to leads myself”</p>
                    </div>
                </div>
            </div>
        </section>
    )
}