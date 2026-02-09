const BentoGrid = () => {
    return (
        <section className="min-h-screen w-full p-10 bg-white overflow-x-hidden">
            <div className="grid grid-cols-2 gap-4 h-[calc(100vh-5rem)]">
                {/* Left */}
                <div className="relative bg-[#F4F4F4] rounded-3xl p-8 overflow-hidden">
                    <div className="absolute top-8 left-8">
                        <p className="text-2xl font-semibold">Home Charging</p>
                    </div>
                    <div className="absolute bottom-8 left-8 max-w-xs">
                        <p className="text-gray-500">Locate the nearest station and <br /> recharge in minutes. Quick, reliable, <br /> and eco-friendly charging solutions <br /> tailored for your convenience.</p>
                    </div>
                    <div className="absolute bottom-14 right-10">
                        <img src="/images/bento-left.png" alt="bento-left" className="h-full object-contain scale-125" />
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-4">
                    {/* Top */}
                    <div className="relative bg-[#F4F4F4] rounded-3xl p-8 flex-[0.7] overflow-hidden">
                        <div className="absolute top-8 left-8">
                            <p className="text-2xl font-semibold">Business Solution</p>
                        </div>
                        <div className="absolute bottom-8 left-8 max-w-xs">
                            <p className="text-gray-500">Find the nearest charging station with <br /> advanced technology that ensures fast, <br /> safe, and eco-friendly charging.</p>
                        </div>
                        <div className="absolute top-10 right-15 h-full">
                            <img src="/images/bento-right-new-bg.png" alt="bento-right" className="h-full object-cover scale-150"/>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="flex items-center justify-between bg-white rounded-3xl p-8 flex-[0.3] border border-gray-200">
                        <h1 className="text-4xl font-semibold">Your Charging<br /> <span className="text-gray-400">Experience, Elevated</span></h1>
                        <img src="/images/bento-bottom-right.png" alt="bento-bottom-right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BentoGrid