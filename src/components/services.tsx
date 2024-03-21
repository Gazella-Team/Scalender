export default function Services() {
    return (
        <section style={{background: "radial-gradient(circle, rgba(17,35,83,1) 0%, rgba(11,18,55,1) 54%, rgba(11,10,40,1) 100%), url(/patterns/lines.svg)"}} className="h-100 py-[140px]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-white">
                <div className="text-center mb-20">
                    <h1 className="text-[44px] font-semibold">Services we <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">provide</span></h1>
                </div>
                <div className="grid grid-cols-2 gap-10 text-black">
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <img className="w-[50px]" src="/services/linkedin.png"></img>
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">LinkedIn Outreach</h1>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}} className="bg-white border-[1px] p-10 rounded-xl">
                        <div className="p-3 rounded-xl mb-8 border-[1px] inline-block">
                            <img className="w-[50px]" src="/services/email.png"></img>
                        </div>
                        <h1 className="text-[22px] font-medium mb-5">Cold Email Outreach</h1>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
