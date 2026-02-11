const CTA = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-14 xl:p-20 min-h-auto md:min-h-screen w-full bg-white gap-3 md:gap-4">
            {/* Left Card */}
            <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-10 xl:p-12 flex flex-col justify-center gap-4 md:gap-5 lg:gap-8 xl:gap-10 h-auto md:h-[350px] lg:h-[450px] xl:h-[500px] w-full md:w-[40%]">
                <div className="space-y-2 md:space-y-3 lg:space-y-4">
                    <h1 className="text-xl md:text-xl lg:text-3xl xl:text-4xl font-semibold max-w-sm">Power Up Without <span className="text-[#828282]">Breaking The Bank</span></h1>
                    <p className="text-gray-500 text-xs md:text-sm lg:text-base max-w-sm">Affordable charging made simple! Whether you need a one-time boost or a subscription plan.</p>
                </div>
                <div className="flex items-center gap-4 md:gap-6 lg:gap-10 xl:gap-12">
                    <button className="flex items-center gap-2 bg-black text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm lg:text-base">
                        Book a Call
                    </button>
                    <div>
                        <p className="text-[10px] md:text-xs text-gray-500">Start on</p>
                        <p className="text-sm md:text-base lg:text-lg font-normal">$2.399</p>
                    </div>
                </div>
            </div>

            {/* Mobile: Two images side by side */}
            <div className="md:hidden flex gap-3 w-full">
                <div className="h-[250px] w-1/2">
                    <img src="/images/cta-left.png" alt="cta-left" className="h-full w-full object-cover rounded-2xl" />
                </div>
                <div className="h-[250px] w-1/2">
                    <img src="/images/cta-right.png" alt="cta-right" className="h-full w-full object-cover rounded-2xl" />
                </div>
            </div>

            {/* Desktop: Middle Image */}
            <div className="hidden md:block h-[350px] lg:h-[450px] xl:h-[500px] w-[40%]">
                <img src="/images/cta-left.png" alt="cta-left" className="h-full w-full object-cover rounded-2xl md:rounded-3xl" />
            </div>

            {/* Desktop: Right Image */}
            <div className="hidden md:block h-[350px] lg:h-[450px] xl:h-[500px] w-[20%]">
                <img src="/images/cta-right.png" alt="cta-right" className="h-full w-full object-cover rounded-2xl md:rounded-3xl" />
            </div>
        </div>
    )
}

export default CTA