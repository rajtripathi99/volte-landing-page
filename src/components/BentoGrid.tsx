const BentoGrid = () => {
    return (
        <section className="min-h-screen w-full p-3 md:p-5 lg:p-8 xl:p-10 bg-white overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 h-auto md:h-[calc(100vh-5rem)]">
                {/* Left */}
                <div className="relative bg-[#F4F4F4] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-8 overflow-hidden min-h-[350px] md:min-h-0">
                    <div className="absolute top-4 left-4 md:top-5 md:left-5 lg:top-8 lg:left-8">
                        <p className="text-base md:text-lg lg:text-2xl font-semibold">Home Charging</p>
                    </div>
                    <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 lg:bottom-8 lg:left-8 max-w-[200px] md:max-w-[200px] lg:max-w-xs">
                        <p className="text-gray-500 text-xs md:text-sm lg:text-base">Locate the nearest station and recharge in minutes. Quick, reliable, and eco-friendly charging solutions tailored for your convenience.</p>
                    </div>
                    <div className="absolute -bottom-8 md:bottom-8 lg:bottom-14 -right-8 md:right-6 lg:right-10">
                        <img src="/images/bento-left.png" alt="bento-left" className="h-full object-contain scale-85 md:scale-90 lg:scale-110 xl:scale-125" />
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-3 md:gap-4">
                    {/* Top */}
                    <div className="relative bg-[#F4F4F4] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-8 min-h-[280px] md:min-h-0 md:flex-[0.7] overflow-hidden">
                        <div className="absolute top-4 left-4 md:top-5 md:left-5 lg:top-8 lg:left-8">
                            <p className="text-base md:text-lg lg:text-2xl font-semibold">Business Solution</p>
                        </div>
                        <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 lg:bottom-8 lg:left-8 max-w-[200px] md:max-w-[200px] lg:max-w-xs">
                            <p className="text-gray-500 text-xs md:text-sm lg:text-base">Find the nearest charging station with advanced technology that ensures fast, safe, and eco-friendly charging.</p>
                        </div>
                        <div className="absolute top-0 right-2 md:right-6 lg:right-15 h-full">
                            <img src="/images/bento-right-new-bg.png" alt="bento-right" className="h-full object-cover scale-125 md:scale-100 lg:scale-125 xl:scale-150" />
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="flex items-center justify-between bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-8 md:flex-[0.3] border border-gray-200">
                        <h1 className="text-2xl pl-2 md:text-xl lg:text-3xl xl:text-4xl font-semibold">Your Charging<br /> <span className="text-[#828282]">Experience, Elevated</span></h1>
                        <img src="/images/bento-bottom-right.png" alt="bento-bottom-right" className="scale-80 max-h-full object-contain max-w-[40%]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BentoGrid